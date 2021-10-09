
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  __filename,
  __dirname,
}
// exports.__dirname = __dirname
// exports.__filename = __filename