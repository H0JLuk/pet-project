const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

const PORT = 5_000;
const REQUEST_DELAY = 800;

const server = jsonServer.create();

const pathToDB = path.resolve(__dirname, 'db.json');
const router = jsonServer.router(pathToDB);

server.use(async (req, res, next) => {
  await new Promise(resolve => {
    setTimeout(resolve, REQUEST_DELAY);
  });
  next();
});

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const { users } = JSON.parse(fs.readFileSync(pathToDB, 'utf-8'));
    const userFromDB = users.find(user => user.username === username && user.password === password);
    if (userFromDB) {
      return res.json(userFromDB);
    }

    return res.status(403).json({ message: 'Не авторизован' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Не авторизован' });
  }
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.info('JSON Server is running');
});
