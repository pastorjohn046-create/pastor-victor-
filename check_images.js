import fs from 'fs';
import path from 'path';

const searchPaths = ['/', '/app', '/workspace', '/tmp', '/app/applet'];

for (const searchPath of searchPaths) {
  try {
    console.log(`--- Listing ${searchPath} ---`);
    const files = fs.readdirSync(searchPath);
    files.forEach(f => {
       const fullPath = path.join(searchPath, f);
       try {
         const stats = fs.statSync(fullPath);
         console.log(`${fullPath} [${stats.isDirectory() ? 'DIR' : 'FILE'}]`);
       } catch (e) {
         console.log(`${fullPath} [ERROR]`);
       }
    });
  } catch (e) {
    console.log(`Could not list ${searchPath}: ${e.message}`);
  }
}
