#!/bin/bash

BUILD_PATH="$(pwd)/build"

if [ -d "$BUILD_PATH" ]
then
  rm -r "$BUILD_PATH"
fi