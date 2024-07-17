import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AppRouter from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../build/swagger.json';

// Initialisierung von express
const server = express();

// Middleware
server.use(bodyParser.json());
server.use(cors());

// Swagger-UI Middleware
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Mounten der Routen
server.use('/v1', AppRouter);

// Start des Servers
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default server;
