import React, { useEffect, useState } from 'react';
import s from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);

console.log(error)

    useEffect(() => {
        fetchReviews(id)
            .then(data => setReviews(data))
            .catch(err => setError(err.message));
    }, [id]);

    if (!reviews) {
        return <h2>Loading...</h2>;
    }

    // Перевіряємо, чи є відгуки
    if (reviews.length === 0) {
        return <h2>No reviews available.</h2>;
    }

    return (
        <div className={s.wrapper}>
            {reviews.map(review => (
                <ul  key={review.id} className={s.actorslist}><li key={review.id}>
                    <h2 className={s.name}>Author: {review.author}</h2>
                    <p className={s.character}>{review.content}</p>
                </li></ul>
                
            ))}
        </div>
    );
}

export default Reviews;
