import "./PhilosophyCard.css";

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
    <article className="philosophy-card">
      <span className="tag">Filosofia diária</span>
      
      <h2>{props.philosophy.titulo}</h2>

      <p className="resume">{props.philosophy.resumo}</p>

      <p className="text">{props.philosophy.texto}</p>
    </article>
  );
}

export default PhilosophyCard;