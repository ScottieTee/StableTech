const mongoose = require('mongoose');
const env = require("dotenv");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/StableTech', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
module.exports = mongoose.connection;