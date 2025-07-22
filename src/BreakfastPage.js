// src/BreakfastPage.js
import React from 'react';
import avocado from './images/avocado.jpg';
import toast from './images/french toast.jpg';
import pancakes from './images/pancakes.jpg';
import './App.css';

const breakfastRecipes = [
  {
    title: 'Avocado Toast',
    description: 'Quick and healthy breakfast with smashed avocado.',
    image: avocado,
    ingredients: ['Avocado', 'Bread', 'Lemon juice'],
  },
  {
    title: 'French Toast',
    description: 'Golden-brown and lightly sweet breakfast classic.',
    image: toast,
    ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon'],
  },
  {
    title: 'Pancakes',
    description: 'Fluffy pancakes perfect with maple syrup.',
    image: pancakes,
    ingredients: ['Flour', 'Eggs', 'Milk', 'Baking Powder'],
  },
];

export default function BreakfastPage() {
  return (
    <div className="app">
      <h1>🍳 Breakfast Recipes</h1>
      <div className="card-container">
        {breakfastRecipes.map((recipe, idx) => (
          <div key={idx} className="card">
            <img src={recipe.image} alt={recipe.title} className="card-img" />
            <h2 className="card-title">{recipe.title}</h2>
            <p className="card-desc">{recipe.description}</p>
            <ul className="ingredients">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
