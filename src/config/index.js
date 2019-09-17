import devConfig from './development';
import prodConfig from './production';

const getEnvConf = (env) => {
  switch(env){
  case 'developmnet':
    return devConfig;
  case 'production':
    return prodConfig;
  default: 
    return devConfig;
  }
};

export default getEnvConf(process.env.NODE_ENV);

