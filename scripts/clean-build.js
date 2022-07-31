const fs = require('fs');
const path = require('path');

const buildPath = path.resolve(process.cwd(), 'build');

if (fs.existsSync(buildPath)) {
  fs.rm(buildPath, { recursive: true }, () => {
    console.log('build folder has been cleaned');
  });
}
