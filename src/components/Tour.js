import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <article>
            <img src={tour.image} alt={tour.name} width="300" />
            <h4>{tour.name}</h4>
            <h4>₹{tour.price}</h4>

            <p id={`tour-item-para-${tour.id}`}>
                {showMore ? tour.info : tour.info.substring(0, 200) + "..."}
                <button
                    id={showMore ? `see-less-${tour.id}` : `see-more-${tour.id}`}
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "See less" : "Show more"}
                </button>
            </p>

            <button
                id={`delete-btn-${tour.id}`}
                onClick={() => removeTour(tour.id)}
            >
                Remove
            </button>
        </article>
    );
};

export default Tour;
