import path from 'path'
import fs from 'fs'

export const writeToFile = (text) => {
  const documentsFolder = 'C:\\Users\\elias\\Documents';
  const filePath = path.join(documentsFolder, 'outputExpress.txt');

  try {
    fs.appendFileSync(filePath, text + '\n');
    console.log('Text has been written to the file successfully.');
  } catch (error) {
    console.error('An error occurred while writing to the file:', error);
  }
};

