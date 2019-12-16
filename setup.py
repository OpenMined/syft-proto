#!/usr/bin/env python
from setuptools import setup, find_packages
from shutil import copyfile
from os import path

# Copy proto.json from root into package, to include it
cwd = path.dirname(__file__)
copyfile(path.join(cwd, 'proto.json'), path.join(cwd, 'syft_proto', 'proto.json'))

setup(
    name="syft-proto",
    version='0.1.0a1',
    description='PySyft protocol constants.',
    packages=['syft_proto'],
    package_data={'': ['proto.json']},
    license='LICENSE',
    include_package_data=True
)
