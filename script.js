const posicoesTiragem = {
        1: ["1ª Carta: O Assunto Principal"],
        3: ["1ª Carta: A Raiz (O Passado)", "2ª Carta: A Ação (O Presente)", "3ª Carta: A Colheita (O Futuro)"],
        5: [
            "1ª Carta: A Essência da Questão",
            "2ª Carta: A Força Oposta",
            "3ª Carta: A Base Invisível",
            "4ª Carta: O Farol (Conselho)",
            "5ª Carta: O Desfecho Mais Provável"
        ]
    };

    // CONTEÚDO EXPANDIDO DAS CARTAS (78 Cartas: 22 Maiores + 56 Menores)
    const cartasDoTarot = [
  // ARCANOS MAIORES (IDs 0 a 21)
  {
    "id": 0,
    "nome": "O Louco (The Fool)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Novo Começo, Inocência, Salto de Fé, Potencial.",
    "mensagem_central": "O Salto para o Desconhecido. O potencial ilimitado e a liberdade de começar uma nova aventura sem bagagem. Confie na sua intuição e abrace a liberdade de não saber o que vem a seguir.",
    "amor_relacionamentos": "Início de um romance empolgante, livre de expectativas passadas. Necessidade de se libertar de padrões antigos. Diga 'sim' para o novo.",
    "carreira_financas": "Mudança radical de carreira, projeto visionário (sem plano detalhado). O foco é a liberdade. Planeje o básico para segurança.",
    "frase_impacto": "O maior risco de todos é não arriscar. Respire fundo, solte o passado e confie: a rede de segurança está onde o seu coração te leva."
  },
  {
    "id": 1,
    "nome": "O Mago (The Magician)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Ação, Manifestação, Habilidade, Recursos, Poder Pessoal.",
    "mensagem_central": "O Mestre dos Recursos. Você tem todas as ferramentas necessárias para transformar seus sonhos em realidade. É o momento de agir, comunicar e usar seu poder pessoal.",
    "amor_relacionamentos": "Você está no controle do seu destino amoroso, pronto para manifestar o parceiro que deseja. Comunicação clara e sedutora.",
    "carreira_financas": "Sucesso em vendas, comunicação. O dinheiro flui da sua capacidade de transformar ideias em lucro. Início de um projeto com todos os recursos.",
    "frase_impacto": "Se você consegue imaginar, você consegue manifestar. Todas as ferramentas estão na mesa. O universo está esperando você dar o primeiro comando."
  },
  {
    "id": 2,
    "nome": "A Sacerdotisa (The High Priestess)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Intuição, Mistério, Conhecimento Oculto, Silêncio, Ponderação.",
    "mensagem_central": "A Guardiã do Inconsciente. A sabedoria intuitiva e a paciência. Busque as respostas no silêncio interior e confie nos seus pressentimentos.",
    "amor_relacionamentos": "A relação exige introspecção ou há algo oculto. Se solteiro(a), conecte-se com o que realmente deseja antes de buscar um parceiro.",
    "carreira_financas": "Momento de pesquisa, planejamento secreto ou estudos. O dinheiro flui da sua intuição sobre investimentos. Não revele todos os seus planos.",
    "frase_impacto": "A resposta não está no que dizem, está no que você sente. Feche os olhos, ignore a lógica por um momento e deixe o corpo falar a verdade."
  },
  {
    "id": 3,
    "nome": "A Imperatriz (The Empress)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Abundância, Fertilidade, Criatividade, Nutrição, Sensualidade.",
    "mensagem_central": "A Mãe da Criação. Representa a beleza, o luxo e a capacidade de gerar vida e abundância. Honre seu corpo, nutra seus projetos e desfrute da prosperidade.",
    "amor_relacionamentos": "Paixão, fertilidade (pode indicar gravidez), e uma relação marcada pela sensualidade e pelo carinho. Você está irradiando magnetismo.",
    "carreira_financas": "Período de alta criatividade e prosperidade. Sucesso em arte, moda, design. O dinheiro flui da sua capacidade de produzir e nutrir.",
    "frase_impacto": "Seja a rainha do seu próprio jardim. Plante suas sementes, celebre sua beleza e confie: a abundância é sua colheita natural."
  },
  {
    "id": 4,
    "nome": "O Imperador (The Emperor)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Estrutura, Autoridade, Ordem, Disciplina, Liderança.",
    "mensagem_central": "O Arquiteto da Ordem. A necessidade de estabelecer regras, limites claros e estruturas sólidas. Assuma o controle da sua vida com disciplina e racionalidade.",
    "amor_relacionamentos": "A relação é estável, mas pode ser tradicional ou rígida. O parceiro é o provedor e protetor. Lidere com firmeza, mas mostre amor através da estabilidade.",
    "carreira_financas": "Sucesso em posições de liderança, gestão, política. Momento de estabelecer uma rotina de trabalho disciplinada. O dinheiro flui da sua capacidade de impor a ordem.",
    "frase_impacto": "Se você não criar suas próprias regras, você será governado pelas regras dos outros. Construa sua base, imponha limites e assuma o comando da sua vida."
  },
  {
    "id": 5,
    "nome": "O Hierofante (The Hierophant)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Tradição, Regras, Orientação, Mentor, Conhecimento Estruturado.",
    "mensagem_central": "O Guardião da Sabedoria. A busca por orientação de um mentor ou a necessidade de se comprometer com um caminho de estudo e desenvolvimento, seguindo as regras ou normas aceitas.",
    "amor_relacionamentos": "A relação é formal e valoriza os costumes. Pode indicar a necessidade de procurar aconselhamento de terceiros (terapeuta, pastor) para resolver um impasse.",
    "carreira_financas": "Sucesso em áreas tradicionais (academia, direito) ou a necessidade de formação e certificação. O dinheiro flui da sua integridade e adesão às normas do mercado.",
    "frase_impacto": "O caminho foi pavimentado por quem veio antes. Aprenda a lição, honre a tradição e só então você terá autoridade para inovar."
  },
  {
    "id": 6,
    "nome": "Os Enamorados (The Lovers)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Escolha, Dualidade, União, Valores, Harmonia.",
    "mensagem_central": "O Dilema da Escolha. A necessidade de fazer uma escolha crucial que afetará seu futuro e suas relações, alinhando seus desejos com seus valores éticos e morais.",
    "amor_relacionamentos": "Uma decisão fundamental sobre a relação (casar, terminar) ou a escolha entre dois pretendentes. O foco é na união das energias e na comunicação transparente.",
    "carreira_financas": "Escolha entre dois caminhos de carreira ou duas propostas de negócio. O dinheiro flui de acordos transparentes e investimentos feitos após análise cuidadosa.",
    "frase_impacto": "Se você não pode ter tudo, escolha o que te faz ser mais você. A decisão mais difícil é aquela que define quem você será no futuro."
  },
  {
    "id": 7,
    "nome": "O Carro (The Chariot)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Vitória, Determinação, Controle, Progresso Rápido, Viagem.",
    "mensagem_central": "O Condutor do Destino. O arquétipo do triunfo e da força de vontade. Assuma o volante da sua vida, aja com coragem e mantenha o equilíbrio e a direção para a vitória.",
    "amor_relacionamentos": "A relação avança para um novo nível de compromisso. Você está no controle da sua vida amorosa e sabe o que quer. Tome a iniciativa.",
    "carreira_financas": "Sucesso em competições, promoções. O dinheiro flui da sua ambição e autodisciplina. Viagem ou mudança de sede é possível.",
    "frase_impacto": "Não há espaço para passageiros na sua vida. Tome o volante, ignore o ruído lateral e avance. O destino não espera por quem hesita."
  },
  {
    "id": 8,
    "nome": "A Força (Strength)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Coragem, Autodomínio, Persuasão Suave, Paixão Interna.",
    "mensagem_central": "O Poder da Gentileza. A força interior e o autodomínio para enfrentar seus instintos primários. Aborde os desafios com paciência, compaixão e persuasão suave.",
    "amor_relacionamentos": "Uma relação apaixonada, mas que exige autocontrole e paciência para lidar com as tensões. Use o toque suave para acalmar as inseguranças.",
    "carreira_financas": "Sucesso em projetos que exigem liderança empática. O dinheiro flui da sua confiança e da sua capacidade de inspirar lealdade.",
    "frase_impacto": "A verdadeira força não está no rugido, mas na calma. Você é mais forte quando usa a paciência para domar seus próprios demônios."
  },
  {
    "id": 9,
    "nome": "O Eremita (The Hermit)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Introspecção, Sabedoria, Solitude, Busca Pela Verdade, Guia.",
    "mensagem_central": "A Jornada para a Sabedoria Interior. A necessidade de se afastar do barulho social para encontrar clareza. Use a solitude voluntária para iluminar o caminho.",
    "amor_relacionamentos": "A relação exige um tempo de distanciamento para reflexão. Se solteiro(a), é um momento de cura e autoconhecimento antes de buscar um parceiro.",
    "carreira_financas": "Fase de pesquisa profunda, planejamento estratégico ou busca por um mentor. O dinheiro flui de decisões cautelosas, baseadas em muita análise.",
    "frase_impacto": "Se a mente está confusa, o mundo externo não tem as respostas. Entre em seu casulo. O silêncio é o seu conselheiro mais sábio."
  },
  {
    "id": 10,
    "nome": "Roda da Fortuna (Wheel of Fortune)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Ciclos, Mudança, Destino, Karma, Oportunidades.",
    "mensagem_central": "O Giro do Destino. Representa a natureza cíclica da vida. Aceite as marés, seja flexível e mantenha o equilíbrio. Confie no timing do universo e esteja pronto para as oportunidades.",
    "amor_relacionamentos": "Mudança inesperada na dinâmica da relação. Pode indicar um relacionamento cármico. A sorte está a seu favor para um encontro inesperado.",
    "carreira_financas": "Mudança súbita na sorte, oportunidade de negócio inesperada, ou fim de estagnação. O dinheiro flui através de eventos fortuitos.",
    "frase_impacto": "Não pode parar a roda, mas pode aprender a girar com ela. Confie nos ciclos; a mudança que está a chegar é o destino a trabalhar para si."
  },
  {
    "id": 11,
    "nome": "A Justiça (Justice)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Equidade, Causa e Efeito, Decisões Racionais, Responsabilidade.",
    "mensagem_central": "A Balança da Consequência. Um momento de acerto de contas. Tome decisões racionais e éticas, assumindo a responsabilidade por suas escolhas. O resultado será justo.",
    "amor_relacionamentos": "A relação exige honestidade radical e um esforço para equilibrar o dar e o receber. Decisão formal sobre o relacionamento (casamento, divórcio).",
    "carreira_financas": "Processos legais, assinaturas de contratos importantes. O dinheiro flui da sua integridade profissional e da sua honestidade. Mantenha a ética em primeiro lugar.",
    "frase_impacto": "Seus resultados são a consequência perfeita de suas ações. Tome a decisão mais justa, mesmo que seja a mais difícil. A verdade é sua única aliada."
  },
  {
    "id": 12,
    "nome": "O Enforcado (The Hanged Man)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Sacrifício, Pausa, Nova Perspectiva, Rendição, Desapego.",
    "mensagem_central": "O Paradoxo da Pausa. Um convite para interromper a ação e mudar radicalmente o seu ponto de vista. Renda-se ao que não pode controlar e use a introspecção para uma nova iluminação.",
    "amor_relacionamentos": "A relação está em stand-by ou exige um sacrifício de uma das partes. Use esse momento para reavaliar o que você realmente precisa.",
    "carreira_financas": "Atrasos em projetos, ou necessidade de adiar grandes decisões. Sacrifício de um lucro imediato em prol de um benefício a longo prazo.",
    "frase_impacto": "O controle é uma ilusão. O maior poder está na sua capacidade de render-se. Olhe o mundo de cabeça para baixo; a solução está onde você menos espera."
  },
  {
    "id": 13,
    "nome": "A Morte (Death)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Fim de Ciclo, Transformação, Renovação, Desapego, Fim Necessário.",
    "mensagem_central": "O Fim que Liberta. A transformação radical e inevitável. Aceite o desapego e não lute contra o que o universo está encerrando. Deixe ir o que já não serve para que a energia possa se renovar.",
    "amor_relacionamentos": "O fim de uma fase ou de um relacionamento tóxico. Dê um funeral digno ao passado e libere a energia para um amor transformador e maduro.",
    "carreira_financas": "O fim de um emprego, projeto ou fonte de renda. Reestruturação total de carreira ou investimento. A transformação exige um corte limpo.",
    "frase_impacto": "Se não está morto, não pode renascer. Aceite o luto e o corte. A dor do fim é o preço da liberdade para o seu novo começo."
  },
  {
    "id": 14,
    "nome": "A Temperança (Temperance)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Equilíbrio, Moderação, Cura, Paciência, Caminho do Meio.",
    "mensagem_central": "O Anjo da Harmonia. A busca pelo equilíbrio, a cura e a mistura harmoniosa de elementos opostos. Integre o que você aprendeu, buscando a moderação e evitando os extremos.",
    "amor_relacionamentos": "A relação está em uma fase de equilíbrio e tranquilidade. Encontre o meio-termo e a harmonia no timing da relação.",
    "carreira_financas": "Sucesso em projetos que exigem colaboração e diplomacia. É o momento de investir no longo prazo e evitar gastos impulsivos.",
    "frase_impacto": "O segredo não é a perfeição, é a proporção. Misture a paixão com a paciência. A cura e a resposta virão no timing perfeito."
  },
  {
    "id": 15,
    "nome": "O Diabo (The Devil)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Obsessão, Vício, Escravidão (Mental), Materialismo, Tentação.",
    "mensagem_central": "A Ilusão das Correntes. Manifestação de seus medos, vícios e obsessões internas. A escravidão é mental; enfrente sua 'sombra' e reconheça as tentações que o estão controlando.",
    "amor_relacionamentos": "Relação baseada em obsessão, luxúria descontrolada ou codependência. Um dos parceiros tenta dominar. O verdadeiro amor liberta, não aprisiona.",
    "carreira_financas": "Preso a um trabalho que detesta por salário, ou vícios de consumo e dívidas. O dinheiro flui de acordos questionáveis ou moralmente cinzentos.",
    "frase_impacto": "Se a corrente está prendendo, a culpa é da sua mão, não da corrente. Sua libertação começa quando você assume o controle do seu desejo."
  },
  {
    "id": 16,
    "nome": "A Torre (The Tower)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Ruptura, Choque, Crise, Demolição, Verdades Expostas.",
    "mensagem_central": "O Raio da Verdade. A mudança repentina e caótica que destrói estruturas frágeis ou ilusões. É um acordar violento, mas uma libertação necessária. Deixe cair o que precisa cair.",
    "amor_relacionamentos": "Rompimento abrupto, divórcio inesperado ou a revelação de uma verdade chocante. Use o choque para finalmente se libertar de uma situação insustentável.",
    "carreira_financas": "Perda súbita de emprego, falência, ou crise financeira que exige uma reestruturação completa. Evite a resistência, deixe o caos limpar o terreno.",
    "frase_impacto": "Se a fundação é falsa, o prédio tem que cair. A destruição que você teme é, na verdade, a sua única chance de reconstruir a verdade."
  },
  {
    "id": 17,
    "nome": "A Estrela (The Star)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Esperança, Renovação, Cura, Inspiração, Vulnerabilidade.",
    "mensagem_central": "A Luz no Fim do Túnel. O presente de esperança e inspiração após a crise. Conecte-se com sua essência e seu propósito. O futuro é promissor, e o universo está a seu favor.",
    "amor_relacionamentos": "Uma fase de cura emocional e espiritual na relação. O amor é puro e cheio de esperança. Seja vulnerável; o amor verdadeiro floresce sem filtros.",
    "carreira_financas": "Inspiração criativa para um novo projeto. O dinheiro flui da sua generosidade e da sua capacidade de acreditar no seu sonho. Otimismo financeiro.",
    "frase_impacto": "Seja a luz no seu próprio caminho. O caos acabou; a partir de agora, o universo é seu guia. Confie no seu brilho e no seu propósito."
  },
  {
    "id": 18,
    "nome": "A Lua (The Moon)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Ilusão, Inconsciente, Intuição, Medos, Mistério.",
    "mensagem_central": "O Espelho Distorcido. Gera confusão e ilusão sobre a realidade. Traz à tona medos irracionais. Confie na sua intuição, mas evite decisões baseadas apenas em emoções e desconfianças.",
    "amor_relacionamentos": "Incerteza, insegurança, e a sensação de que há algo oculto. Evite idealizar o parceiro ou projetar seus medos. A comunicação clara dissipa o nevoeiro.",
    "carreira_financas": "Momento de confusão mental sobre o caminho profissional. Cuidado com fraudes ou investimentos 'bons demais para serem verdade'. Investigue profundamente.",
    "frase_impacto": "Não confunda a sombra com o obstáculo. O mistério é real, mas o medo é opcional. Confie no seu instinto para enxergar além da ilusão."
  },
  {
    "id": 19,
    "nome": "O Sol (The Sun)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Sucesso, Alegria, Vitalidade, Clareza, Iluminação, Felicidade.",
    "mensagem_central": "O Brilho da Realização. O auge da felicidade incondicional e do sucesso. A verdade é revelada, e tudo é transparente e cheio de vitalidade. Celebre a vida e viva com autenticidade.",
    "amor_relacionamentos": "O auge da felicidade, alegria pura e entendimento mútuo. A relação é transparente e saudável. Pode indicar casamento, filhos e satisfação.",
    "carreira_financas": "Sucesso, reconhecimento público e prosperidade inquestionável. Colheita dos frutos do seu trabalho. O dinheiro flui da sua confiança e otimismo.",
    "frase_impacto": "Seja grato, mas não se curve. Você trabalhou para esse sucesso. Deixe a felicidade te cegar um pouco e brilhe sem medo."
  },
  {
    "id": 20,
    "nome": "O Julgamento (Judgement)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Renascimento, Avaliação, Chamado, Perdão, Novo Ciclo.",
    "mensagem_central": "O Chamado do Despertar. Um momento de avaliação profunda e honesta da sua vida. Perdoe-se, deixe para trás culpas passadas e renasça para um novo e grande ciclo.",
    "amor_relacionamentos": "Reconciliação, perdão mútuo ou a retomada de um relacionamento antigo com uma nova perspectiva. Foco na maturidade da relação.",
    "carreira_financas": "Revisão financeira completa (quitar dívidas). Promoção que é resultado direto de esforços passados. O dinheiro flui da sua honestidade.",
    "frase_impacto": "Não espere pelo perdão, conceda-o a si mesmo. O som da trombeta é o seu chamado interno para um novo propósito. Levante-se e renasça."
  },
  {
    "id": 21,
    "nome": "O Mundo (The World)",
    "naipe": "Arcanos Maiores",
    "palavra_chave": "Conclusão, Totalidade, Sucesso Pleno, Integração, Realização.",
    "mensagem_central": "O Círculo Completo. A realização total e a conclusão de um grande ciclo. Você alcançou a meta e está em harmonia e totalidade. Celebre seu sucesso e prepare-se para o próximo ciclo.",
    "amor_relacionamentos": "O relacionamento atinge um estágio de completa satisfação e realização. Sentimento de ter encontrado o parceiro certo e de ter percorrido toda a jornada com ele.",
    "carreira_financas": "Conclusão bem-sucedida de um projeto de vida, aposentadoria confortável ou reconhecimento global. O mundo está aberto para você.",
    "frase_impacto": "Você não completou apenas uma jornada, você se completou. Celebre sua totalidade, abrace o mundo e prepare-se para o próximo salto de fé."
  },

  // ARCANOS MENORES - PAUS (IDs 22 a 35)
  {
    "id": 22,
    "nome": "Ás de Paus",
    "naipe": "Paus",
    "palavra_chave": "Oportunidade, Inspiração, Potencial, Início Criativo.",
    "mensagem_central": "O Presente da Ideia. A centelha da inspiração e o potencial para um novo projeto ou jornada. É o momento de agir com paixão e fé.",
    "amor_relacionamentos": "Início apaixonado, atração física forte, novo projeto conjunto.",
    "carreira_financas": "Início de um negócio criativo, nova ideia de projeto, energia para começar.",
    "frase_impacto": "Não espere pelo momento certo. O momento certo é agora, quando a sua paixão te chama."
  },
  {
    "id": 23,
    "nome": "Dois de Paus",
    "naipe": "Paus",
    "palavra_chave": "Planejamento, Futuro, Decisão, Potencial Não Explorado.",
    "mensagem_central": "O Mapeador de Horizontes. Você está em um ponto de equilíbrio, olhando para o futuro e planejando o próximo grande passo. Exige coragem para sair da zona de conforto.",
    "amor_relacionamentos": "Decisão sobre o futuro da relação (viagem, mudança) ou potencial inexplorado.",
    "carreira_financas": "Planejamento estratégico de longo prazo, parceria de negócios, indecisão sobre expandir.",
    "frase_impacto": "O mundo é seu; a questão é o que você fará com ele. Não tenha medo da próxima fronteira."
  },
  {
    "id": 24,
    "nome": "Três de Paus",
    "naipe": "Paus",
    "palavra_chave": "Expansão, Visão de Longo Prazo, Espera, Parceria.",
    "mensagem_central": "O Sucesso Lançado. Você investiu e está vendo os primeiros sinais de sucesso. É um momento de espera confiante e de planejamento da expansão futura.",
    "amor_relacionamentos": "Relação sólida que se expande, parceiro retorna de viagem, construção de futuro.",
    "carreira_financas": "Negócio em crescimento, exportação, viagens a trabalho, primeiros lucros.",
    "frase_impacto": "O maior obstáculo é o que você ainda não tentou. Confie no seu investimento e comece a olhar mais longe."
  },
  {
    "id": 25,
    "nome": "Quatro de Paus",
    "naipe": "Paus",
    "palavra_chave": "Celebração, Estabilidade, Casa, Harmonia Comunitária.",
    "mensagem_central": "A Festa da Base. Atingimento de uma meta, estabilidade e segurança. Convite para celebrar conquistas com a família ou comunidade.",
    "amor_relacionamentos": "Casamento, noivado, morar junto, harmonia familiar.",
    "carreira_financas": "Sucesso em um projeto, inauguração de sede, bônus de equipe, ambiente de trabalho feliz.",
    "frase_impacto": "A alegria é contagiante. Honre suas conquistas com uma pausa e celebre a estabilidade que você construiu."
  },
  {
    "id": 26,
    "nome": "Cinco de Paus",
    "naipe": "Paus",
    "palavra_chave": "Conflito, Competição, Luta de Ego, Obstáculos.",
    "mensagem_central": "O Jogo do Conflito. Indica uma pequena luta, competição ou desentendimento. O estresse é mais sobre orgulho e ego do que sobre a meta final.",
    "amor_relacionamentos": "Pequenas brigas, competição por atenção, relação tensa.",
    "carreira_financas": "Disputa entre colegas, competição de mercado, projeto com obstáculos.",
    "frase_impacto": "Escolha suas batalhas com sabedoria. A vitória não compensa o desgaste se a luta for só por ego."
  },
  {
    "id": 27,
    "nome": "Seis de Paus",
    "naipe": "Paus",
    "palavra_chave": "Vitória, Reconhecimento Público, Sucesso, Confiança.",
    "mensagem_central": "O Triunfo da Comunidade. Você superou os desafios e agora recebe o reconhecimento merecido. Momento de alta confiança e celebração pública.",
    "amor_relacionamentos": "Reconhecimento pelo parceiro, orgulho na relação, superação de crise.",
    "carreira_financas": "Promoção, prêmio profissional, sucesso em vendas, liderança reconhecida.",
    "frase_impacto": "Não tenha medo de brilhar. Sua confiança é o seu maior trunfo, e o reconhecimento é a recompensa justa pelo seu esforço."
  },
  {
    "id": 28,
    "nome": "Sete de Paus",
    "naipe": "Paus",
    "palavra_chave": "Defesa, Coragem, Posição, Vantagem.",
    "mensagem_central": "A Luta pela Posição. Você está no topo e precisa defender sua posição ou suas crenças contra a concorrência ou críticos. Exige coragem e firmeza.",
    "amor_relacionamentos": "Defender o parceiro ou a relação de críticas externas, lutar por espaço.",
    "carreira_financas": "Defesa de um projeto, concorrência agressiva, negociação difícil.",
    "frase_impacto": "Sua visão vale a luta. Mantenha sua posição, mas não gaste energia com quem não vale a sua atenção."
  },
  {
    "id": 29,
    "nome": "Oito de Paus",
    "naipe": "Paus",
    "palavra_chave": "Rapidez, Notícias, Viagem, Movimento, Finalização.",
    "mensagem_central": "A Velocidade da Ação. Indica que as coisas estão se movendo rapidamente. Notícias chegam, e a energia está focada na finalização e na comunicação.",
    "amor_relacionamentos": "Relação avança rapidamente, viagem inesperada, notícia de amor.",
    "carreira_financas": "Comunicação intensa, e-mails, projeto acelerado, finalização de contratos.",
    "frase_impacto": "Não hesite; o tempo está voando. Abrace a velocidade e use a comunicação para selar o acordo."
  },
  {
    "id": 30,
    "nome": "Nove de Paus",
    "naipe": "Paus",
    "palavra_chave": "Resiliência, Lições Aprendidas, Proteção, Cautela.",
    "mensagem_central": "O Guerreiro Cansado. Você venceu as batalhas, mas continua em guarda. A força vem das lições aprendidas, mas a cautela é alta.",
    "amor_relacionamentos": "Relação que sobreviveu a grandes crises, proteção emocional, desconfiança.",
    "carreira_financas": "Último obstáculo em projeto, lições de negócios, necessidade de proteção legal.",
    "frase_impacto": "Você não está à beira da derrota, mas da vitória final. Use a sabedoria das suas cicatrizes para se proteger."
  },
  {
    "id": 31,
    "nome": "Dez de Paus",
    "naipe": "Paus",
    "palavra_chave": "Sobrecarga, Fardo, Responsabilidade, Tensão.",
    "mensagem_central": "O Peso do Sucesso. Você alcançou o objetivo, mas o sucesso trouxe uma carga insustentável de responsabilidades. É o limite do estresse.",
    "amor_relacionamentos": "Relação pesada, sentir que carrega o parceiro, excesso de responsabilidade familiar.",
    "carreira_financas": "Burnout, sobrecarga de trabalho, tentar fazer tudo sozinho, necessidade de delegar.",
    "frase_impacto": "Você não tem que carregar tudo. O fardo é opcional. Solte o excesso para poder ver a próxima meta."
  },
  {
    "id": 32,
    "nome": "Pajem de Paus",
    "naipe": "Paus",
    "palavra_chave": "Inspiração Jovem, Mensageiro, Oportunidade de Crescimento.",
    "mensagem_central": "O Jovem Entusiasta. A chegada de uma nova inspiração, ideia ou notícia que promete crescimento. Você está pronto para aprender e explorar.",
    "amor_relacionamentos": "Início de um flerte divertido, notícia sobre uma criança.",
    "carreira_financas": "Oportunidade de estudo, curso novo, brainstorming, notícia de trabalho.",
    "frase_impacto": "A paixão não precisa de um plano. Apenas comece, o entusiasmo fará o resto."
  },
  {
    "id": 33,
    "nome": "Cavaleiro de Paus",
    "naipe": "Paus",
    "palavra_chave": "Aventura, Paixão, Rapidez, Impulsividade.",
    "mensagem_central": "O Cavaleiro do Fogo. Energia de movimento, viagem e ação rápida. Ele é carismático, mas impulsivo e pode não terminar o que começa.",
    "amor_relacionamentos": "Flagração intensa, paixão queima rápido, relação que viaja.",
    "carreira_financas": "Viagem de negócios, lançamento rápido, mudança de emprego.",
    "frase_impacto": "Aja com paixão, mas não seja um cometa. O fogo é lindo, mas a consistência é o que aquece."
  },
  {
    "id": 34,
    "nome": "Rainha de Paus",
    "naipe": "Paus",
    "palavra_chave": "Carisma, Otimismo, Conquista, Foco Familiar.",
    "mensagem_central": "A Dama Magnética. Você é magnético, otimista, focado na carreira e no lar. Inspira os outros e é uma força da natureza.",
    "amor_relacionamentos": "Relação vibrante, parceira independente, desejo de construir família.",
    "carreira_financas": "Liderança carismática, sucesso em vendas, motivação de equipe.",
    "frase_impacto": "Sua energia é o seu maior capital. Use-a para inspirar, não para dominar."
  },
  {
    "id": 35,
    "nome": "Rei de Paus",
    "naipe": "Paus",
    "palavra_chave": "Liderança Visionária, Empreendedorismo, Confiança, Inspiração.",
    "mensagem_central": "O Visionário Chefe. O domínio da inspiração e da liderança. Você é um mestre em motivar, inspirar e transformar ideias em grandes projetos.",
    "amor_relacionamentos": "Parceiro confiável, líder na relação, base familiar sólida.",
    "carreira_financas": "CEO, empresário, visão clara de negócio, sucesso em projetos criativos.",
    "frase_impacto": "Não siga a tendência, crie-a. Sua visão é a única bússola que importa."
  },

  // ARCANOS MENORES - COPAS (IDs 36 a 49)
  {
    "id": 36,
    "nome": "Ás de Copas",
    "naipe": "Copas",
    "palavra_chave": "Novo Amor, Intuição, Alegria Emocional, Potencial.",
    "mensagem_central": "O Presente do Sentimento. O início de uma nova fase emocional ou espiritual. É o transbordar de sentimentos positivos e o potencial para um novo amor ou cura.",
    "amor_relacionamentos": "Início de um novo amor, proposta de casamento, cura emocional.",
    "carreira_financas": "Satisfação com o trabalho, intuição em decisões, projetos criativos.",
    "frase_impacto": "Não reprima a alegria. Deixe o seu coração transbordar; ele está te guiando para a cura."
  },
  {
    "id": 37,
    "nome": "Dois de Copas",
    "naipe": "Copas",
    "palavra_chave": "União, Parceria, Harmonia, Conexão, Alma Gêmea.",
    "mensagem_central": "O Encontro das Almas. A união perfeita de duas energias. É a carta do noivado, da parceria equilibrada e da forte conexão mútua.",
    "amor_relacionamentos": "Alma gêmea, noivado, casamento, parceria feliz.",
    "carreira_financas": "Parceria de negócios, acordo de cooperação, networking de sucesso.",
    "frase_impacto": "A atração é real, mas a união é uma escolha. Honre a parceria; ela é a sua força."
  },
  {
    "id": 38,
    "nome": "Três de Copas",
    "naipe": "Copas",
    "palavra_chave": "Celebração, Comunidade, Amizade, Reunião Social.",
    "mensagem_central": "A Festa da Comunidade. Momento de celebração, alegria e união entre amigos ou família. É o triunfo social e a gratidão pelas conexões.",
    "amor_relacionamentos": "Casamento, festa de família, reunião com amigos, celebração.",
    "carreira_financas": "Lançamento de sucesso, bônus de equipe, evento social de negócios.",
    "frase_impacto": "A alegria é melhor quando compartilhada. Tire um tempo para celebrar sua tribo."
  },
  {
    "id": 39,
    "nome": "Quatro de Copas",
    "naipe": "Copas",
    "palavra_chave": "Tédio, Insatisfação, Oferta Ignorada, Apatia.",
    "mensagem_central": "O Copo Cheio. Você está tão focado no que falta que ignora a oferta (copo) que está bem na sua frente. Tédio e apatia dominam.",
    "amor_relacionamentos": "Insatisfação na relação, tédio, oferta de amor ignorada.",
    "carreira_financas": "Proposta de emprego rejeitada por apatia, falta de motivação, estagnação.",
    "frase_impacto": "Não espere pelo extraordinário, veja o milagre no ordinário. Olhe para cima; a oportunidade está esperando."
  },
  {
    "id": 40,
    "nome": "Cinco de Copas",
    "naipe": "Copas",
    "palavra_chave": "Luto, Arrependimento, Foco na Perda, Tristeza.",
    "mensagem_central": "O Luto Necessário. Foco na perda (três copos caídos) e ignorância do que restou (dois copos em pé). É a dor da decepção e do arrependimento.",
    "amor_relacionamentos": "Fim de relação, divórcio, luto por uma perda, decepção.",
    "carreira_financas": "Perda financeira, projeto fracassado, arrependimento de investimento.",
    "frase_impacto": "O luto é real, mas não é sua prisão. Vire-se e veja o que restou. A esperança está na sua mão."
  },
  {
    "id": 41,
    "nome": "Seis de Copas",
    "naipe": "Copas",
    "palavra_chave": "Passado, Memórias, Nostalgia, Criança Interior.",
    "mensagem_central": "A Magia da Memória. Conexão com o passado, a infância e a inocência. Pode indicar o retorno de alguém ou a cura de feridas antigas.",
    "amor_relacionamentos": "Retorno de ex-amor, reviver a paixão, criança interior curada.",
    "carreira_financas": "Reencontro com antigos colegas, investimento no passado (imóveis antigos).",
    "frase_impacto": "A inocência é a sua força. Use o passado como um professor, não como uma corrente."
  },
  {
    "id": 42,
    "nome": "Sete de Copas",
    "naipe": "Copas",
    "palavra_chave": "Ilusão, Escolhas Múltiplas, Sonhos, Fantasia.",
    "mensagem_central": "A Ilusão das Opções. Muitas escolhas, mas todas são ilusórias ou distrações. É o momento de fantasias, sonhos e falta de clareza.",
    "amor_relacionamentos": "Idealização de um parceiro, amor platônico, ilusão de que há algo melhor.",
    "carreira_financas": "Várias ideias de negócio, falta de foco, especulação financeira.",
    "frase_impacto": "Não se perca na neblina da ilusão. Escolha uma coisa real e dê o seu foco."
  },
  {
    "id": 43,
    "nome": "Oito de Copas",
    "naipe": "Copas",
    "palavra_chave": "Abandono, Busca Espiritual, Caminhada, Desapego.",
    "mensagem_central": "A Partida Silenciosa. A decisão de deixar uma situação emocionalmente insatisfatória para buscar algo mais profundo e verdadeiro.",
    "amor_relacionamentos": "Deixar uma relação tóxica, busca por amor mais significativo.",
    "carreira_financas": "Sair de um emprego que não realiza, mudança de carreira, busca por propósito.",
    "frase_impacto": "O caminho é solitário, mas a busca é sagrada. Deixe o que não te preenche e siga o chamado da sua alma."
  },
  {
    "id": 44,
    "nome": "Nove de Copas",
    "naipe": "Copas",
    "palavra_chave": "Desejo Realizado, Satisfação, Abundância, Conforto.",
    "mensagem_central": "O Desejo Realizado. A carta do 'Desejo de Pedido'. Sucesso emocional e conforto. Sentimento de realização e gratidão.",
    "amor_relacionamentos": "Satisfação na relação, desejo de amor realizado, felicidade.",
    "carreira_financas": "Sucesso financeiro, promoção esperada, conforto material.",
    "frase_impacto": "O prazer é a sua recompensa. Sente-se, relaxe e saiba que você tem tudo o que precisa."
  },
  {
    "id": 45,
    "nome": "Dez de Copas",
    "naipe": "Copas",
    "palavra_chave": "Felicidade Plena, Família, Comunidade, Alegria Duradoura.",
    "mensagem_central": "O Paraíso na Terra. A plenitude emocional, familiar e comunitária. É o final feliz e a harmonia duradoura.",
    "amor_relacionamentos": "Casamento, família feliz, casa dos sonhos, alegria.",
    "carreira_financas": "Sucesso na carreira, ambiente de trabalho harmonioso, parceria de vida.",
    "frase_impacto": "O verdadeiro sucesso é a alegria que você compartilha. Honre sua família e seu coração."
  },
  {
    "id": 46,
    "nome": "Pajem de Copas",
    "naipe": "Copas",
    "palavra_chave": "Notícia Emocional, Sensibilidade, Intuição, Inocência.",
    "mensagem_central": "O Jovem Sentimental. A chegada de uma notícia ou pessoa sensível. É o início da exploração emocional e da intuição.",
    "amor_relacionamentos": "Novo admirador, notícia de gravidez, flerte inocente.",
    "carreira_financas": "Notícia positiva sobre projeto, intuição sobre investimento, curso de arte.",
    "frase_impacto": "Confie no seu coração; ele é seu guia. Não tenha medo de ser vulnerável."
  },
  {
    "id": 47,
    "nome": "Cavaleiro de Copas",
    "naipe": "Copas",
    "palavra_chave": "Romance, Proposta, Charme, Convidado, Cavalheirismo.",
    "mensagem_central": "O Cavaleiro Romântico. A chegada de uma proposta (amorosa ou de negócio) feita com charme e emoção. Ele é o mensageiro da paixão.",
    "amor_relacionamentos": "Proposta de amor, convite para sair, parceiro romântico e charmoso.",
    "carreira_financas": "Proposta de negócio atraente, convite para networking, projeto criativo.",
    "frase_impacto": "O mundo precisa de mais romance. Use seu charme, mas honre a promessa."
  },
  {
    "id": 48,
    "nome": "Rainha de Copas",
    "naipe": "Copas",
    "palavra_chave": "Sensibilidade, Empatia, Cura, Intuição, Cuidado.",
    "mensagem_central": "A Dama do Coração. O domínio da emoção, da intuição e da empatia. Você é um porto seguro para os outros, curadora e sensível.",
    "amor_relacionamentos": "Parceira empática, mãe carinhosa, conexão intuitiva.",
    "carreira_financas": "Sucesso em áreas de terapia, arte, mentorias, gestão de pessoas.",
    "frase_impacto": "Seja o oceano. Use sua profundidade para curar e sua intuição para guiar."
  },
  {
    "id": 49,
    "nome": "Rei de Copas",
    "naipe": "Copas",
    "palavra_chave": "Equilíbrio Emocional, Compaixão, Sabedoria, Maturidade.",
    "mensagem_central": "O Mestre das Emoções. O domínio total dos sentimentos. Você é compassivo, sábio e usa a emoção como força, não fraqueza.",
    "amor_relacionamentos": "Parceiro maduro, pai carinhoso, estabilidade emocional.",
    "carreira_financas": "Liderança compassiva, sucesso em psicologia, diplomacia.",
    "frase_impacto": "A força não está em reprimir, mas em dominar a emoção. Use sua sabedoria para liderar com o coração."
  },

  // ARCANOS MENORES - ESPADAS (IDs 50 a 63)
  {
    "id": 50,
    "nome": "Ás de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Clareza, Decisão, Vitória Mental, Breakthrough.",
    "mensagem_central": "O Presente da Verdade. O potencial para um grande avanço mental, uma ideia brilhante ou a clareza radical. É o momento de tomar a decisão final.",
    "amor_relacionamentos": "Clareza na relação, decisão final sobre o parceiro, conversa honesta.",
    "carreira_financas": "Ideia inovadora, vitória legal, insight de negócio.",
    "frase_impacto": "Corte o nó. A verdade é sua única arma, e a clareza é a sua vitória."
  },
  {
    "id": 51,
    "nome": "Dois de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Impasse, Bloqueio, Escolha Difícil, Evitar Conflito.",
    "mensagem_central": "O Nó Cego. Você está em um impasse mental, cego para a solução por medo de tomar uma decisão. É uma estagnação autoimposta.",
    "amor_relacionamentos": "Indecisão na relação, evitar conversa, medo de escolher.",
    "carreira_financas": "Bloqueio em projeto, indecisão de investimento, estagnação mental.",
    "frase_impacto": "Tirar a venda é mais fácil que carregar o fardo. Escolha, mesmo que doa, para poder avançar."
  },
  {
    "id": 52,
    "nome": "Três de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Mágoa, Decepção, Perda, Coração Partido.",
    "mensagem_central": "A Dor da Decepção. A dor do coração partido causada pela traição, perda ou mágoa. É uma dor real, mas necessária para a cura.",
    "amor_relacionamentos": "Fim doloroso, traição, triângulo amoroso.",
    "carreira_financas": "Decepção com colega, projeto que falha, perda financeira por engano.",
    "frase_impacto": "O corte é doloroso, mas a ferida vai fechar. Deixe o luto passar; ele é a porta para a cura."
  },
  {
    "id": 53,
    "nome": "Quatro de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Descanso, Recuperação, Pausa, Recuo Estratégico.",
    "mensagem_central": "O Recuo Estratégico. Necessidade de descanso mental e físico após uma crise. É o momento de isolamento para recarregar as energias.",
    "amor_relacionamentos": "Pausa na relação, necessidade de espaço, relação em stand-by.",
    "carreira_financas": "Férias, sabbatical, recuperação de burnout, reavaliação.",
    "frase_impacto": "A maior força está na pausa. Recue, recarregue e só então volte para a luta."
  },
  {
    "id": 54,
    "nome": "Cinco de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Humilhação, Conflito Vazio, Perda, Vencedor Solitário.",
    "mensagem_central": "A Vitória de Pirro. Você 'ganha' a discussão ou a competição, mas perde algo maior (reputação, amizade). A vitória é amarga.",
    "amor_relacionamentos": "Discussão que destrói a relação, um parceiro vence por manipulação.",
    "carreira_financas": "Perda de reputação, vitória legal com alto custo, briga de ego.",
    "frase_impacto": "A vitória que te deixa sozinho é a sua maior derrota. Não vale a pena vencer se o preço for a sua paz."
  },
  {
    "id": 55,
    "nome": "Seis de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Transição, Movimento, Deixar para Trás, Cura.",
    "mensagem_central": "A Ponte para a Calma. O movimento de deixar uma situação difícil ou tóxica para trás. É a jornada para um lugar mental e emocionalmente melhor.",
    "amor_relacionamentos": "Mudar de cidade, deixar relação tóxica, seguir em frente após crise.",
    "carreira_financas": "Mudar de emprego, transição de carreira, mudança de sede.",
    "frase_impacto": "Não olhe para trás. O barco está se movendo, e a calma está na nova margem."
  },
  {
    "id": 56,
    "nome": "Sete de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Engano, Fuga, Segredo, Estratégia Questionável.",
    "mensagem_central": "O Ladrão Noturno. Indica a tentação de pegar atalhos, agir por debaixo dos panos ou enganar para obter o que se deseja. Falta de ética.",
    "amor_relacionamentos": "Engano, traição sutil, segredos na relação.",
    "carreira_financas": "Roubo de ideias, fraude, falta de ética profissional, atalho ilegal.",
    "frase_impacto": "A verdade virá à tona. Não pegue o atalho; o preço do engano é sempre alto."
  },
  {
    "id": 57,
    "nome": "Oito de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Prisão Mental, Vítima, Bloqueio, Medo.",
    "mensagem_central": "A Prisão da Mente. Você se sente preso e vendado, mas a escravidão é mental, imposta pelo seu medo e insegurança. Você pode se libertar.",
    "amor_relacionamentos": "Sentir-se preso na relação, medo de sair, autossabotagem.",
    "carreira_financas": "Sentir-se preso no emprego, bloqueio criativo, medo de tomar iniciativa.",
    "frase_impacto": "As correntes estão soltas; tire a venda. Você não está preso, está paralisado pelo seu próprio medo."
  },
  {
    "id": 58,
    "nome": "Nove de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Ansiedade, Pesadelo, Medo, Culpa.",
    "mensagem_central": "A Noite do Pânico. O ápice da ansiedade, preocupação e culpa. Os medos são imaginários (pesadelos), mas a dor é real.",
    "amor_relacionamentos": "Insônia por preocupação, medo irracional de traição, culpa.",
    "carreira_financas": "Preocupação exagerada com finanças, estresse mental, pânico.",
    "frase_impacto": "Não sofra duas vezes. O medo é seu maior inimigo. O que te preocupa é, na maioria das vezes, uma invenção da sua mente."
  },
  {
    "id": 59,
    "nome": "Dez de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Fim Doloroso, Traição, Ruína, Fundo do Poço, Liberação.",
    "mensagem_central": "O Fim Definitivo. O golpe final, a traição absoluta ou a conclusão de um ciclo que foi doloroso. O pior já passou, e a única saída é a ascensão.",
    "amor_relacionamentos": "Fim de relação tóxica, divórcio final, traição absoluta.",
    "carreira_financas": "Falência, perda total de projeto, demissão dolorosa.",
    "frase_impacto": "Se você está no chão, você não pode cair mais. A dor é real, mas o desespero é opcional. Levante-se, o pior já passou."
  },
  {
    "id": 60,
    "nome": "Pajem de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Curiosidade, Crítica, Notícia Desafiadora, Observação.",
    "mensagem_central": "O Jovem Inquisidor. A energia da curiosidade e da investigação. A chegada de uma nova ideia que gera debate, mas sem a experiência para sustentá-la.",
    "amor_relacionamentos": "Flerte intelectual, parceiro muito crítico, fofoca.",
    "carreira_financas": "Notícias que exigem pesquisa, brainstorming, projeto que questiona o status quo.",
    "frase_impacto": "Seja curioso, mas não fofoqueiro. O ceticismo é a arma do inteligente, mas a crítica vazia é a arma do fraco."
  },
  {
    "id": 61,
    "nome": "Cavaleiro de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Ação Rápida, Agressividade, Impulso, Debate Vigoroso.",
    "mensagem_central": "O Ataque Imparável. A energia mental em alta velocidade, que age sem planejamento. Coragem, mas com excesso de agressividade.",
    "amor_relacionamentos": "Muita discussão, parceiro insensível, brigas passionais.",
    "carreira_financas": "Projeto que exige ataque rápido, decisões impulsivas, falta de planejamento.",
    "frase_impacto": "Não atire primeiro e pergunte depois. Coragem sem estratégia é apenas pressa, e pressa destrói pontes."
  },
  {
    "id": 62,
    "nome": "Rainha de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Independência, Honestidade Direta, Mente Afiada, Discernimento.",
    "mensagem_central": "A Juíza Imparcial. A inteligência madura e objetiva. Usa a lógica para cortar a falsidade e exige clareza e independência emocional.",
    "amor_relacionamentos": "Parceira que exige honestidade total, independência, frieza emocional.",
    "carreira_financas": "Sucesso em posições de liderança analítica, jornalismo, decisões objetivas.",
    "frase_impacto": "Você não tem que ser dura, você tem que ser clara. A independência é sua maior joia, não a negocie por conforto."
  },
  {
    "id": 63,
    "nome": "Rei de Espadas",
    "naipe": "Espadas",
    "palavra_chave": "Autoridade, Mente Mestra, Lógica Implacável, Intelecto Soberano.",
    "mensagem_central": "O Estrategista Supremo. O domínio da lógica, da lei e da autoridade. Toma decisões justas e corretas, ignorando o sentimentalismo.",
    "amor_relacionamentos": "Parceiro intelectual, justo, foco na verdade e nos limites.",
    "carreira_financas": "CEO, juiz, político, alta gestão, raciocínio impecável.",
    "frase_impacto": "Sua palavra é a sua garantia. Não corra riscos desnecessários; invista na solidez e prove que a estabilidade é a melhor estratégia de crescimento."
  },

  // ARCANOS MENORES - OUROS (IDs 64 a 77)
  {
    "id": 64,
    "nome": "Ás de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Nova Oportunidade Material, Prosperidade, Segurança, Saúde.",
    "mensagem_central": "O Presente do Universo (em dinheiro). Uma oportunidade tangível que promete crescimento e estabilidade a longo prazo.",
    "amor_relacionamentos": "Nova fase de segurança, comprar casa, iniciar vida a dois.",
    "carreira_financas": "Início de um negócio promissor, proposta de emprego excelente, investimento lucrativo.",
    "frase_impacto": "Não é sorte, é chance. O universo lhe deu a semente de ouro. Cave o buraco, plante-a e comece a regar com seu esforço."
  },
  {
    "id": 65,
    "nome": "Dois de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Equilíbrio, Malabarismo, Adaptação, Gestão de Prioridades.",
    "mensagem_central": "O Malabarista da Vida. Você está fazendo um malabarismo entre duas responsabilidades ou projetos. Exige flexibilidade e gestão inteligente do tempo.",
    "amor_relacionamentos": "Equilibrar as necessidades do parceiro com as suas, conciliar trabalho e amor.",
    "carreira_financas": "Gerenciamento de múltiplas tarefas, dois empregos, orçamento apertado.",
    "frase_impacto": "Não se estresse, se adapte. O malabarista cai quando pensa demais. Confie no seu ritmo e mantenha o foco no que é essencial."
  },
  {
    "id": 66,
    "nome": "Três de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Colaboração, Trabalho em Equipe, Reconhecimento de Qualidade, Aprendizado.",
    "mensagem_central": "A Maestria Reconhecida. O trabalho bem-feito atrai o reconhecimento e a recompensa. Convite para colaborar e trocar expertise.",
    "amor_relacionamentos": "Relação construída com esforço mútuo, ajuda de conselhos externos.",
    "carreira_financas": "Trabalho em equipe, aprovação de projeto, contratação de mentor.",
    "frase_impacto": "Não tente ser um one-man-show. O sucesso é um projeto de equipe. Aceite a ajuda e pague bem a expertise."
  },
  {
    "id": 67,
    "nome": "Quatro de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Acumulação, Controle, Segurança Financeira, Apego.",
    "mensagem_central": "O Guardião dos Bens. Você alcançou a estabilidade, mas está agarrado a ela por medo de perder. Apego excessivo e estagnação.",
    "amor_relacionamentos": "Ciúme, possessividade, relutância em investir emoção ou dinheiro.",
    "carreira_financas": "Segurança financeira, recusa em investir, avareza, estagnação.",
    "frase_impacto": "Se o medo de perder está impedindo você de viver, você não é o dono do seu dinheiro; ele é o seu carcereiro. Solte o controle!"
  },
  {
    "id": 68,
    "nome": "Cinco de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Carência, Perda Material, Exclusão, Necessidade de Ajuda.",
    "mensagem_central": "O Sentimento de Exclusão. Sentimento de abandono e carência material. A dificuldade é real, mas você está ignorando a ajuda próxima.",
    "amor_relacionamentos": "Sentimento de abandono, crise financeira ou de saúde na relação.",
    "carreira_financas": "Dificuldade financeira, perda de emprego, mente fixada na escassez.",
    "frase_impacto": "Seus recursos são limitados, mas o seu orgulho não precisa ser. O abrigo está mais perto do que você pensa. Peça ajuda!"
  },
  {
    "id": 69,
    "nome": "Seis de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Generosidade, Reciprocidade, Caridade, Fluxo Equilibrado.",
    "mensagem_central": "A Balança da Prosperidade. Indica o equilíbrio no fluxo de dar e receber recursos. Generosidade e justiça na troca.",
    "amor_relacionamentos": "Relação de apoio mútuo, recursos compartilhados, equilíbrio na troca.",
    "carreira_financas": "Doações, bolsas de estudo, aumento merecido, mentor/mentorado.",
    "frase_impacto": "A verdadeira riqueza não é o que você acumula, mas o que você pode dar. Mantenha a balança equilibrada: doar e receber fazem parte do mesmo ciclo."
  },
  {
    "id": 70,
    "nome": "Sete de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Paciência, Espera, Avaliação de Investimento, Colheita Tardia.",
    "mensagem_central": "A Pausa para Avaliação. Momento de espera e reavaliação. Você plantou a semente e precisa de paciência antes de colher ou mudar o foco.",
    "amor_relacionamentos": "Relação em estagnação, avaliar se o tempo investido está valendo a pena.",
    "carreira_financas": "Espera pelo retorno de investimento, auditoria, planejamento de longo prazo.",
    "frase_impacto": "O sucesso não é um sprint, é uma maratona. A colheita está chegando, mas a pressa destrói o fruto antes da hora."
  },
  {
    "id": 71,
    "nome": "Oito de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Diligência, Aperfeiçoamento, Maestria, Trabalho Artesanal.",
    "mensagem_central": "O Artesão no Fluxo. Dedicação concentrada e foco nos detalhes. O sucesso virá da excelência e do aprendizado constante.",
    "amor_relacionamentos": "Relação exige dedicação para ser aperfeiçoada, foco na qualidade.",
    "carreira_financas": "Aprendizado intenso, aperfeiçoamento de habilidade, sucesso pela expertise.",
    "frase_impacto": "O sucesso não acontece. É construído. Abaixe a cabeça, ignore o barulho e deixe que a qualidade do seu trabalho fale por si."
  },
  {
    "id": 72,
    "nome": "Nove de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Independência, Luxo, Autossuficiência, Prazer.",
    "mensagem_central": "A Lady da Autossuficiência. O prazer que advém da independência financeira e pessoal. Tempo para desfrutar dos frutos do seu esforço.",
    "amor_relacionamentos": "Relação onde ambos valorizam o espaço, parceiro independente.",
    "carreira_financas": "Estabilidade financeira, altos rendimentos, investimento em qualidade de vida.",
    "frase_impacto": "Você não precisa de um parceiro para pagar suas contas. O verdadeiro luxo é a liberdade de ser a dona do seu próprio império."
  },
  {
    "id": 73,
    "nome": "Dez de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Legado, Riqueza Geracional, Família, Estabilidade, Herança.",
    "mensagem_central": "O Clã Próspero. O ápice da realização material, estendendo a riqueza e a segurança por gerações. Legado familiar.",
    "amor_relacionamentos": "Casamento estável, união de famílias, patrimônio conjunto, herança.",
    "carreira_financas": "Riqueza consolidada, aposentadoria bem-sucedida, sucesso financeiro duradouro.",
    "frase_impacto": "O ponto não é quanto você tem, mas o que você está construindo. O verdadeiro sucesso é a capacidade de sustentar o futuro da sua linhagem."
  },
  {
    "id": 74,
    "nome": "Pajem de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Notícia Material, Nova Ideia Prática, Aprendizagem, Potencial.",
    "mensagem_central": "O Estudante Focado. Chegada de uma oportunidade tangível (curso, investimento) que exige paciência e dedicação para construir uma base sólida.",
    "amor_relacionamentos": "Parceiro focado em construir vida estável, início de projeto material.",
    "carreira_financas": "Início de curso técnico, bolsa de estudos, planejamento prático.",
    "frase_impacto": "Não é só sonhar com o sucesso; é aprender a construí-lo. Pegue a caneta, anote o plano e comece o trabalho de base."
  },
  {
    "id": 75,
    "nome": "Cavaleiro de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Perícia, Confiança, Trabalho Metódico, Lenta Mas Segura.",
    "mensagem_central": "O Executor Confiável. A perseverança e a confiabilidade materializadas. Avanço lento, mas seguro, através do trabalho metódico.",
    "amor_relacionamentos": "Parceiro leal e confiável, relação que se constrói lentamente.",
    "carreira_financas": "Progresso constante em projetos de longo prazo, disciplina e ética de trabalho.",
    "frase_impacto": "Se não está quebrado, não conserte. A pressa é inimiga da estabilidade. O sucesso que dura é aquele que é construído tijolo por tijolo."
  },
  {
    "id": 76,
    "nome": "Rainha de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Abundância, Praticidade, Cuidado, Segurança, Boa Anfitriã.",
    "mensagem_central": "A Nutridora de Ouro. A personificação da prosperidade e da capacidade de criar um ambiente seguro, confortável e abundante.",
    "amor_relacionamentos": "Parceira acolhedora, foco no lar, estabilidade material.",
    "carreira_financas": "Sucesso em áreas de gestão de recursos, nutrição, organização.",
    "frase_impacto": "O conforto não é um luxo, é uma ferramenta. Crie seu próprio paraíso e use sua estabilidade para nutrir quem você ama."
  },
  {
    "id": 77,
    "nome": "Rei de Ouros",
    "naipe": "Ouros",
    "palavra_chave": "Riqueza, Provedor, Mestre dos Negócios, Estabilidade Sólida.",
    "mensagem_central": "O Magnata Construtor. O domínio do sucesso financeiro, da segurança e da capacidade de transformar ideias em realidade lucrativa.",
    "amor_relacionamentos": "Parceiro estável e leal, base financeira inabalável.",
    "carreira_financas": "CEO, empresário, mestre dos negócios, disciplina financeira.",
    "frase_impacto": "Sua palavra é a sua garantia. Não corra riscos desnecessários; invista na solidez e prove que a estabilidade é a melhor estratégia de crescimento."
  }
];
// OBJETO FINAL: Mapeamento de IDs para URLs das 78 Cartas
const urlsImagens = {
    // --- ARCANOS MAIORES (0 a 21) ---
    '0': 'imagens/o_louco.png', 
    '1': 'imagens/o_mago.png',
    '2': 'imagens/a_sacerdotisa.png',
    '3': 'imagens/a_imperatriz.png',
    '4': 'imagens/o_imperador.png',
    '5': 'imagens/o_hierofante.png',
    '6': 'imagens/os_enamorados.png',
    '7': 'imagens/o_carro.png',
    '8': 'imagens/a_força.png',  // NOVO: Link da A Justiça foi para A Força (8)
    '9': 'imagens/o_eremita.png',
    '10': 'imagens/a_roda.png',
    '11': 'imagens/a_justiça.png', // NOVO: Link da A Força foi para A Justiça (11)
    '12': 'imagens/o_enforcado.png',
    '13': 'imagens/a_morte.png',
    '14': 'imagens/a_temperança.png',
    '15': 'imagens/o_diabo.png',
    '16': 'imagens/a_torre.png',
    '17': 'imagens/a_estrela.png',
    '18': 'imagens/a_lua.png',
    '19': 'imagens/o_sol.png',
    '20': 'imagens/o_julgamento.png',
    '21': 'imagens/o_mundo.png',

    // --- ARCANOS MENORES: PAUS (22 a 35) ---
    '22': 'imagens/aspaus.png',
    '23': 'imagens/2paus.png',
    '24': 'imagens/3paus.png',
    '25': 'imagens/4paus.png',
    '26': 'imagens/5paus.png',
    '27': 'imagens/6paus.png',
    '28': 'imagens/7paus.jpg',
    '29': 'imagens/8paus.png',
    '30': 'imagens/9paus.png',
    '31': 'imagens/10paus.jpg',
    '32': 'imagens/valetepaus.png',
    '33': 'imagens/cavpaus.png',
    '34': 'imagens/rainhapaus.png',
    '35': 'imagens/reipaus.png',

    // --- ARCANOS MENORES: COPAS (36 a 49) ---
    '36': 'imagens/ascopas.png',
    '37': 'imagens/2copas.png',
    '38': 'imagens/3copas.png',
    '39': 'imagens/4copas.png',
    '40': 'imagens/5copas.png',
    '41': 'imagens/6copas.png',
    '42': 'imagens/7copas.png',
    '43': 'imagens/8copas.png',
    '44': 'imagens/9copas.png',
    '45': 'imagens/10copas.png',
    '46': 'imagens/valetecopas.png',
    '47': 'imagens/cavcopas.png',
    '48': 'imagens/rainhacopas.png',
    '49': 'imagens/reicopas.png',

    // --- ARCANOS MENORES: ESPADAS (50 a 63) ---
    '50': 'imagens/asespadas.jpg',
    '51': 'imagens/2espadas.png',
    '52': 'imagens/3espadas.png',
    '53': 'imagens/4espadas.png',
    '54': 'imagens/5espadas.png',
    '55': 'imagens/6espadas.png',
    '56': 'imagens/7espadas.png',
    '57': 'imagens/8espadas.png',
    '58': 'imagens/9espadas.png',
    '59': 'imagens/10espadas.png',
    '60': 'imagens/valeteespadas.png',
    '61': 'imagens/cavespadas.png',
    '62': 'imagens/rainhaespadas.png',
    '63': 'imagens/reiespadas.png',

    // --- ARCANOS MENORES: OUROS (64 a 77) ---
    '64': 'imagens/asouros.png',
    '65': 'imagens/2ouros.jpg',
    '66': 'imagens/3ouros.jpg',
    '67': 'imagens/4ouros.jpg',
    '68': 'imagens/5ouros.jpg',
    '69': 'imagens/6ouros.jpg',
    '70': 'imagens/7ouros.jpg',
    '71': 'imagens/8ouros.jpg',
    '72': 'imagens/9ouros.jpg',
    '73': 'imagens/10ouros.jpg',
    '74': 'imagens/valeteouros.jpg',
    '75': 'imagens/cavouros.jpg',
    '76': 'imagens/rainhaouros.jpg',
    '77': 'imagens/reiouros.jpg',
};
    // CONTEÚDO EXPANDIDO DOS TEMAS E CONSELHOS (MANTIDOS)
    const TEMAS = [
        {
            id: 'amor',
            titulo: "O Sentido do Amor",
            significado_central: "Esta é a energia da conexão genuína, que começa dentro. O amor verdadeiro não é encontrado, mas sim construído através da vulnerabilidade, paciência e da aceitação das imperfeições – suas e dos outros. O oráculo indica que seu foco deve estar na cura dos laços.",
            conselhos: [
                "Pratique o 'Não' Saudável: Amar a si mesmo significa proteger sua energia. Ação: Recuse com gentileza um convite ou pedido que drenaria sua bateria, sem dar explicações complexas. Exemplo: 'Adoraria, mas preciso de um tempo para mim hoje. Na próxima!', e sinta a leveza.",
                "Inicie a Curadoria de Conexões: O amor se enfraquece com a distância e a distração. Ação: Escolha uma pessoa importante (amigo, parceiro, familiar) e dedique 15 minutos de atenção total, sem tocar no celular. Exemplo: Um café ou videochamada focado, perguntando: 'O que está realmente no seu coração hoje?'",
                "O Espelho da Crítica: O que te irrita no outro geralmente é um reflexo seu. Ação: Da próxima vez que criticar mentalmente alguém, anote 3 características dessa pessoa que você também se incomoda em si mesmo. Propósito: Transformar a crítica externa em autoconhecimento."
            ]
        },
        {
            id: 'mudanca',
            titulo: "O Chamado da Mudança",
            significado_central: "Representa o fim inevitável de um ciclo e o convite para a evolução. A inércia e o medo de perder o que é familiar são as únicas coisas que prolongam sua dor. Este é um chamado para o movimento e a transformação imediata.",
            conselhos: [
                "Divida a Grande Montanha: Mudanças parecem gigantescas porque olhamos para o topo. Ação: Escolha o menor primeiro passo possível (ex: pesquisar um preço, enviar um e-mail de 5 linhas) e complete-o em 10 minutos. Exemplo: Se quer mudar de área, o passo 1 é 'abrir o LinkedIn e ver 3 vagas'.",
                "A Terapia do Desapego: Para a energia nova entrar, o velho precisa sair. Ação: Livre-se de 5 itens da sua casa (roupa, livro, papel) que você não usa há 6 meses. Descarte imediatamente. Propósito: O movimento físico de 'soltar' desbloqueia o medo mental de soltar.",
                "Negocie com o Medo: O medo tem nome. Ação: Pergunte a si mesmo: 'Qual é o pior cenário REAL se eu fizer essa mudança?' E depois pergunte: 'O quão provável ele é?' Propósito: Ver os riscos no papel, em vez de na mente, remove grande parte da subjetividade e permite o planejamento."
            ]
        },
        {
            id: 'foco',
            titulo: "O Poder do Foco",
            significado_central: "É o holofote da sua alma: onde ele foca, a realidade se manifesta. Em um mundo de distrações infinitas, o foco é a sua maior moeda e a chave para transformar esforço em resultado. O oráculo sugere que você precisa de disciplina e clareza mental.",
            conselhos: [
                "A Regra do 1-3-5: Em vez de uma lista de 20 tarefas, defina 1 Grande Objetivo, 3 Objetivos Médios e 5 Pequenas Tarefas para o seu dia. Ação: Concentre-se no Grande Objetivo antes de qualquer outra coisa. Exemplo: Se o Grande Objetivo é 'Terminar o relatório', não responda e-mails antes de dar o primeiro passo nele.",
                "O Ritual do Bloqueio: As distrações chegam de forma sutil. Ação: Desligue TODAS as notificações do celular (exceto chamadas de emergência) por 90 minutos. Propósito: Treinar seu músculo mental para resistir ao impulso de checar, aumentando a profundidade do seu trabalho.",
                "Defina o 'Não-Fazer': O foco não é apenas dizer 'sim' para uma coisa, mas dizer 'não' para centenas. Ação: Liste três coisas que você não fará hoje ou esta semana por serem ladrões de tempo (ex: checar redes sociais após as 20h, assistir TV durante as refeições). Propósito: Proteja seu tempo ativamente."
            ]
        },
        {
            id: 'prosperidade',
            titulo: "O Fluxo da Prosperidade",
            significado_central: "A verdadeira prosperidade é um fluxo, não um estoque. Ela abrange tempo, saúde, relacionamentos e dinheiro. É a confiança de que você tem o suficiente, e a sabedoria para usar o que tem de forma consciente. O fluxo está aberto, mas exige sua ação consciente.",
            conselhos: [
                "O Orçamento de Energia: Pare de focar só no dinheiro. Ação: Escolha uma área da sua vida (saúde, amizades, hobby) que está 'em débito' e dedique 30 minutos a ela hoje. Exemplo: Marcar uma caminhada, ligar para um amigo que você não fala há meses. Propósito: Expanda o conceito de 'riqueza' para além do financeiro.",
                "Valorize seu Tempo Livre: Prosperidade inclui tempo. Ação: Use uma ferramenta de rastreamento para ver onde você realmente gasta seu tempo. Se você tem 2 horas livres, use a primeira hora para algo que te nutre (ex: ler, exercitar-se) e a segunda para o que for necessário. Propósito: Faça com que seu tempo seja um ativo valioso, não um recurso jogado fora.",
                "Ação de Abundância: Seja a prosperidade que você quer atrair. Ação: Gaste 5 minutos planejando uma pequena 'generosidade' inesperada para alguém hoje. Exemplo: Pague o café do colega, deixe uma avaliação 5 estrelas para um pequeno negócio. Propósito: Mude sua mentalidade de escassez para abundância, praticando a doação."
            ]
        }
    ];

    // Combinações ajustadas para priorizar Maiores ou a interação Maior/Menor mais forte
    const COMBINACOES = [
        // Maiores / Maiores (Pesos Altos)
        { cartas: ["O Louco", "O Carro"], tema: "mudanca", peso: 2.2, descricao: "É a jornada para o desconhecido com um foco implacável. Saia da teoria: sua liberdade exige movimento e um destino claro. O universo aprova o seu primeiro passo." },
        { cartas: ["O Mago", "A Imperatriz"], tema: "prosperidade", peso: 3.0, descricao: "O poder da manifestação (Mago) encontra a fertilidade e a abundância (Imperatriz). Este é um período de criação material e grande fertilidade em projetos. Use sua vontade para nutrir o que está sendo plantado." },
        { cartas: ["A Imperatriz", "O Sol"], tema: "prosperidade", peso: 3.5, descricao: "A maior combinação de sucesso e abundância. Seus esforços florescerão em alegria, reconhecimento e vitalidade. A colheita é garantida. Celebre a vida em sua plenitude." },
        { cartas: ["A Morte (Transformação)", "A Roda da Fortuna"], tema: "mudanca", peso: 2.8, descricao: "O destino está a serviço da sua transformação. Um ciclo se encerra (Morte) para que a Roda gire a seu favor. Uma grande e inevitável mudança de vida está em curso, exigindo desapego total do passado." },
        
        // Maiores / Maiores (Pesos Médios)
        { cartas: ["O Louco", "O Eremita"], tema: "foco", peso: 1.8, descricao: "Liberdade vem do autoconhecimento. Sua busca por autenticidade exige um período de isolamento e reflexão, onde você deve encontrar a verdade de seus próprios pés, sem influências externas." },
        { cartas: ["O Mago", "O Diabo"], tema: "foco", peso: 1.6, descricao: "Seu poder de criação está sendo desviado por paixões ou materialismo. Seus talentos estão ligados por correntes de ambição ou vícios. Use a disciplina para canalizar a energia criativa e não a ganância." },
        { cartas: ["A Papisa", "A Justiça"], tema: "foco", peso: 2.0, descricao: "A sabedoria intuitiva deve ser aplicada com clareza e racionalidade. O momento exige introspecção profunda para julgar a situação de forma imparcial. A verdade está no silêncio e na lei moral." },
        { cartas: ["O Hierofante", "A Temperança"], tema: "mudanca", peso: 1.9, descricao: "A tradição e a sabedoria ancestral te pedem moderação. Para passar para o próximo nível (Hierofante), você precisa equilibrar seus extremos e agir com paciência, seguindo os ritos corretos de transição." },
        { cartas: ["O Imperador", "A Torre"], tema: "mudanca", peso: 2.5, descricao: "Estruturas rígidas e teimosia estão prestes a entrar em colapso. O controle excessivo do Imperador será quebrado pela crise da Torre. A mudança é abrupta, mas necessária para reconstruir em bases mais humanas." },
        { cartas: ["Os Amantes", "O Mundo"], tema: "amor", peso: 2.7, descricao: "O dilema de Os Amantes chega à conclusão harmoniosa do Mundo. Você está pronto(a) para celebrar a união e a totalidade. A escolha final leva à realização plena e à celebração do amor maduro." },
        { cartas: ["A Força", "O Pendurado"], tema: "amor", peso: 1.7, descricao: "O amor (ou a paixão) exige um sacrifício de ego. Sua força interior deve ser usada para praticar a rendição e a paciência. Você precisa dominar o impulso, não a si mesmo, para ganhar a nova perspectiva." },
        { cartas: ["A Morte (Transformação)", "A Lua"], tema: "foco", peso: 1.6, descricao: "A transformação (Morte) está sendo impedida por medos e ilusões do inconsciente (Lua). É preciso confrontar o que está oculto e iluminar suas sombras para que o processo de renovação possa acontecer." },
        { cartas: ["A Estrela", "O Julgamento"], tema: "amor", peso: 2.3, descricao: "O perdão e a renovação de propósito são abençoados pela esperança cósmica. O julgamento convida ao auto-perdão; a Estrela garante que o futuro é de cura. Avance com fé no seu renascimento." },

        // Maiores / Menores (Pesos Médios a Baixos)
        { cartas: ["O Sol", "Rei de Ouros"], tema: "prosperidade", peso: 2.1, descricao: "O sucesso radiante (Sol) encontra a estabilidade material do Rei. A combinação garante sucesso financeiro, segurança e a oportunidade de construir um legado." },
        { cartas: ["A Lua", "Três de Espadas"], tema: "amor", peso: 1.5, descricao: "As ilusões e os medos (Lua) estão ligados a uma dor emocional (Três de Espadas). É preciso atravessar o luto para ver a verdade da situação e curar a alma."},
        { cartas: ["A Torre", "Dez de Paus"], tema: "mudanca", peso: 1.7, descricao: "A crise abrupta (Torre) é o resultado do excesso de responsabilidade e sobrecarga (Dez de Paus). A queda é necessária para que você possa aliviar o fardo e reconstruir de forma mais leve."},
        { cartas: ["O Mago", "Ás de Paus"], tema: "foco", peso: 1.8, descricao: "A manifestação (Mago) recebe a energia inicial e o entusiasmo (Ás de Paus). Concentre todo o seu poder de vontade na nova ideia; este é o momento da criação."}
    ];

    let cartasDaTiragem = [];

    function embaralhar(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    window.realizarTiragem = function() {
        const numCartas = parseInt(document.getElementById('numCartas').value);
        const pergunta = document.getElementById('perguntaUsuario').value.trim();
        const resultadoDiv = document.getElementById('resultado');

        if (pergunta.length < 5) {
            alert("Por favor, digite sua pergunta (mínimo de 5 caracteres) para que o oráculo possa se focar!");
            document.getElementById('perguntaUsuario').focus();
            return; 
        }

        resultadoDiv.innerHTML = '';
        const btnTirar = document.querySelector('button[onclick="window.realizarTiragem()"]');
        btnTirar.disabled = true;

        const cartasEmbaralhadas = embaralhar([...cartasDoTarot]);
        cartasDaTiragem = cartasEmbaralhadas.slice(0, numCartas).map((carta, index) => {
            // Removemos a linha 'const invertida = Math.random() < 0.3;'
            const nomeCorrigido = carta.nome.replace(' (Transformação)', ''); 
            
            return {
                ...carta,
                nome: nomeCorrigido,
                invertida: false, // <-- Sempre falso (Normal)
                // Adiciona um flag para identificar Arcanos Maiores
                ehMaior: cartasDoTarot.findIndex(c => c.nome === carta.nome) < 22 
            };
        });
        cartasDaTiragem.forEach((carta, index) => {
        exibirCarta(carta, numCartas); // CHAMA A FUNÇÃO IMEDIATAMENTE
    });

    // Chamada imediata do conselho final e reativação do botão (no final)
    gerarConselhoFinal();
    btnTirar.disabled = false;
}
    
function exibirCarta(carta, totalCartas) {
    const resultadoDiv = document.getElementById('resultado');

    // 1. O CONTAINER PRINCIPAL, que adiciona o evento de virada
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    cardContainer.onclick = function() {
        // Ação de virar a carta ao clique
        cardContainer.classList.toggle('is-flipped');
    };

    // 2. O INNER (Elemento que gira)
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';

 // O BLOCO NOVO E CORRIGIDO QUE INSERE A IMAGEM:

// 3. A FRENTE DA CARTA (Onde fica a imagem)
const cardFront = document.createElement('div');
cardFront.className = 'card-face card-front';
// ADICIONE ESTE NOVO BLOCO ABAIXO:
const clickHint = document.createElement('div');
clickHint.className = 'click-hint';
clickHint.innerHTML = '<h2>CLIQUE</h2><p>para revelar</p>'; // HTML da dica
cardFront.appendChild(clickHint);
// Lógica de Imagem: Agora, todas as 78 cartas têm um URL
const imgCarta = document.createElement('img');
    
// Pega o URL da imagem no nosso mapa de URLs
imgCarta.src = urlsImagens[carta.id.toString()]; 
    
imgCarta.alt = `Imagem da carta ${carta.nome}`;
imgCarta.className = 'imagem-tarot'; 

cardFront.appendChild(imgCarta); // Adiciona a imagem

// 4. O VERSO DA CARTA (Onde fica o significado)
const cardBack = document.createElement('div');
cardBack.className = 'card-face card-back';
    
// Conteúdo do Verso: Nome
const h2Back = document.createElement('h2');
h2Back.textContent = carta.nome; // Nome da carta
    
// NOVO BLOCO: Estrutura para exibir todos os significados
const divSignificado = document.createElement('div');
divSignificado.className = 'significado-container'; // Nova classe para estilização

divSignificado.innerHTML = `
    
    <p class="palavra-chave">${carta.palavra_chave}</p>
    
  
    <p class="mensagem-principal">${carta.mensagem_central}</p>

    <h4 class="subtitulo-significado">Amor/Relações:</h4>
    <p>${carta.amor_relacionamentos}</p>
    
    <h4 class="subtitulo-significado">Carreira/Finanças:</h4>
    <p>${carta.carreira_financas}</p>
    
    <p class="frase-impacto">
        "**${carta.frase_impacto}**"
    </p>
`;
// FIM DO NOVO BLOCO

cardBack.appendChild(h2Back);
cardBack.appendChild(divSignificado); // Agora adicionamos o DIV com todo o conteúdo.

// MONTAGEM FINAL
cardInner.appendChild(cardFront);
cardInner.appendChild(cardBack);
cardContainer.appendChild(cardInner);
resultadoDiv.appendChild(cardContainer);
} // <--- Fechamento da função (garanta que está no lugar certo!)
    
    function encontrarTemaCentral() {
        let pontuacoesTema = {};
        let cartasNaTiragem = cartasDaTiragem.map(c => c.nome);

        // 1. Pontuação base por combinação (maiores e mistas)
        for (const combinacao of COMBINACOES) {
            const cartasCombinacaoLimpa = combinacao.cartas.map(c => c.replace(' (Transformação)', ''));
            if (cartasCombinacaoLimpa.every(c => cartasNaTiragem.includes(c.replace(' (Transformação)', '')))) {
                const tema = combinacao.tema;
                pontuacoesTema[tema] = (pontuacoesTema[tema] || 0) + combinacao.peso;
            }
        }

        // 2. Pontuação por Arcano Maior individual (pesos altos)
        const pesosFortesMaiores = {
            "O Sol": 2.5, "A Imperatriz": 2.0, "Os Amantes": 2.0, "O Imperador": 1.8, "A Morte": 1.5, "A Torre": 1.5, "O Diabo": 1.5
        };

        cartasNaTiragem.forEach(nomeCarta => {
            const nomePuro = nomeCarta.replace(' (Transformação)', '');
            if (pesosFortesMaiores[nomePuro]) {
                let temaEstimado = 'mudanca'; 
                if (nomePuro === 'O Sol' || nomePuro === 'A Imperatriz') temaEstimado = 'prosperidade';
                if (nomePuro === 'Os Amantes' || nomePuro === 'A Estrela') temaEstimado = 'amor';
                if (nomePuro === 'O Eremita' || nomePuro === 'A Justiça') temaEstimado = 'foco';
                
                pontuacoesTema[temaEstimado] = (pontuacoesTema[temaEstimado] || 0) + pesosFortesMaiores[nomePuro];
            }
        });

        // 3. Pontuação dos Menores (Tendências)
        cartasNaTiragem.forEach(nomeCarta => {
            if (nomeCarta.includes('Copas')) pontuacoesTema['amor'] = (pontuacoesTema['amor'] || 0) + 0.5;
            if (nomeCarta.includes('Espadas')) pontuacoesTema['foco'] = (pontuacoesTema['foco'] || 0) + 0.5;
            if (nomeCarta.includes('Ouros')) pontuacoesTema['prosperidade'] = (pontuacoesTema['prosperidade'] || 0) + 0.5;
            if (nomeCarta.includes('Paus')) pontuacoesTema['mudanca'] = (pontuacoesTema['mudanca'] || 0) + 0.5;
        });
        
        let temaCentralId = 'foco'; 
        let maxPontuacao = 0;

        for (const [tema, pontuacao] of Object.entries(pontuacoesTema)) {
            if (pontuacao > maxPontuacao) {
                maxPontuacao = pontuacao;
                temaCentralId = tema;
            }
        }

        return TEMAS.find(t => t.id === temaCentralId) || TEMAS[0];
    }

    function gerarConselhoFinal() {
        const resultadoDiv = document.getElementById('resultado');
        const temaCentral = encontrarTemaCentral();
        let combinacaoFinal = null;

        // ⬇️ CÓDIGO CORRIGIDO E MELHORADO PARA SELECIONAR A COMBINAÇÃO ⬇️
let cartasNaTiragem = cartasDaTiragem.map(c => c.nome.replace(' (Transformação)', ''));

let combinacoesEncontradas = [];

// 1. Encontra TODAS as combinações válidas na tiragem
for (const combinacao of COMBINACOES) {
    const cartasCombinacaoLimpa = combinacao.cartas.map(c => c.replace(' (Transformação)', ''));
    
    // Verifica se as cartas da combinação estão na tiragem
    if (cartasCombinacaoLimpa.every(c => cartasNaTiragem.includes(c))) {
        combinacoesEncontradas.push(combinacao);
    }
}

// 2. Se houver combinações, aplica a prioridade
if (combinacoesEncontradas.length > 0) {
    
    // Tenta primeiro encontrar a melhor combinação alinhada ao Tema Central
    const combinacoesTema = combinacoesEncontradas.filter(c => c.tema === temaCentral.id);
    
    if (combinacoesTema.length > 0) {
        // Pega a de maior peso que ALINHA com o Tema Central
        combinacaoFinal = combinacoesTema.reduce((melhor, atual) => {
            return (atual.peso > (melhor ? melhor.peso : 0)) ? atual : melhor;
        }, null);
    } else {
        // Se não houver alinhamento com o tema central, pega a de maior peso geral
        combinacaoFinal = combinacoesEncontradas.reduce((melhor, atual) => {
            return (atual.peso > (melhor ? melhor.peso : 0)) ? atual : melhor;
        }, null);
    }
}
// ⬆️ FIM DO CÓDIGO CORRIGIDO E MELHORADO ⬆️
let cartaMaisForte = null;
let maxPesoIndividual = -1; 

cartasDaTiragem.forEach(carta => {
    // Encontra o peso real (Arcanos Maiores são mais pesados)
    const pesoAtual = carta.ehMaior ? 1.5 : 0.5; 
    
    if (pesoAtual > maxPesoIndividual) {
        maxPesoIndividual = pesoAtual;
        // Busca a base da carta no array global para obter a frase de impacto
        cartaMaisForte = cartasDoTarot.find(c => c.nome.replace(' (Transformação)', '') === carta.nome.replace(' (Transformação)', ''));
    }
});

        const conselhoDiv = document.createElement('div');
        conselhoDiv.className = 'conselho-final';

        const ulConselhos = temaCentral.conselhos.map(c => `<li>${c}</li>`).join('');
        
       // ⬇️ NOVO BLOCO DO HTML FINAL (SABEDORIA DO ORÁCULO) ⬇️
    const nomeCarta1 = combinacaoFinal ? `<span class="carta-nome">${combinacaoFinal.cartas[0].replace(' (Transformação)', '')}</span>` : '';
    const nomeCarta2 = combinacaoFinal ? `<span class="carta-nome">${combinacaoFinal.cartas[1].replace(' (Transformação)', '')}</span>` : '';
    
    let mensagemAlternativa = '';
    
    // ⬇️ TRECHO CORRIGIDO: REMOVENDO A INTRODUÇÃO ⬇️
    // Se não houver combinação forte, usa a Frase de Impacto da carta mais influente
    if (!combinacaoFinal && cartaMaisForte) {
        // Agora exibe apenas o título "SABEDORIA DO ORÁCULO" e a frase de impacto da carta.
        mensagemAlternativa = `<p class="combinacao-forcas">SABEDORIA DO ORÁCULO: <span style="font-style: italic; color: var(--cor-secundaria);">"**${cartaMaisForte.frase_impacto}**"</span></p>`;
    } else if (!combinacaoFinal) {
        // Mensagem padrão caso a tiragem seja muito fraca
        mensagemAlternativa = '<p class="combinacao-forcas">SABEDORIA DO ORÁCULO: A leitura foca nos detalhes práticos. A solução reside em pequenos passos e autocontrole, não em grandes viradas.</p>';
    }

    const pCombinacao = combinacaoFinal 
        ? `<p class="combinacao-forcas">SABEDORIA DO ORÁCULO: A união de ${nomeCarta1} e ${nomeCarta2} indica: <span style="font-style: italic; color: var(--cor-secundaria);">${combinacaoFinal.descricao}</span></p>`
        : mensagemAlternativa;
    // ⬆️ FIM DO NOVO BLOCO DO HTML FINAL ⬆️

        conselhoDiv.innerHTML = `
            <h3>A GRANDE MENSAGEM: ${temaCentral.titulo.toUpperCase()}</h3>
            <p style="margin-bottom: 20px;">
                <span style="font-weight:600; color: var(--cor-secundaria);">O Sentido Profundo:</span> ${temaCentral.significado_central}
            </p>
            <ul>${ulConselhos}</ul>
            ${pCombinacao}
            
            <p class="conclusao-solene">Que este oráculo ilumine seu caminho, dando-lhe a sabedoria e a coragem de agir conforme a SUA realidade.</p>
        `;

        resultadoDiv.appendChild(conselhoDiv);
    }
  document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('numCartas').value = '3';
    });
