import lessModule from './less';
import sassModule from './sass';
import fileModule from './file';
import svgModule from './svg';
import javascriptModule from './javascript';

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