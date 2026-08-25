const philosophies = [
  {
    titulo: "Memento Mori",
    resumo: "Lembre-se de que a vida é finita.",
    texto: "Memento Mori, em latim, significa “lembre-se de que você vai morrer”. A frase circulou em formas diferentes na Antiguidade e foi retomada pelos estoicos como exercício de lucidez, não de pessimismo. Quando reconhecemos que o tempo não é infinito, conversas, projetos e pessoas deixam de parecer adiáveis para sempre. No cotidiano, essa ideia ajuda a escolher melhor onde colocamos atenção, agradecer mais e começar o que importa. A morte não é celebrada; ela funciona como medida que devolve valor e urgência serena à vida presente."
  },
  {
    titulo: "Amor Fati",
    resumo: "Ame e trabalhe com o destino que lhe cabe.",
    texto: "Amor Fati significa “amor ao destino” e ficou especialmente associado a Friedrich Nietzsche, embora dialogue com a aceitação estoica. Não pede que alguém goste da dor ou aceite injustiças sem reagir. Propõe não gastar a vida desejando que um fato já ocorrido seja outro, incorporando inclusive os contratempos à própria história. Depois de uma rejeição ou erro, a pergunta deixa de ser apenas “por que isso aconteceu?” e passa a ser “o que posso aprender, reparar ou construir a partir daqui?”. Aceitar o fato é o começo de uma resposta mais livre."
  },
  {
    titulo: "Eudaimonia",
    resumo: "Florescer por meio de uma vida bem vivida.",
    texto: "Eudaimonia é uma palavra grega traduzida como felicidade, realização ou florescimento. Em Aristóteles, não é uma emoção breve, mas o resultado de uma vida inteira orientada pelas melhores capacidades humanas, especialmente razão e virtude. Uma vida confortável pode ser vazia se lhe faltarem propósito, caráter e participação no mundo comum. Buscar eudaimonia no dia a dia significa cultivar relações honestas, aprender, agir com justiça e escolher metas que expressem quem se quer ser. É uma felicidade mais profunda que o bom humor: a sensação de estar vivendo de modo íntegro."
  },
  {
    titulo: "Dicotomia do Controle",
    resumo: "Diferencie o que depende de você do que não depende.",
    texto: "A dicotomia do controle é central no estoicismo e aparece de forma marcante em Epicteto. Estão sob nossa responsabilidade direta os juízos, intenções, escolhas e esforços; não obedecem inteiramente à nossa vontade a opinião alheia, o clima, o passado e o resultado final das ações. A ideia não manda abandonar objetivos, mas trocar a obsessão pela garantia por compromisso com a ação correta. Antes de uma prova, podemos estudar e descansar; a nota envolve mais fatores. Essa distinção torna a responsabilidade mais precisa e costuma reduzir ansiedade inútil."
  },
  {
    titulo: "Ataraxia",
    resumo: "Alcance uma tranquilidade livre de perturbação.",
    texto: "Ataraxia é o nome grego para uma serenidade estável, sem agitação desnecessária. O ideal aparece no epicurismo e no ceticismo, ainda que cada tradição indique um caminho diferente. Para Epicuro, a tranquilidade nasce de desejos simples, amizade, reflexão e libertação de medos infundados, como o medo da morte. Ela não significa não ter sentimentos nem problemas, mas não transformar cada desconforto em catástrofe. Reduzir comparações, reconhecer limites materiais e reservar tempo para descanso e conversas verdadeiras são práticas pequenas que aproximam a vida dessa calma sóbria."
  },
  {
    titulo: "Apatheia",
    resumo: "Não seja governado por paixões destrutivas.",
    texto: "Apatheia, no estoicismo, é muitas vezes confundida com apatia ou frieza. O termo aponta para a liberdade diante de paixões que deformam o julgamento, como pânico, inveja compulsiva e raiva cega. Os estoicos valorizavam afeição, gratidão e senso de comunidade; a questão era não deixar impulsos comandarem a vida sem exame. Em uma discussão, praticar apatheia pode ser pausar antes de responder, verificar os fatos e escolher palavras que resolvam o problema em vez de apenas ferir. É domínio de si, não ausência de humanidade."
  },
  {
    titulo: "Carpe Diem",
    resumo: "Aproveite o presente com consciência.",
    texto: "Carpe Diem vem de um poema de Horácio e costuma ser resumido como “aproveite o dia”. A expressão não defende excesso irresponsável. No contexto do poeta, ela sugere colher o presente sem depositar toda a vida em promessas incertas do futuro. O momento disponível é onde decisões, encontros e pequenos prazeres realmente acontecem. Aplicada hoje, a frase pode significar almoçar sem distrações, começar uma tarefa sem esperar condições perfeitas ou visitar alguém querido enquanto existe oportunidade. O presente não elimina planejamento; ele dá sentido ao planejamento."
  },
  {
    titulo: "Logos",
    resumo: "Procure razão, sentido e coerência no mundo.",
    texto: "Logos é uma palavra grega de sentidos amplos: razão, linguagem, explicação e princípio de ordem. Heráclito a usou para indicar certa regularidade no fluxo das coisas, e os estoicos desenvolveram a noção de um universo inteligível do qual participamos pela razão. Em outras tradições, o termo ganhou leituras próprias. No uso cotidiano, logos inspira o hábito de buscar boas razões antes de concluir algo, organizar ideias em palavras claras e perceber ligações entre escolhas e consequências. Ele não promete que tudo seja simples, mas pede uma relação mais refletida com a realidade."
  },
  {
    titulo: "Virtude",
    resumo: "Forme um caráter capaz de escolher bem.",
    texto: "Para muitos filósofos gregos, virtude era excelência de caráter e de ação, não apenas uma etiqueta moral. Em Aristóteles, coragem, generosidade, justiça e prudência se formam pela prática e exigem discernimento. Coragem, por exemplo, não é imprudência nem fuga, mas a resposta adequada diante do perigo. Pensar em virtude desloca a pergunta “o que eu ganho?” para “que tipo de pessoa esta escolha está formando?”. Cumprir compromissos, admitir erros e repetir atos honestos parecem gestos simples, mas são justamente o material com que o caráter é educado."
  },
  {
    titulo: "Epicurismo",
    resumo: "Busque prazeres simples e duradouros.",
    texto: "O epicurismo, fundado por Epicuro em Atenas, é confundido com busca de luxo e satisfação sem limites. Para ele, o melhor prazer era a ausência de dor corporal e de perturbação da alma, alcançada por simplicidade, amizade, autonomia e reflexão. Desejos naturais e necessários merecem atenção; desejos ilimitados de status e riqueza tendem a produzir ansiedade. A filosofia não rejeita boa comida ou conforto, mas pergunta se eles realmente tornam a vida mais tranquila. No cotidiano, ela aparece em escolhas moderadas, relações confiáveis e menos dependência de consumo para sentir bem-estar."
  },
  {
    titulo: "Estoicismo",
    resumo: "Viva com razão, coragem e responsabilidade.",
    texto: "O estoicismo nasceu em Atenas por volta do século III a.C., com Zenão de Cítio, e foi desenvolvido por autores como Sêneca, Epicteto e Marco Aurélio. Sua proposta é viver de acordo com a razão e a natureza humana, entendida como social. Bens externos podem ser desejáveis, mas não definem sozinhos uma vida boa; importa o uso que fazemos das circunstâncias. Isso não é resignação passiva: os estoicos defendiam justiça, dever e ajuda mútua. Em tempos de pressão, oferecem uma pergunta útil: qual é a ação mais íntegra e possível agora?"
  },
  {
    titulo: "Existencialismo",
    resumo: "Assuma a liberdade e a responsabilidade de existir.",
    texto: "Existencialismo reúne pensadores diferentes, mas gira em torno de existir, escolher e dar sentido à vida concreta. Kierkegaard, Sartre, Simone de Beauvoir e Camus não formam uma doutrina única, e suas divergências importam. Ainda assim, todos desafiam a ideia de que uma essência pronta determina completamente quem somos. Para Sartre, somos responsáveis por nos construir nas escolhas; Beauvoir mostrou que essa liberdade ocorre dentro de condições sociais reais. No cotidiano, a filosofia convida a reconhecer limites sem usá-los como desculpa para abandonar toda autoria sobre a própria vida e seus compromissos."
  },
  {
    titulo: "Nihilismo",
    resumo: "Enfrente a crise de sentido sem cair na indiferença.",
    texto: "Nihilismo é um termo amplo para posições que negam ou colocam em dúvida valores e sentidos considerados objetivos. Não é uma escola única e costuma aparecer como diagnóstico de crise cultural. Nietzsche analisou o niilismo ligado ao enfraquecimento de valores tradicionais, mas não defendeu simplesmente que nada importava; procurou pensar como criar e afirmar valores depois dessa ruptura. No cotidiano, a sensação de vazio pode levar ao cinismo, mas também permite examinar valores herdados. A pergunta produtiva é quais compromissos merecem ser sustentados e por quê."
  },
  {
    titulo: "Hedonismo",
    resumo: "Reconheça o prazer como parte do bem viver.",
    texto: "Hedonismo nomeia teorias que consideram o prazer um bem fundamental. Há versões muito diferentes: os cirenaicos valorizavam mais o prazer imediato, enquanto Epicuro defendia moderação e estabilidade. Por isso, chamar qualquer busca de prazer de hedonista simplifica demais o debate. O conceito convida a observar o que nos faz bem e por quanto tempo, distinguindo satisfação breve de hábitos que deixam culpa, dependência ou sofrimento. Uma vida prazerosa pode incluir lazer e prazer sensorial, mas precisa considerar consequências, relações e saúde para não se tornar refém do próprio desejo."
  },
  {
    titulo: "Ceticismo",
    resumo: "Suspenda o julgamento quando faltarem razões suficientes.",
    texto: "O ceticismo filosófico não é apenas duvidar de tudo por esporte. Nas tradições ligadas a Pirro e, mais tarde, a Sexto Empírico, ele propõe suspender o juízo quando argumentos contrários parecem igualmente fortes. A meta era evitar dogmatismo e alcançar maior tranquilidade. Na vida contemporânea, uma atitude cética saudável significa pedir evidências, reconhecer incertezas e ajustar opiniões diante de novos dados. Ela não exige paralisia: decisões precisam ser tomadas com informação incompleta. Exige apenas honestidade sobre o grau de confiança que uma conclusão merece."
  },
  {
    titulo: "Justiça",
    resumo: "Dê a cada pessoa o que lhe é devido.",
    texto: "Justiça é um dos temas mais antigos e disputados da filosofia. Para Platão, envolve uma ordem adequada na alma e na cidade; para Aristóteles, inclui distribuir bens e responsabilidades de modo proporcional, além de corrigir danos. Pensadores modernos ampliaram o debate para direitos, igualdade, liberdade e instituições. Não há uma definição simples aceita por todos, mas a pergunta permanece: quem recebe benefícios, quem carrega custos e quais razões justificam essa divisão? No cotidiano, justiça aparece em dividir crédito por um trabalho, respeitar acordos e notar regras que prejudicam sempre as mesmas pessoas."
  },
  {
    titulo: "Imperativo Categórico",
    resumo: "Aja por princípios que possam valer para todos.",
    texto: "O imperativo categórico é uma ideia central da ética de Immanuel Kant. Em uma formulação, pede que se aja apenas segundo máximas que pudéssemos querer como lei universal. Em outra, exige tratar a humanidade, em si e nos outros, sempre como fim e nunca apenas como meio. Kant não oferece um atalho mecânico, mas testa coerência e respeito nas decisões. Antes de mentir por conveniência, vale perguntar o que ocorreria se essa regra fosse adotada por todos. A ética deixa de ser só resultado desejado e passa a envolver dignidade e princípio."
  },
  {
    titulo: "Utilitarismo",
    resumo: "Considere os efeitos das escolhas sobre o bem-estar coletivo.",
    texto: "O utilitarismo, associado sobretudo a Jeremy Bentham e John Stuart Mill, avalia ações e políticas por suas consequências para o bem-estar. Procura promover a maior quantidade possível de bem-estar e reduzir sofrimento para o maior número de pessoas. Mill distinguiu prazeres e defendeu liberdades individuais importantes, mostrando que a tradição não é uma conta simples de satisfação. O desafio é não sacrificar direitos e minorias em nome de uma soma abstrata. No cotidiano, o utilitarismo incentiva a olhar além do interesse imediato e perguntar quem será afetado por uma escolha."
  },
  {
    titulo: "Taoismo",
    resumo: "Acompanhe o curso das coisas com simplicidade.",
    texto: "O taoismo é uma tradição filosófica e religiosa chinesa ligada a textos como o Tao Te Ching, tradicionalmente atribuído a Laozi, e o Zhuangzi. Tao pode ser entendido como caminho ou curso das coisas, mas resiste a definições rígidas. Uma ideia conhecida é wu wei, muitas vezes traduzida como “não agir”, embora indique melhor agir sem forçamento desnecessário, em sintonia com a situação. No cotidiano, isso pode significar não confundir esforço com luta constante: observar o momento certo, simplificar processos e abandonar a necessidade de controlar cada detalhe."
  },
  {
    titulo: "Ubuntu",
    resumo: "Reconheça sua humanidade nas relações com os outros.",
    texto: "Ubuntu é um conceito presente em diversas tradições do sul da África, frequentemente expresso pela ideia de que uma pessoa se torna pessoa por meio de outras pessoas. Não é uma doutrina única nem deve ser reduzido a um slogan, mas enfatiza interdependência, dignidade e responsabilidade comunitária. O termo ganhou projeção internacional em discussões sobre reconciliação na África do Sul. Em uma cultura que valoriza desempenho individual, Ubuntu lembra que autonomia depende de cuidado, linguagem, educação e redes de apoio. Ele convida a agir de modo a preservar vínculos e reconhecer a humanidade de quem está diante de nós."
  },
  {
    titulo: "Ética do Cuidado",
    resumo: "Valorize relações, vulnerabilidade e responsabilidade concreta.",
    texto: "A ética do cuidado foi desenvolvida por pensadoras contemporâneas como Carol Gilligan e Nel Noddings, em diálogo crítico com modelos morais centrados somente em regras abstratas. Ela chama atenção para dependências reais, vínculos afetivos e responsabilidades diante da vulnerabilidade. Isso não significa que justiça e direitos deixem de importar, mas que uma decisão ética também precisa perguntar quem necessita de cuidado, quem costuma cuidar sem reconhecimento e como dividir essa tarefa de forma justa. No cotidiano, aparece em escutar com atenção, oferecer ajuda possível e não tratar necessidades humanas como incômodos invisíveis."
  },
  {
    titulo: "Maiêutica",
    resumo: "Aprenda por perguntas que fazem pensar.",
    texto: "Maiêutica é o nome dado ao método de Sócrates de conduzir interlocutores por perguntas, ajudando-os a examinar crenças que pareciam óbvias. A palavra remete ao trabalho de parteira: em vez de entregar uma resposta, o diálogo tenta fazer nascer uma compreensão mais refletida. A descrição que temos desse método vem sobretudo dos diálogos de Platão, e por isso também é uma construção literária e filosófica. No cotidiano, a maiêutica é útil em conversas e estudos: perguntas honestas como “o que você quer dizer?” ou “que evidência sustenta isso?” melhoram o pensamento coletivo."
  },
  {
    titulo: "Véu da Ignorância",
    resumo: "Escolha regras sem saber qual lugar ocupará nelas.",
    texto: "O véu da ignorância é uma ferramenta imaginada por John Rawls para pensar princípios de justiça. Atrás desse véu, ninguém sabe qual posição terá na sociedade: não conhece renda, gênero, talentos, saúde ou grupo de origem. Sem poder desenhar regras para beneficiar a própria situação, as pessoas tenderiam a escolher instituições mais seguras e justas para todos. O experimento não descreve uma reunião real, mas testa nossos vieses. Antes de defender uma regra, ele inspira uma pergunta simples: eu a consideraria aceitável se não soubesse se estaria entre os favorecidos ou os vulneráveis?"
  },
  {
    titulo: "Absurdismo",
    resumo: "Viva apesar da falta de respostas definitivas.",
    texto: "O absurdismo é associado a Albert Camus e nasce do encontro entre nossa fome por sentido e um mundo que não oferece respostas finais garantidas. Reconhecer esse absurdo não obriga ao desespero nem à fuga para certezas artificiais. A resposta possível é a revolta lúcida: continuar vivendo, criando, amando e agindo sem fingir que a existência possui uma explicação pronta. Quando planos falham ou a vida parece injusta, talvez não exista uma frase que justifique tudo; ainda assim, há espaço para presença, solidariedade e pequenos projetos escolhidos conscientemente."
  }
];

export default philosophies;
