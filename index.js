const app = require('./src/app');

const sequelize = require('./src/config/database');

const { PORT } = require('./src/config/env');

require('./src/models');
require('./src/models/assosiations');

app.listen(PORT || 3001, async () => {
  try {
    await sequelize.sync({ force: true, logging: false });
  } catch (error) {
    console.log(error.message);
  }
});
