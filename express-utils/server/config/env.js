'use strict';
console.log('NODE_ENV =', process.env.NODE_ENV);

// Evitar errores de escritura
const enviroments = {
  "production": "production",
  "development": "development"
}

// Entorno por defecto
const ENV = process.env.NODE_ENV || enviroments.development;

// Escribimos un objeto de configuración para cada entorno.
const config = {
  [enviroments.production]: {
    PORT: 80,
    JWT_SECRET: `ultrasecret`
  },
  [enviroments.development]: {
    PORT: 8080,
    JWT_SECRET: `ultrasecret`
  }
};

const CONFIG = config[ENV];

if(!CONFIG) throw new Error(`Invalid NODE_ENV=${ENV}`);

process.env = {
  ...process.env,
  ...CONFIG
};
