import PhilosophyCard from "./components/PhilosophyCard";
import philosophies from "./data/philosophies";
import { useState } from "react";

function App() {
  const hoje = new Date();
  const dia = hoje.getDate();
  const [indice, setIndice] = useState(dia % philosophies.length);

  return (
    <div>
      <PhilosophyCard philosophy={philosophies[indice]} />

      <button
        onClick={() => {
          setIndice((indice + 1)% philosophies.length);
        }}
      >
        Outra filosofia
      </button>
    </div>
  );
}

export default App;