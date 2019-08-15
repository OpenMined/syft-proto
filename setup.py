#!/usr/bin/env python
from setuptools import setup, find_packages
from shutil import copyfile
from os import path

# Copy proto.json from root into package, to include it
cwd = path.dirname(__file__)
copyfile(path.join(cwd, 'proto.json'), path.join(cwd, 'pysyft_proto', 'proto.json'))

setup(
    name="pysyft-proto",
    version='0.0.1',
    description='PySyft protocol constants.',
    packages=['pysyft_proto'],
    package_data={'': ['proto.json']},
    license='LICENSE',
    include_package_data=True
)
