type Philosophy = {
  titulo: string;
  resumo: string;
  texto: string;
};

type PhilosophyCardProps = {
  philosophy: Philosophy;
};

function PhilosophyCard(props: PhilosophyCardProps) {
  return (
    <div>
      <h2>{props.philosophy.titulo}</h2>

      <p>{props.philosophy.resumo}</p>

      <p>{props.philosophy.texto}</p>
    </div>
  );
}

export default PhilosophyCard;