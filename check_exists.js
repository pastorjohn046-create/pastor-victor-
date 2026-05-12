import fs from 'fs';
const files = ['/input_file_0.png', '/input_file_1.png', '/input_file_2.png', '/input_file_3.png', '/input_file_4.png'];
files.forEach(f => {
  console.log(`${f} exists: ${fs.existsSync(f)}`);
});
