const server = require('./src/server');
const { PORT } = require('./src/config/envs');
server.listen(PORT || 3001, async () => {
  console.log('Server listening on port', PORT);
});
