const jsonServer = require("json-server");
const middleware = jsonServer.defaults();
const server = jsonServer.create();
server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require("./data/users");
const users = userData.getUsers;
server.get('/api/users', (req, res, next) => {
  res.status(200).send(users);
})

server.post('/api/users', (req, res, next) => {
  const newId = users.reduce((prev, user) => {
    if(user.id >= prev) {
      return prev+1;
    }
  } , 1)
  const newUser = req.body;
  newUser.id =newId;
  users.push(newUser);
  res.status(200).send(users);
})



server.listen(3000, () => {
  console.log("Json Server listening on port 3000");
})
