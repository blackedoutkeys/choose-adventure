const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const choiceSchema = new Schema({
  text: {
    type: String
  },
  target: [{
    type: Schema.Types.ObjectId,
    ref: 'Chapter'
  }]
});
const Choice = mongoose.model('Choice', choiceSchema);
module.exports = Choice