import PhilosophyCard from "./components/PhilosophyCard";

const philosophy = {
  titulo: "Memento Mori",
  resumo: "Lembre-se de que você vai morrer.",
  texto: " Memento Mori é uma expressão em latim utilizada para lembrar que a vida é finita..."
}

function App() {  
  return (
  <div>
      <PhilosophyCard
  philosophy={philosophy}
/>
  </div>
  );
}

export default App;