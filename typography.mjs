import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PREPOSITIONS = [
  "в", "на", "и", "к", "с", "о", "у", "от", "за", "до", "под", "над", "из",
];

function addNonBreakingSpaces(content) {
  const regex = new RegExp(`(?<!\\S)(${PREPOSITIONS.join('|')})([\\s\\u00A0]+)`, 'gi');

  return content.replace(regex, (match, p1) => {
    return `${p1.trim()}\u00A0`;
  });
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = addNonBreakingSpaces(content);
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
    } 
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
}

function processDirectory(directory) {
  try {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stat = fs.lstatSync(filePath);

      if (stat.isDirectory()) {
        processDirectory(filePath); 
      } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
        processFile(filePath); 
      }
    });
  } catch (err) {
    console.error(`Error processing directory: ${directory}`, err);
  }
}

processDirectory(path.resolve(__dirname, "src"));
