import winston from 'winston';
import { PATH_LOGGER } from '../constants';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    service: 'user-service'
  },
  transports: [
    new winston.transports.File({ filename: `${PATH_LOGGER}/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${PATH_LOGGER}/combined.log` })
  ]
});

export default logger;