import express from 'express';
import next from 'next';

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEV = NODE_ENV !== 'production';

const app = next({ dev: IS_DEV });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/_next/*', (req, res) => {
    console.log('/_next/*', req.url);
    handle(req, res);
  });

  server.use(express.json());

  server.get('/api/v1/public/get-user', (_, res) => {
    console.log('Express route /get-user');
    res.json({ user: { email: 'team@builderbook.org' } });
  });

  server.all('*', (req, res) => {
    handle(req, res);
  });

  server.listen(process.env.PORT_APP, () => {
    console.log(`> Ready on ${process.env.URL_APP}`);
  });
});