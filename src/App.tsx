import PhilosophyCard from "./components/PhilosophyCard";
import philosophies from "./data/philosophies";
import { useState } from "react";

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
    <div>
      <PhilosophyCard philosophy={philosophies[indice]} />

      <button onClick={proximaFilosofia}>
        Outra filosofia
      </button>

      <button onClick={favoritarFilosofia}>
        {favoritos.includes(indice) ? "Desfavoritar" : "Favoritar"}
      </button>

      <h2>Favoritos</h2>

      {favoritos.map((favorito) => (
        <PhilosophyCard
          key={favorito}
          philosophy={philosophies[favorito]}
        />
      ))}
    </div>
  );
}

export default App;