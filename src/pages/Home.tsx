import {
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";
import PhilosophyCard from "../components/PhilosophyCard";
import philosophies from "../data/philosophies";
import "../App.css";

type HomeProps = {
  favoritos: number[];
  setFavoritos: Dispatch<SetStateAction<number[]>>;
};

function Home({ favoritos, setFavoritos }: HomeProps) {
  const hoje = new Date();
  const dia = hoje.getDate();

  const [indice, setIndice] = useState(
    dia % philosophies.length
  );

  const [notificacao, setNotificacao] = useState("");

  useEffect(() => {
    if (!notificacao) return;

    const timer = setTimeout(() => {
      setNotificacao("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [notificacao]);

  function proximaFilosofia() {
    setIndice((indice + 1) % philosophies.length);
  }

  function favoritarFilosofia() {
    if (favoritos.includes(indice)) {
      setFavoritos(
        favoritos.filter((favorito) => favorito !== indice)
      );

      setNotificacao("Filosofia removida dos favoritos");
    } else {
      setFavoritos([...favoritos, indice]);

      setNotificacao("Filosofia adicionada aos favoritos");
    }
  }

  return (
    <>
      {notificacao && (
        <div className="notification">
          ✓ {notificacao}
        </div>
      )}

      <div className="app">

        <header className="header">
          <h1>Filosofia Diária</h1>
          <p>Uma reflexão para cada dia.</p>
        </header>

        <main className="main">

          <section className="daily-philosophy">
            <PhilosophyCard
              philosophy={philosophies[indice]}
            />

            <div className="actions">
              <button onClick={proximaFilosofia}>
                Outra filosofia
              </button>

              <button
                className="favorite-button"
                onClick={favoritarFilosofia}
              >
                {favoritos.includes(indice)
                  ? "♥ Desfavoritar"
                  : "♡ Favoritar"}
              </button>
            </div>
          </section>

        </main>

      </div>
    </>
  );
}

export default Home;