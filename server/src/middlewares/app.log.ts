import { createLogger, format, transports } from 'winston';
const { combine, simple, timestamp, prettyPrint } = format;

export const logger = createLogger({
  format: combine(simple(), timestamp(), prettyPrint()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: './logs/app.log' }),
    new transports.File({ filename: './logs/errorlog.log', level: 'error' }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: './logs/exceptions.log' }),
  ],
  rejectionHandlers: [
    new transports.File({ filename: './logs/rejections.log' }),
  ],
});
