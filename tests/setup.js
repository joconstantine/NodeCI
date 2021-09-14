jest.setTimeout(300000);

require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true }).then(() => {
  console.log('done connecting to mongose');
});
