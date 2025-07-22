import React from 'react';
import './RecipeCard.css';

function RecipeCard({ title, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default RecipeCard;
