#!/bin/bash

BUILD_PATH="$(pwd)/docs"

if [ -d "$BUILD_PATH" ]
then
  rm -r "$BUILD_PATH"
fi