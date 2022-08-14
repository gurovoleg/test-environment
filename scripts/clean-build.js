const fs = require('fs');
const path = require('path');

const buildPath = path.resolve(process.cwd(), 'docs');

if (fs.existsSync(buildPath)) {
  fs.rm(buildPath, { recursive: true }, () => {
    console.log('build folder has been cleaned');
  });
}
