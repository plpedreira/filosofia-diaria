import PhilosophyCard from "./components/PhilosophyCard";
import philosophies from "./data/philosophies";
import { useState } from "react";
import "./App.css"

function App() {
  const hoje = new Date();
  const dia = hoje.getDate();

  const [indice, setIndice] = useState(dia % philosophies.length);
  const [favoritos, setFavoritos] = useState<number[]>([]);

  function proximaFilosofia() {
    setIndice((indice + 1) % philosophies.length);
  }

  function favoritarFilosofia() {
    if (favoritos.includes(indice)) {
      setFavoritos(
        favoritos.filter((favorito) => favorito !== indice)
      );
    } else {
      setFavoritos([...favoritos, indice]);
    }
  }

  return (
    <div className="app">

      <header className="header">
        <h1>Filosofia Diária</h1>
        <p>Uma reflexão para cada dia.</p>
      </header>

      <main className="main">

        <section className="daily-philosophy">
          <PhilosophyCard philosophy={philosophies[indice]} />

          <div className="actions">
            <button onClick={proximaFilosofia}>
              Outra filosofia
            </button>

            <button
              className="favorite-button"
              onClick={favoritarFilosofia}
            >
              {favoritos.includes(indice) ? "♥ Desfavoritar" : "♡ Favoritar"}
            </button>
          </div>
        </section>

        <section className="favorites">
          <h2>Favoritos</h2>

          {favoritos.map((favorito) => (
            <PhilosophyCard
              key={favorito}
              philosophy={philosophies[favorito]}
            />
          ))}
        </section>

      </main>

    </div>
  );
}

export default App;