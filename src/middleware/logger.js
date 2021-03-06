import winston from 'winston';
import expressWinston from 'express-winston';
import { PATH_LOGGER } from '../constants';

const logger = expressWinston.logger({
  level: 'info',
  transports: [
    new winston.transports.File({ filename: `${ PATH_LOGGER }/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${ PATH_LOGGER }/combined.log` })
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute: function() {return false;}
});

export default logger;