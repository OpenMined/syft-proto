#!/usr/bin/env python
from setuptools import setup, find_packages
from shutil import copyfile
from os import path
import versioneer

# Copy proto.json from root into package, to include it
cwd = path.dirname(__file__)
copyfile(path.join(cwd, "proto.json"), path.join(cwd, "syft_proto", "proto.json"))

setup(
    name="syft-proto",
    version=versioneer.get_version(),
    cmdclass=versioneer.get_cmdclass(),
    description="PySyft protocol constants.",
    packages=find_packages(),
    package_data={"": ["proto.json"]},
    install_requires=["protobuf>=3.11.1"],
    license="LICENSE",
    include_package_data=True,
)
