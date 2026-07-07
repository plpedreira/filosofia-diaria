function PhilosophyCard(props: {
  philosophy: {
    titulo: string;
    resumo: string;
    texto: string;
  };
}) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      
      <p>Lembre-se de que você vai morrer.</p>

      <p>
        Memento Mori é uma expressão em latim utilizada para lembrar que a vida
        é finita...
      </p>
    </div>
  );
}

export default PhilosophyCard;