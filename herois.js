let nomeHeroi = ["Super-Homem",
    "Mulher Maravilha",
    "Flash",
    "Lanterna Verde",
    "Aquaman",
    "Robin/Asa Noturna",
    "Batgirl",
    "Besouro Azul",
    "Miss Marte",
    "Kid Flash",
    "Ravena",
    "Estelar",
    "Superboy",
    "Caçadora",
    "Adão Negro",
    "Canário Negro",
    "Vixen",
    "Zatanna",
    "Constantine",
    "Booster Gold",
    "Rip Hunter",
    "Eléktron",
    "Arqueiro Verde",
    "Espartano",
    "Speedy",
    "Arsenal",
];


let dados = [
    {
        imagem: "superman.png",
        alterEgo: "Super-Homem",
        nomeCivil: "Clark Joseph Kent",
        atividade: "Ativo",
        organizacao: "Liga da Justiça",
        cidade: "Metrópolis",
        vilao: "Lex Luthor",
        poder: "Super força, voo, visão de calor, invulnerabilidade",
        fraqueza: "Kryptonita",
        risco: "5",
        analise: "Medo de isolamento, culpa pela destruição de Krypton, teme perders de seus poderes"
    },
    {
        imagem: "mulher-maravilha.png",
        alterEgo: "Mulher-Maravilha",
        nomeCivil: "Diana Prince",
        atividade: "Ativa",
        organizacao: "Liga da Justiça",
        cidade: "Themyscira, Washington D.C.",
        vilao: "Mulher-Leopardo",
        poder: "Super força, agilidade, invulnerabilidade, laço da verdade",
        fraqueza: "Magia negra, mentira, traição",
        risco: "5",
        analise: "Perda de inocência, desejo de proteger os outros"
    },
    {
        imagem: "flash.png",
        alterEgo: "Flash",
        nomeCivil: "Barry Allen",
        atividade: "Ativo",
        organizacao: "Liga da Justiça, Equipe Flash",
        cidade: "Central City",
        vilao: "Flash-Reverso",
        poder: "Velocidade sobre-humana, vibração molecular",
        fraqueza: "Velocidade extrema, medo da morte",
        risco: "4",
        analise: "Impulsividade, culpa por não ter salvado todos, perda da mãe"
    },
    {
        imagem: "lanterna.png",
        alterEgo: "Lanterna Verde",
        nomeCivil: "Hal Jordan",
        atividade: "Ativo",
        organizacao: "Liga da Justiça",
        cidade: "Coast City",
        vilao: "Sinestro",
        poder: "Construção de objetos com energia verde, voo",
        fraqueza: "Lanterna Amarela (medo), perda de sua vontade",
        risco: "5",
        analise: "Dúvidas sobre seus poderes, medo do desconhecido"
    },
    {
        imagem: "aquaman.png",
        alterEgo: "Aquaman",
        nomeCivil: "Arthur Joseph Curry",
        atividade: "Ativo",
        organizacao: "Liga da Justiça",
        cidade: "Atlântida",
        vilao: "Arraia Negra",
        poder: "Comunicação com animais marinhos, super força aquática, respiração subaquática",
        fraqueza: "Perda da conexão com a água, armas mágicas",
        risco: "4",
        analise: "Solidão, culpa por não poder proteger todos os oceanos"
    },
    {
        imagem: "asanoturna.png",
        alterEgo: "Asa Noturna",
        nomeCivil: "Dick Grayson",
        atividade: "Ativo",
        organizacao: "Jovens Titãs, Família Morcego",
        cidade: "Gotham City",
        vilao: "Exterminador",
        poder: "Mestre em artes marciais, acrobata, detetive",
        fraqueza: "Imaturidade, dependência de outros",
        risco: "2",
        analise: "Medo de perder seus amigos e familiares"
    },
    {
        imagem: "batgirl.png",
        alterEgo: "Batgirl",
        nomeCivil: "Barbara Gordon",
        atividade: "Ativa",
        organizacao: "Aves de Rapina, Família Morcego",
        cidade: "Gotham City",
        vilao: "Senhor Frio",
        poder: "Inteligência, hacker, especialista em computação",
        fraqueza: "Trauma de infância, dependência da tecnologia",
        risco: "2",
        analise: "Isolamento, medo de falhar"
    },
    {
        imagem: "marte.png",
        alterEgo: "Miss Marte",
        nomeCivil: "M'gann M'orzz",
        atividade: "Ativa",
        organizacao: "Justiça Jovem, Jovens Titãs",
        cidade: "Washington D.C., Marte",
        vilao: "Imperatriz Komand'r",
        poder: "Telepatia, telecinesia, mudança de forma",
        fraqueza: "Fogo, telepatia (se revelada), perda de contato com Marte",
        risco: "3",
        analise: "Solidão, medo de ser diferente"
    },
    {
        imagem: "kidflash.png",
        alterEgo: "Kid Flash",
        nomeCivil: "Wally West",
        atividade: "Ativo",
        organizacao: "Jovens Titãs, Equipe Flash",
        cidade: "Central City, Keystone City",
        vilao: "Zoom",
        poder: "Velocidade sobre-humana, vibração molecular",
        fraqueza: "Velocidade extrema, falta de experiência",
        risco: "2",
        analise: "Impulsividade, desejo de provar seu valor"
    },
    {
        imagem: "ravena.png",
        alterEgo: "Ravena",
        nomeCivil: "Rachel Roth",
        atividade: "Ativa",
        organizacao: "Jovens Titãs",
        cidade: "Jump City",
        vilao: "Trigon",
        poder: "Magia, empatia, projeção astral",
        fraqueza: "Tribo de Azar, magia negra",
        risco: "5",
        analise: "Medo de seus poderes, culpa por seus pais"
    },
    {
        imagem: "estelar.png",
        alterEgo: "Estelar",
        nomeCivil: "Koriand'r",
        atividade: "Ativa",
        organizacao: "Jovens Titãs, Justiça Jovem",
        cidade: "Jump City, Tamaran",
        vilao: "Estrela Negra",
        poder: "Voo, super força, energia estelar",
        fraqueza: "Radiação solar, medo do vazio",
        risco: "4",
        analise: "Solidão, desejo de encontrar seu lugar no universo"
    },
    {
        imagem: "superboy.png",
        alterEgo: "Superboy",
        nomeCivil: "Conner Kent",
        atividade: "Ativo",
        organizacao: "Justiça Jovem",
        cidade: "Smallville, Metropolis",
        vilao: "Lex Luthor",
        poder: "Super força, invulnerabilidade, visão de calor, fraqueza à kriptonita",
        fraqueza: "Kryptonita, magia, vulnerabilidade emocional",
        risco: "3",
        analise: "Incerto sobre sua identidade, tem medo de perder o controle"
    },
    {
        imagem: "cacadora.png",
        alterEgo: "Caçadora",
        nomeCivil: "Helena Bertinelli",
        atividade: "Ativa",
        organizacao: "Aves de Rapina",
        cidade: "Gotham City",
        vilao: "Lady Shiva",
        poder: "Mestre em artes marciais, atiradora de elite, especialista em sobrevivência",
        fraqueza: "Armas de fogo, traição",
        risco: "3",
        analise: "Trauma de infância, dificuldade em confiar nos outros"
    },
    {
        imagem: "canarionegro.png",
        alterEgo: "Canário Negro",
        nomeCivil: "Dinah Lance",
        atividade: "Aposentada",
        organizacao: "Aves de Rapina, Lendas do Amanhã",
        cidade: "Central City, Gotham City",
        vilao: "Conde Vertigo",
        poder: "Grito sônico, mestre em artes marciais",
        fraqueza: "Perda da voz, armas de fogo",
        risco: "3",
        analise: "Medo de perder seus entes queridos, culpa por não poder salvar todos"
    },
    {
        imagem: "zatanna.png",
        alterEgo: "Zatanna",
        nomeCivil: "Zatanna Zatara",
        atividade: "Ativa",
        organizacao: "Liga da Justiça",
        cidade: "Diversas, rastrear quando preciso.",
        vilao: "Félix Fausto",
        poder: "Magia, ilusionismo",
        fraqueza: "Magia negra, perda de foco",
        risco: "3",
        analise: "Dúvidas sobre seus poderes, medo do desconhecido"
    },
    {
        imagem: "constantine.png",
        alterEgo: "Constantine",
        nomeCivil: "John Constantine",
        atividade: "Ativo",
        organizacao: "Jovens Titãs",
        cidade: "Londres",
        vilao: "Neron",
        poder: "Magia, ocultismo, imortalidade",
        fraqueza: "Magia negra, vícios",
        risco: "3",
        analise: "Pode ser manipulado, sofre de solidão e arrependimento"
    },
    {
        imagem: "hunter.png",
        alterEgo: "Rip Hunter",
        nomeCivil: "Michael Coburn",
        atividade: "Morto",
        organizacao: "Lendas do Amanhã",
        cidade: "Diversas, rastrear quando preciso.",
        vilao: "Vandal Savage",
        poder: "Viagem no tempo, tecnologia avançada",
        fraqueza: "Manipulação temporal, paradoxos",
        risco: "1",
        analise: "Solidão, culpa por alterar o tempo"
    },
    {
        imagem: "elektron.png",
        alterEgo: "Eléktron",
        nomeCivil: "Raymond Palmer",
        atividade: "Ativo",
        organizacao: "Lendas do Amanhã",
        cidade: "Star City",
        vilao: "Doutor Ivo",
        poder: "Ciência, tecnologia, miniaturização",
        fraqueza: "Radiação, perda de controle sobre o tamanho",
        risco: "2",
        analise: "Medo do desconhecido, isolamento"
    },
    {
        imagem: "arqueiro.png",
        alterEgo: "Arqueiro Verde",
        nomeCivil: "Oliver Jonas Queen",
        atividade: "Morto",
        organizacao: "Liga da Justiça, Equipe Arqueiro Verde",
        cidade: "Central City",
        vilao: "Malcolm Merlyn",
        poder: "Arco e flecha, combate corpo a corpo, liderança, sobrevivência",
        fraqueza: "Ferimentos físicos, dependência do arco",
        risco: "2",
        analise: "Passado conturbado, culpa, vícios"
    },
    {
        imagem: "espartano.png",
        alterEgo: "Espartano",
        nomeCivil: "John Diggle",
        atividade: "Aposentado",
        organizacao: "Equipe Arqueiro Verde",
        cidade: "Central City",
        vilao: "Malcolm Merlyn",
        poder: "Combate corpo a corpo, armas de fogo, táticas militares",
        fraqueza: "Ferimentos físicos, perda de entes queridos",
        risco: "1",
        analise: "Trauma de guerra, raiva, família"
    }
];