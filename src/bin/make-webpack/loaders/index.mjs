import lessModule from './less.mjs';
import sassModule from './sass.mjs';
import fileModule from './file.mjs';
import svgModule from './svg.mjs';
import javascriptModule from './javascript.mjs';

const loaders = {
  rules: [
    lessModule,
    sassModule,
    fileModule,
    svgModule,
    javascriptModule,
  ]
}

export default loaders