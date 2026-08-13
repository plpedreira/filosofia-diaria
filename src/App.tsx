import PhilosophyCard from "./components/PhilosophyCard";
import philosophies from "./data/philosophies";
import { useState } from "react";

function App() {
  const [indice, setIndice] = useState(0);

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