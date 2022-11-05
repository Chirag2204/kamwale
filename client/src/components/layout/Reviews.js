import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { createSellerReview,  } from '../../actions/profile';
import Rating from '../layout/Rating'

const Reviews = ({
  createSellerReview,
  profile: { profile },
  auth: {
    user: { _id, name, avatar },
    isAuthenticated,
    loading
  },
  history
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    createSellerReview(profile.user._id, {
      name,
      rating,
      comment,
    }, history);
    
    window.location.reload();
  };
  return (
    <div className=' bg-secondary profile-reviews'>
      <Fragment>
        {profile.reviews.length === 0 && <h4>No Reviews</h4>}
        <div className='profile-edu bg-white p-2'>
          <h2 className='text-primary'>Reviews</h2>
          {profile.reviews.map((review) => (
            <div key={review._id}>
              <h3>{review.name}</h3>
              <Rating value={review.rating} />
              <p class="small"
              >{review.createdAt.substring(0, 10)}</p>
              <p>{review.comment}</p>
            </div>
          ))}
          <div>
            <h2 className='text-dark text-primary'>Write a Customer Review</h2>
            {isAuthenticated && loading === false ? (
              <form class='form' onSubmit={submitHandler}>
                <div class='form-group'>
                  <div className='form-text'>* Rating</div>
                  <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value=''>Select...</option>
                    <option value='1'>1 - Poor</option>
                    <option value='2'>2 - Fair</option>
                    <option value='3'>3 - Good</option>
                    <option value='4'>4 - Very Good</option>
                    <option value='5'>5 - Excellent</option>
                  </select>
                </div>
                <div class='form-group'>
                  <div className='form-text'>* Comment</div>
                  <textarea
                    row='3'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <input type='submit' className='btn btn-primary my-1' />
              </form>
            ) : (
              <p>
                Please <Link to='/login'>sign in</Link> to write a review{' '}
              </p>
            )}
          </div>
        </div>
      </Fragment>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { createSellerReview })(Reviews);
