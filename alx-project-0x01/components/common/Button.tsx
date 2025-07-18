import fs from 'fs';
import path from 'path';

const checkButtonFile = (): boolean => {
  const filePath = path.join(process.cwd(), 'components', 'common', 'Button.tsx');
  
  try {
    const stats = fs.statSync(filePath);
    return stats.size > 0;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return false; // File doesn't exist
    }
    throw error; // Other error
  }
};

// Usage
const existsAndNotEmpty = checkButtonFile();
console.log('Button.tsx exists and is not empty:', existsAndNotEmpty);