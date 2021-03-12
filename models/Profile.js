const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pastExperience: [
    {
      title: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      degree: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  info: {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
