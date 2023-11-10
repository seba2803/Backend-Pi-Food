const app = require('./src/app');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { connectionString } = require('./src/config/database');

const { PORT } = require('./src/config/env');

app.listen(PORT || 3001, async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('conexion establecida con mongoDB');
  } catch (error) {
    console.log(error.message);
  }
});

// const MichiSchema = new Schema({ name: String });
// const Cat = model('Cat', MichiSchema);

// Cat.find({})
//   .then((gatos) => {
//     console.log(gatos);
//     mongoose.connection.close();
//   })
//   .catch((err) => console.log(err.message));

// const GatoManoso = new Cat({ name: 'Coquito' });

// GatoManoso.save()
//   .then((pelushe) => {
//     console.log(pelushe);
//     mongoose.connection.close();
//   })
//   .catch((error) => console.log(error.message));
