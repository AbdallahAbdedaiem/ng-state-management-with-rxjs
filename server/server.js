const jsonServer = require("json-server");
const middleware = jsonServer.defaults();
const server = jsonServer.create();
server.use(middleware);
server.use(jsonServer.bodyParser);

const boxerData = require("./data/boxers");
const boxers = boxerData.getBoxers;
server.get('/api/boxers', (req, res, next) => {
  res.status(200).send(boxers);
})

server.post('/api/boxers', (req, res, next) => {
  const newBoxer = req.body;
  newBoxer.id = getNewID(boxers);
  boxers.push(newBoxer);
  res.status(200).send(users);
})

function getNewID(boxers) {
  return boxers.reduce((prev, boxer) => {
    if(boxer.id >= prev) {
      return prev+1;
    }
  }, 1);
}



server.listen(3000, () => {
  console.log("Json Server listening on port 3000");
})
