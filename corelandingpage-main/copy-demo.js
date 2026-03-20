import { cpSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = join(__dirname, '..', 'demo');
const dest = join(__dirname, 'public', 'demo');

// Create public directory if it doesn't exist
const publicDir = join(__dirname, 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Copy demo files
try {
  cpSync(source, dest, { recursive: true });
  console.log('✅ Demo files copied to public/demo');
} catch (error) {
  console.error('❌ Error copying demo files:', error.message);
  process.exit(1);
}
