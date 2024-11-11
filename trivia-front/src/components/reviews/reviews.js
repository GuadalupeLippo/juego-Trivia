import React, { useEffect, useState } from 'react';
import './reviews.css';

const addFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Itim&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", review: "", rating: 0 });

  useEffect(() => {
    addFont();
    const fetchReviews = () => {
      const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [
        { id: 1, name: "Juan", review: "Excellent experience", rating: 5 },
        { id: 2, name: "Ana", review: "Very good service", rating: 4 }
      ];
      setReviews(savedReviews.slice(0, 2));
    };
    fetchReviews();
  }, []);

  const saveReview = () => {
    if (!newReview.name || !newReview.review || newReview.rating === 0) {
      alert("Please fill out all fields before submitting your review.");
      return;
    }

    const updatedReviews = [
      ...reviews,
      { ...newReview, id: reviews.length + 1 }
    ];

    const limitedReviews = updatedReviews.slice(-2);

    localStorage.setItem('reviews', JSON.stringify(limitedReviews));
    setReviews(limitedReviews);
    setNewReview({ name: "", review: "", rating: 0 });
    setShowModal(false);
  };

  return (
    <div className="reviews-container">
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <strong>{review.name}:</strong> {review.review}
            <div className="review-rating">
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </div>
          </li>
        ))}
      </ul>

      <button className="leave-review-btn" onClick={() => setShowModal(true)}>LEAVE A REVIEW</button>

      {showModal && (
        <div className="modal-review" onClick={() => setShowModal(false)}>
          <div className="modal-content-review" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Your name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            />
            <textarea
              placeholder="Your review"
              value={newReview.review}
              onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            />
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
            >
              <option value={0}>Choose your rating</option>
              {[1, 2, 3, 4, 5].map(star => (
                <option key={star} value={star}>{star} stars</option>
              ))}
            </select>
            <div className="review-buttons">
              <button className="submit-review-btn" onClick={saveReview}>Submit Review</button>
              <button className="cancel-review-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
