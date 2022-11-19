const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
);

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  image: {
    type: String,
  },
  addharImage: {
    type: String,
  },
  policeVerificationImage: {
    type: String,
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

  locationArray: {
    type: Map,
    required: true,
  },

  skillArray: {
    type: Map,
    required: true,
  },
  reviews: [reviewSchema],
  verificationStatus: {
    type: String,
    enum: ['VERIFIED', 'PENDING', 'REJECTED'],
    default: 'PENDING'
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },

  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },

  education: [
    {
      degree: {
        type: String,
      },
      location: {
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
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
