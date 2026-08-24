import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favoritos={favoritos}
              setFavoritos={setFavoritos}
            />
          }
        />

        <Route
          path="/favoritos"
          element={
            <Favorites
              favoritos={favoritos}
            />
          }
        />

        <Route
          path="/sobre"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;