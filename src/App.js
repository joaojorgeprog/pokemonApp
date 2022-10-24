import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import AllPokemons from './scenes/AllPokemons'
import DetailPokemons from './scenes/DetailPokemons'
import FavoritePokemons from './scenes/FavoritePokemons'

import 'bootstrap/dist/css/bootstrap.min.css'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (

        <Routes>
          <Route exact path="/" element={<AllPokemons />} />
          <Route path="/favorites" element={<FavoritePokemons />} />
          <Route path="/details/:id" element={<DetailPokemons />} />
        </Routes>

  );
}

// You can think of these components as "pages"
// in your app.

function Fovorites() {
  return (
    <div>
      <h2>Fovorites</h2>
    </div>
  );
}
