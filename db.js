const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://poojithgavini:kjvGRIpxEVnJa7J7@cluster0.s8owjpy.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
)

module.exports = mongoose