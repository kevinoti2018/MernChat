const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@nodetuts.6tosh.mongodb.net/chatAppMern?retryWrites=true&w=majority'`),
// console.log('connected to mongodb')
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
