#!/usr/bin/env python
from setuptools import setup, find_packages
from shutil import copyfile
import os
import versioneer

# Utility function to read the README file.
# Used for the long_description.  It's nice, because now 1) we have a top level
# README file and 2) it's easier to type in the README file than to put a raw
# string in below ...
def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()

# Copy proto.json from root into package, to include it
cwd = os.path.dirname(__file__)
copyfile(os.path.join(cwd, "proto.json"), os.path.join(cwd, "syft_proto", "proto.json"))

setup(
    name="syft-proto",
    version=versioneer.get_version(),
    cmdclass=versioneer.get_cmdclass(),
    description="Syft protocol constants.",
    packages=find_packages(),
    package_data={"": ["proto.json"]},
    long_description=read("README.md"),
    long_description_content_type="text/markdown",
    url="https://github.com/OpenMined/syft-proto",
    install_requires=["protobuf>=3.12.2"],
    license="LICENSE",
    include_package_data=True,
)
