import * as util from '../util/reviews_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

export const deleteReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
}

export const fetchReviews = () => dispatch => (
    util.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
        .catch(err => console.log(err))
)

export const fetchReview = (reviewId) => dispatch => (
    util.fetchReview(reviewId)
        .then(review => dispatch(receiveReviews(review)))
        .catch(err => console.log(err))
)

export const composeReview = (review) => (dispatch) => {
    console.log(review)
    
    return util.createReview(review)
        .then((result) => dispatch(receiveReview(result)))
        .catch(err => console.log(err))
}

export const removeReview = (reviewId) => (dispatch) => {
    return util.deleteReview(reviewId)
        .then( ()=> dispatch())
}