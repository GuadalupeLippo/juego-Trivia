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
        { id: 1, name: "Juan", review: "Excelente experiencia", rating: 5 },
        { id: 2, name: "Ana", review: "Muy buen juego", rating: 4 }
      ];
      setReviews(savedReviews.slice(0, 2));
    };
    fetchReviews();
  }, []);
  

  const saveReview = () => {
    if (!newReview.name || !newReview.review || newReview.rating === 0) {
      alert("Por favor, rellene todos los campos antes de enviar su reseña.");
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
      

      <button className="leave-review-btn" onClick={() => setShowModal(true)}>DEJAR RESEÑA</button>

      {showModal && (
        <div className="modal-review" onClick={() => setShowModal(false)}>
          <div className="modal-content-review" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Su nombre"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            />
            <textarea
              placeholder="Su reseña"
              value={newReview.review}
              onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            />
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
            >
              <option value={0}>Elija su puntuación</option>
              {[1, 2, 3, 4, 5].map(star => (
                <option key={star} value={star}>{star} stars</option>

            ))}
            </select>
            <div className="review-buttons">
              <button className="submit-review-btn" onClick={saveReview}>Compartir reseñas</button>
              <button className="cancel-review-btn" onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
