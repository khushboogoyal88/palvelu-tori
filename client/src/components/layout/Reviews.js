import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { createSellerReview,  } from '../../actions/profile';
import Rating from '../layout/Rating'
import { setAlert } from '../../actions/alert';

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
    <div className=' bg-secondary p-2'>
      <Row>
        <Col md={6}>
          <h2>Reviews</h2>
          {profile.reviews.length === 0 && <p>No Reviews</p>}
          <ListGroup variant='flush'>
            {profile.reviews.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review.rating} />
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <h2>Write a Customer Review</h2>
              {isAuthenticated && loading === false ? (
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId='rating'>
                    <Form.Control
                      as='select'
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value=''>Select...</option>
                      <option value='1'>1 - Poor</option>
                      <option value='2'>2 - Fair</option>
                      <option value='3'>3 - Good</option>
                      <option value='4'>4 - Very Good</option>
                      <option value='5'>5 - Excellent</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='comment'>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as='textarea'
                      row='3'
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button type='submit' variant='primary'>
                    Submit
                  </Button>
                </Form>
              ) : (
                <p>
                  Please <Link to='/login'>sign in</Link> to write a review{' '}
                </p>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { createSellerReview })(Reviews);
