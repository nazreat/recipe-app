import React from 'react';
import recipes from './recipes';
import RecipeCard from './components/RecipeCard';

const RecipeList = () => (
  <div className="grid">
    {recipes.map(recipe => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;
