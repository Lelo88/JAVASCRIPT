const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }), // crea archivos de mensajes combinados
  ],
});

//
// If we're not in production then log to the `logger` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}


//logger.log("Sesión de errores en JS");
logger.info("Hola, esto es un mensaje informativo");
logger.debug("Esto es un debug")
logger.warn("Este es un mensaje de advertencia");
logger.error("Esto es un error");
