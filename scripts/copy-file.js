import fs from 'fs';

function copyFile(source, dist) {
  if (fs.existsSync(source)) {
    fs.copyFile(source, dist, (err) => {
      if (err) {
        console.log('File copy error', err);
      }

      console.log('File copied');
    });
  }
}
