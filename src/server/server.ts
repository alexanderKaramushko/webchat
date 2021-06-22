import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

server.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 8080');
});

export default {};
