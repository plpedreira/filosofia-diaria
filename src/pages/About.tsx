function About() {
  return (
    <div className="about">
      <section>
        <h1>Sobre o Filosofia Diária</h1>

        <p>
          O Filosofia Diária é um projeto criado para trazer diferentes ideias
          e conceitos filosóficos para o dia a dia. A proposta é apresentar uma
          filosofia por vez, permitindo que cada pessoa conheça seu significado,
          contexto e encontre novas formas de refletir sobre a própria vida.
        </p>
      </section>

      <section>
        <h2>Sobre mim</h2>

        <p>
          Meu nome é Pedro Lucas, sou estudante de Ciência da Computação e
          desenvolvedor apaixonado por tecnologia e desenvolvimento web.
          Criei o Filosofia Diária como uma forma de colocar meus conhecimentos
          em prática enquanto desenvolvo um projeto que também tenha um
          significado pessoal.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/plpedreira"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pedro-lucas-araujo-pedreira-7b0b9b261/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;