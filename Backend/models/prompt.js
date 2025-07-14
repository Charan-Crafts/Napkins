const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  promptText: {
    type: String,
    required: true
  },
  result: {
    type: String
  },
  type: {
    type: String,
    default: 'text' // or 'image'
  }
}, { timestamps: true });

module.exports = mongoose.model('Prompt', promptSchema);
