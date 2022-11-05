const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar', 'isSeller']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/',
  //auth middleware to check for required fields.
  [
    auth,
    [
      check('location', 'Location is required').not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty(),
      check('price', 'Price is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      price,
      location,
      bio,
      skills,
      phone,
      email,
      image,
      rating,
      numReviews
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (price) profileFields.price = price;
    if (image) profileFields.image = image;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (skills) profileFields.skills = skills;
    if (rating) profileFields.rating = rating;
    if (numReviews) profileFields.numReviews = numReviews;

    // Build social object
    profileFields.info = {};
    if (phone) profileFields.info.phone = phone;
    if (email) profileFields.info.email = email;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const keyword = req.query.keyword?{
      skills:{
        $regex: req.query.keyword,
        $options: 'i'
      }
    }: {}
    const profiles = await Profile.find({...keyword}).populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile/user/:user_id/reviews
// @desc     Create new Review
// @access   Private
router.post('/user/:user_id/reviews', auth, async (req, res) => {
  try {
    const {name, rating, comment } = req.body;

    const profile = await Profile.findOne({
      user: req.params.user_id,
    });

    if (profile) {
      const alreadyReviewed = profile.reviews.find(
        (r) => r.user.toString() === req.user.id.toString()
      );

      if (alreadyReviewed) {
        res.status(400).json({ msg: 'This seller is already reviewed' });
      }
      else{
        const review = {
          name,
          rating: Number(rating),
          comment,
          user: req.user.id,
        };

        profile.reviews.push(review);

        profile.numReviews = profile.reviews.length;

        profile.rating =
          profile.reviews.reduce((acc, item) => item.rating + acc, 0) /
          profile.reviews.length;

        await profile.save();
        res.status(201).json({ msg: 'Review added' });
      }
      
    } else {
      res.status(404);
      throw new Error('Profile not found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.name });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
router.put(
  '/education',
  [
    auth,
    [
      check('degree', 'Degree is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
      check('description', 'Tell us something about this degree').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      degree,
      location,
      description
    } = req.body;

    const newEdu = {
      degree,
      location,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/profile/education/:edu_id
// @desc     Delete education from profile
// @access   Private

router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const foundProfile = await Profile.findOne({ user: req.user.id });
    foundProfile.education = foundProfile.education.filter(
      (edu) => edu._id.toString() !== req.params.edu_id
    );
    await foundProfile.save();
    return res.status(200).json(foundProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});


module.exports = router;
