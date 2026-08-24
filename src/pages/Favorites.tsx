import PhilosophyCard from "../components/PhilosophyCard";
import philosophies from "../data/philosophies";

type FavoritesProps = {
  favoritos: number[];
};

function Favorites({ favoritos }: FavoritesProps) {
  return (
    <div className="app">
      <main className="main">
        <h1>Favoritos</h1>

        {favoritos.length === 0 ? (
          <p>Você ainda não favoritou nenhuma filosofia.</p>
        ) : (
          favoritos.map((favorito) => (
            <PhilosophyCard
              key={favorito}
              philosophy={philosophies[favorito]}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default Favorites;