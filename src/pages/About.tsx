function About() {
  return (
    <div className="about">
      <section>
        <h1>Sobre o Filosofia Diária</h1>

        <p>
          O Filosofia Diária é um projeto criado com o objetivo de aproximar
          diferentes ideias e conceitos filosóficos do cotidiano. A proposta é
          apresentar uma filosofia por vez, permitindo que cada pessoa conheça
          seu significado, sua origem e diferentes formas de aplicar essas
          ideias no dia a dia.
        </p>

        <p>
          O projeto também busca transformar a filosofia em algo mais acessível,
          mostrando que conceitos desenvolvidos há séculos ainda podem ajudar
          na maneira como enxergamos nossas escolhas, desafios e experiências.
        </p>
      </section>

      <section>
        <h2>Sobre mim</h2>

        <p>
          Meu nome é Pedro Lucas, sou estudante de Ciência da Computação e
          desenvolvedor com foco em desenvolvimento web. Criei o Filosofia
          Diária como parte da minha jornada de aprendizado, utilizando o
          desenvolvimento de uma aplicação real para colocar meus conhecimentos
          em prática e continuar evoluindo como desenvolvedor.
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