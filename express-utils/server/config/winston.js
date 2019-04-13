'use strict';

const winston = require('winston');
const path = require('path');

const config = {
  file: {
    level: 'warn',
    filename: path.join(__dirname, '../logs/warn.log'),
    handleExceptions: true,
    format: winston.format.json(),
    maxsize: 5 * 1024 * 1024, // 5MB en bytes
    maxFiles: 5
  },
  console: {
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(config.console),
    new winston.transports.File(config.file)
  ]
});

logger.stream = {
  write: function (message) {
    logger.info(message);
  }
};

module.exports = logger;
