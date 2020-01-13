const pbjs = require('protobufjs/cli').pbjs;
const pbts = require('protobufjs/cli').pbts;
const fs = require('fs');
const path = require('path');

const find = (dir, filter, fileList = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const fileStat = fs.lstatSync(filePath);
        if (fileStat.isDirectory()) {
            find(filePath, filter, fileList);
        } else if (filter.test(filePath)) {
            fileList.push(filePath);
        }
    });
    return fileList;
};

const genStaticProtobufCode = (level, path = '', out = []) => {
    for (let key of Object.keys(level.nested)) {
        out.push(`static_root.${path}${key} = root.lookup('${path}${key}').ctor;`);
        if (level.nested[key].nested) {
            genStaticProtobufCode(level.nested[key], `${path}${key}.`, out);
        }
    }
    return out;
};

const protoDir = path.join(path.dirname(path.dirname(__dirname)), 'protobuf');
const outStaticFile = path.join(path.dirname(__dirname), 'protobuf.js');
const outTypesFile = path.join(path.dirname(__dirname), 'protobuf.d.js');
const protoFiles = find(protoDir, /\.proto$/);

const compile = async (type, filename = '') => {
    let fnArgs = [];
    if (filename) {
        fnArgs = ['-o', filename];
    }

    let args = [
        '-t', type,
        '-w', 'commonjs',
        '--keep-case',
        '-p', protoDir,
        ...fnArgs,
        ...protoFiles
    ];

    return pbjs.main(args);
};


const main = async () => {
    await compile('static-module', outStaticFile);
    console.log(`Compiled ${outStaticFile}`);

    await pbts.main(['-o', outTypesFile, outStaticFile]);
    console.log(`Generated ${outTypesFile}`);
};

main().then(() => {
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
});
