// src/App.js
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BreakfastPage from './BreakfastPage';
import spaghetti from './images/spaghetti.jpg';
import Dessert from './images/Dessert.jpg';
import Dessert1 from './images/Dessert1.jpg';
import Dessert2 from './images/Dessert2.jpg';
import chicken from './images/chicken.jpg';
import avocado from './images/avocado.jpg';
import toast from './images/french toast.jpg';
import pancakes from './images/pancakes.jpg';
console.log("App loaded");


function HomePage({ setSelectedRecipe, favorites, setFavorites, search, setSearch }) {
  const [openCategory, setOpenCategory] = useState(null);

const categoryImages = {
  Breakfast: [avocado, toast, pancakes],
  Lunch: [chicken, chicken, chicken, chicken],
  Dinner: [spaghetti, spaghetti, spaghetti, spaghetti],
  Dessert: [Dessert, Dessert1, Dessert2],
};


  const recipesByCategory = {
    Breakfast: [
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
    ],
    Lunch: [
      {
        title: 'Chicken Tikka Masala',
        description: 'Creamy, spicy, and delicious Indian curry.',
        image: chicken,
        ingredients: ['Chicken', 'Yogurt', 'Spices'],
      },
    ],
    Dinner: [
      {
        title: 'Spaghetti Bolognese',
        description: 'A classic Italian pasta dish with meat sauce.',
        image: spaghetti,
        ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce'],
      },
    ],
    Dessert: [],
  };

  const toggleFavorite = (title) => {
    setFavorites(prev =>
      prev.includes(title) ? prev.filter(f => f !== title) : [...prev, title]
    );
  };
    return (
    <div className="app">
      <header>
        <h1 className="title">🍽️ My Recipe Book</h1>
      </header>

      <input
        className="search"
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-container">
        {Object.entries(recipesByCategory).map(([category, recipes]) => (
          <Link
            key={category}
            to={`/${category.toLowerCase()}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="category-section">
             <div className="category-grid">
  {categoryImages[category].slice(0, 4).map((imgSrc, idx) => (
    <img key={idx} src={imgSrc} alt={`${category} ${idx}`} />
  ))}
</div>

              <h2 className="category-title">{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ✅ Moved here — no longer inside HomePage!
function App() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage search={search} setSearch={setSearch} favorites={favorites} setFavorites={setFavorites} setSelectedRecipe={setSelectedRecipe} />}
      />
      <Route path="/breakfast" element={<BreakfastPage />} />
      <Route
        path="*"
        element={<HomePage search={search} setSearch={setSearch} favorites={favorites} setFavorites={setFavorites} setSelectedRecipe={setSelectedRecipe} />}
      />
    </Routes>
  );
}

export default App;
