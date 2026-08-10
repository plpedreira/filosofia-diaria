import PhilosophyCard from "./components/PhilosophyCard";
import philosophies from "./data/philosophies";

function App() {
  const hoje = new Date();
  const dia = hoje.getDate();
  const indice = dia % philosophies.length;

  return (
    <div>
      <PhilosophyCard philosophy={philosophies[indice]} />
    </div>
  );
}

export default App;