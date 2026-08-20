---
title: "Como eu aprendi Ruby on Rails em um mês e criei um web app do início ao fim"
date: 2013-09-15
slug: como-eu-aprendi-ruby-on-rails-em-um-mes-e-criei-um-web-app-do-inicio-ao-fim
language: pt
locale: pt_BR
source: jcfausto.com
original_url: "http://jcfausto.com/como-eu-aprendi-ruby-on-rails-em-um-mes-e-criei-um-web-app-do-inicio-ao-fim/"
archive_url: "https://web.archive.org/web/20130915111827/http://jcfausto.com/como-eu-aprendi-ruby-on-rails-em-um-mes-e-criei-um-web-app-do-inicio-ao-fim/"
recovered: true
redirect_from:
  - /como-eu-aprendi-ruby-on-rails-em-um-mes-e-criei-um-web-app-do-inicio-ao-fim/
---

[![Como eu aprendi ruby on rails em um mês e criei um web app do início ao fim](http://jcfausto.com/wp-content/uploads/2013/08/OneMonthRailsFeaturedImage.png)](http://jcfausto.com/como-eu-aprendi-ruby-on-rails-em-um-mes-e-criei-um-web-app-do-inicio-ao-fim/)

**Introdução**

Após tentar por algumas vezes aprender a desenvolver em ruby on rails e sempre ter encontrado dificuldades que me fizeram abandonar a iniciativa, fiquei intrigado e me perguntando se realmente é tão difícil assim aprender ruby on rails e criar algum aplicativo. É claro que a resposta estava na ponta da língua: É claro que não é, afinal, este framework é feito para facilitar e acelerar o desenvolvimento, então não deveria ser tão difícil assim aprendê-lo. A verdade é que eu não havia sido persistente o bastante ou não havia encontrado o caminho correto para o aprendizado.

Resolvi pesquisar um pouco mais a respeito do assunto e encontrei este curso chamado ”One Month Rails”, produzido por dois desenvolvedores web lá da Califórnia que resolveram desenvolver um curso cujo conteúdo fosse exatamente o que eles, como desenvolvedores ruby on rails, esperavam que um curso introdutório lhes ensinasse sobre esta linguagem.

Pois bem. Achei bacana a iniciativa, resolvi contribuir (o curso é pago) e de quebra eu desmistificaria o conceito que eu tenho de que aprender ruby on rails e fazer um aplicativo web é um bicho de sete cabeças.

Abaixo, relato a minha experiência durante o curso bem como vou demonstrando o que será construído. Este curso foi feito no período de 20/08/2013 a 31/08/2013 ( Bem menos que um mês ).

:pt***Teste a aplicação no****heroku**:* [http://vast-dawn-6062.herokuapp.com/](http://vast-dawn-6062.herokuapp.com/)

Gostou ? Contine lendo, pois há muita coisa legal por vir. Vou contando dia a dia o que fui aprendendo e construindo e no final faço algumas avaliações importantes.

**Dia 1  - Fazendo a inscrição no curso e dando os primeiros passos**

A inscrição no curso me custou USD 49,00, pagos via cartão de crédito. Logo em seguinda, iniciei os primeiros passos.

***O primeiro vídeo (~5min),*** faz uma breve apresentação sobre o curso e sobre o autor Mattan Griffel, que explica qual foi a motivação que os levou a fazê-lo.

Um detalhe legal é a respeito da plataforma utilizada para o curso, que é bem simples, mas muito adequada para este tipo de curso.

***O segundo vídeo (~4min),*** é o mesmo apresentado na página inicial do serviço. Então, este não agregou muito conhecimento. Levou cerca de 4 minutos para ser assistido.

***O terceiro vídeo (~5min),*** fala sobre um assunto que sempre é polêmico. Como escolher uma linguagem de programação para construir a sua aplicação web ? Para poder tornar mais clara a explicação, Mattan decompõe uma aplicação web em seus principais compnentes (front-end, back-end e banco de dados) e com base nessa decomposição, elabora um raciocínio sobre como escolher a linguagem adequada.

***O quarto vídeo (~6min)***, explica porque começar a programar com Ruby on Rails. Nele, Mattan fala um pouco mais a respeito das vantagens de começar utilizando Ruby on Rails, principalmente para quem não conhece muita coisa de programação. Fala também um pocou a respeito do jeito que aprendemos a aprender e como devemos mudar este jeito para que consigamos tornar as idéias em coias reais de forma mais rápida.

**Dia 2 – Por onde começar a aprender ruby on rails**

***O quinto vídeo (~4min),*** apresenta qual foi o caminho que Mattan tomou para aprender ruby on rails. O autor cita alguns websites com cursos e tutoriais que ele fez para poder aprender, e ao final, o mesmo conclui dizendo que nenhum dos tutoriais que fez realmente atendia a sua necessidade.

Foi baseado nesta necessidade, que Mattan montou o curso “One Month Rails”. Ele gostaria que esse curso representasse o primeiro mês de aprendizado em rails que ele gostaria de ter tido!

***O sexto vídeo (~2min),*** fala a respeito da aplicação web que será construída durante o curso. Ele demonstra o resultado final destacando alguns pontos importantes da ferramenta. Me pareceu um exemplo bem simples neste momento. Não sei quais conceitos e técnicas vamos utilizar para construir a aplicação ainda, mas espero que me dê condições de evoluí-la ou de construir outras.

***O sétimo vídeo(~15min),***inicia efetivamente a “mão na massa”. É nele que a coisa começa a ficar boa! Provavelmente você vai levar mais tempo do que o do vídeo pois, você vai passar por um dos primeiros desafios de um programador novato nesta área que é instalar com sucesso o ruby on rails (pode ser o céu ou o inferno. Torço para que no seu caso seja o céu, como foi no meu).

No vídeo é ensinado uma maneira bem prática de fazer a instalação. Mas caso você tenha problemas, o caminho será mais árduo. Mas nada de desanimar. Siga em frente. Eu tive sorte e consegui instalar da maneira mais fácil. Para quem não conseguiu fazer a instalação da forma fácil, há sugestões de outros tutoriais para fazer a instalação de forma mais manual. Além dos que já estão no curso, recomendo este: http://bit.ly/12Y3CFh.

***O oitavo*****vídeo(~49min),** começa a nos ensinar a construir a nossa aplicação. Há uma introdução sobre a estrutura de pastas do rails e também a respeito da utilização do [git](http://git-scm.com/) como controlador de versão para os seus arquivos e do [GitHub](https://github.com/) para armazená-los na nuvem.

**Dia 3 – Aprendendo a usar o heroku e fazendo o primeiro deploy**

Neste dia, continuei o tutorial do oitavo vídeo de onde havia parado e aprendi a mudar o “*README.md”* que server de explicação para o projeto no [GitHub](https://github.com/). Também aprendi a fazer o deploy, ou seja, colocar a aplicação web na internet através do [heroku](https://www.heroku.com/). Muito simples, fácil de fazer e rápido.

**O nono vídeo (~34min),** me ensinou a criar novas páginas para a nossa aplicação bem como a definir a página inicial além de criarmos também uma página “Sobre” para explicar o que é a aplicação. Neste vídeo também aprende-se a criar links entre páginas utilizando recuros importantes do rails como “helpers”, “layouts”, “views” e “partials”. Estes recursos disponiveis em diversas linguagens de programação, tornam a criação de páginas muito mais simples. Ao final deste nono vídeo, o resultado é o seguinte:

[![One Month Rails First Results Home Page](http://jcfausto.com/wp-content/uploads/2013/08/FirstResults_1.png)](http://jcfausto.com/wp-content/uploads/2013/08/FirstResults_1.png)

One Month Rails First Results Home Page

[![One Month Rails First Results About Page](http://jcfausto.com/wp-content/uploads/2013/08/FirstResults_2.png)](http://jcfausto.com/wp-content/uploads/2013/08/FirstResults_2.png)

One Month Rails First Results About Page

**Dia 4  - Melhorando a aparência da aplicação com o Twitter Bootstrap**

**O décimo vídeo(~27min)**, ensina a instalar e configurar um [“gem”](http://rubygems.org/) (bibliotecas de código do ruby) chamado ”[bootstrap-saas](https://github.com/thomas-mcdonald/bootstrap-sass)“ que servirá para melhorar a aparência da aplicação. Ao final do vídeo a aplicação está com esta aparência (está até [responsiva](http://pt.wikipedia.org/wiki/Web_Design_Responsivo)):

[![A aplicação com uma nova apresentação](http://jcfausto.com/wp-content/uploads/2013/08/Bootstrap.png)](http://jcfausto.com/wp-content/uploads/2013/08/Bootstrap.png)

A aplicação com uma nova apresentação

[![O layout agora é responsivo.](http://jcfausto.com/wp-content/uploads/2013/08/Bootstrap_responsive.png)](http://jcfausto.com/wp-content/uploads/2013/08/Bootstrap_responsive.png)

O layout agora é responsivo.

Legal não ? Estou evoluindo.

**O décimo primeiro vídeo(~22min)**, me ensinou a criar o login e o registro de novos usuários para a aplicação utilizando outro “gem” chamado “[Devise](https://github.com/plataformatec/devise)” que inclusive foi feito por brasileiros. A instalação do “[devise](https://github.com/plataformatec/devise)” é bem simples e fácil. Ao final do vídeo, a aplicação já terá alguma funcionalidade tais como o registro de usuários, login e logout, edição de perfil do usuário e  controle do que pode ser visto por quem não está autenticado (“logado”) no sistema.

**O décimo segundo vídeo(~21min)**, dá continuidade na implementação do sistema de registro e login, customizando os formulários de login e registro com mais um “gem” interessante, o “[simple_form](https://github.com/plataformatec/simple_form)“, criado pelo mesmo time do devise. Com ele foi possível deixar os formulários da aplicação mais amigáveis em termos de interface com o usuário e auxiliou na redução da quantidade de código nos formulários. Com isso, ao final deste vídeo tenho um aplicativo com login e registro prontos!

Os dois últimos vídeos devem ser feitos com bastante atenção, pois cada passo é importante e se falhar em algum deles você terá problemas.

**Dia 5 – Adicionando mais funcionalidade na aplicação**

**O décimo terceiro vídeo(~22min),** ensinou a criar o conceito de “Pin” que será a base para o restante da funcionalidade da aplicação que se parecerá ao final com o “[Pinterest](http://pinterest.com)“. Aprendi o que significa “[scaffolding](http://en.wikipedia.org/wiki/Scaffold_(programming))” e como fazê-lo no rails para criar os modelos, controladores e visões necessárias para se ter o conceito de “Pin” dentro do sistema.

**O décimo quarto vídeo(~36min),** ensina a utilizar o console de comandos do rails (rails console) que é bem útil e fácil de usar. Após, passamos a criar mais funcionalidade para a aplicação, fazendo a associação  dos pins aos usuários que os criaram, de forma que uns não possam editar ou excluir os pins dos outros. Neste ponto, o aplicativo já está ganhou forma e com esta aparência:

[![PinScaffolding](http://jcfausto.com/wp-content/uploads/2013/08/PinScaffolding.png)](http://jcfausto.com/wp-content/uploads/2013/08/PinScaffolding.png)

**Dia 6 – Fazendo com que os pins possam ter imagens**

**O décimo quinto vídeo(~24min),** ensina a fazer upload de imagens para a aplicação usando o “gem” “[PaperClip](https://github.com/thoughtbot/paperclip)“. Antes de utilizar o gem, é preciso instalar os pré-requisitos. Uma vez instalados, podemos utilizar o paperclip sem problemas. Agora a aplicação já é capaz de ter uma imagem associada a um pin e está ficando mais parecida com uma aplicação no estilo “[Pinterest](http://pinterest.com)“.

Ao final desta aula, nossa aplicação terá esta aparência:

[![Paperclip_Added](http://jcfausto.com/wp-content/uploads/2013/08/Paperclip_Added.png)](http://jcfausto.com/wp-content/uploads/2013/08/Paperclip_Added.png)

**Dia 7 – Adicionando estilo ao front-end com **JQuery Masonry e** Coffescript**

**O décimo sétimo vídeo(~30min)**, irá trabalhar o front-end da aplicação, adicionando estilo com o [JQuery Masonry (v2)](http://desandro.github.io/masonry/) e [Coffescript](http://coffeescript.org/). Ao final desta aula, teremos uma aplicação já quase finalizada e no estilo ”Pintrest” totalmente funcional. Legal! Não foi tão difícil!

[![JQuery Masonry Added](http://jcfausto.com/wp-content/uploads/2013/08/JQuery-Masonry-Added.png)](http://jcfausto.com/wp-content/uploads/2013/08/JQuery-Masonry-Added.png)

**O décimo oitavo vídeo(~12min)**, me ensinou a como fazer o upload das imagens para a o serviço [Amazon S3](http://aws.amazon.com/s3/). Isso será necessário porque o [Heroku](https://www.heroku.com/) não é um serviço de armazenamento de imagens, então, frequentemente ele elimina da sua base todas as imagens que foram carregadas por aplicações (em produção ou em teste). No meu caso, quero que as imagens uma vez inseridas, permaneçam na aplicação (na verdade eu vou reiniciar a base todo dia com um conjunto inicial de usuários e imagens, para evitar de esta aplicação se tornar um pinterest pessoal de alguém. ). Mas para chegar lá, precisaremos passar por algums pré-requisitos, entre eles, criar um conta na Amazon S3, utilizar o gem “[aws-sdk](http://docs.aws.amazon.com/AWSRubySDK/latest/frames.html)” que vai nos permitir conectar a aplicação com o serviço Amazon, entre outros. O vídeo do curso explica tudo direitinho,  embora em algumas partes você precise parar e ler a instruções com mais calma, principalmente, quando você se criando as suas chaves de acesso na Amazon. Eu sugiro assistir ao vídeo abaixo para aprender um pouco mais antes de prosseguir:

Após concluir esta etapa mais “pesada” de configuração na Amazon, o restante fica fácil e é bem explicado no vídeo.

**O décimo nono vídeo(~8min),** me ensinou a adicionar a capacidade de fazer o upload de uma imagem diretamente da web através de uma URL, e não somente imagens do disco. Bem fácil e rápido de fazer. Levou cerca de 15 minutos para fazer o vídeo, porque você precisa modificar algumas partes do código e fazer todo o processo de commit e push para o github e heroku.

**O vigésimo vídeo(~12min),** ensina a como utilizar um “gem” chamado ”[Faker](http://faker.rubyforge.org/)” para reinicializar a aplicação e já populá-la com dados para que não seja preciso a todo momento em que é preciso reiniciar a base de dados, incluir manualmente novos registros. Também aprendi a criar uma tarafa ”Rake”, para ser executada via linha de comando. Algo como o “rake db:migrate”. Falta um pouco de informação na minha opinião, porque aqui você faz um bocado de programação usando a linguagem ruby e algumas construções e recursos da linguagem poderiam ter sido melhor explicadas. Mas dá para chegar ao resultado final tranquilamente.

**O vigésimo primeiro vídeo(~5min)**, me ensinou a paginar os resultados da página principal para que a lista de pins não fique muito longa. Para isso, aprendi a utilizar o “gem” “[will_paginate](https://github.com/mislav/will_paginate/wiki)“. Ao final, temos paginação na aplicação. É bem fácil colocar para funcionar este ”gem”.

**O vigésimo segundo vídeo(~8min)**, me ensinou a criar uma página pessoal para os usúarios da aplicação onde será possível ver somente os seus pins. Para isso, foi necessário fazer algumas pequenas modificações no código fonte. Aqui novamente fiquei com sensação de que o pouco de código que foi feito exige um bom conhecimento. Por exemplo: Foram modificadas as rotas com adição de parâmetros inexplicados e isso me deixou intrigado, pois não sei para que serve aquele parâmetro extra. Mas, dá para concluir a tarefa sem saber detalhes.

**O vigésimo terceiro vídeo(~4min),** é uma espécie de ”bonus”, e ensinou a criar um “scroll sem fim”, ou seja, não será preciso clicar no paginador para mudar de página. Ele irá sair de cena, e ao chegar ao final da página com o scroll, mais imagens serão apresentadas. Um efeito muito comum em aplicativos hoje em dia mas com uma certa complexidade para ser implementado. Para fazê-lo, foi necessário usar JQuery, CoffeScript e JavaScript além de modificar algumas partes da aplicação. A lição leva bem mais que 4 minutos porque é preciso ter muita atenção e entender o que se está fazendo. Ao final, se chega ao resultado esperado, mas fica um bocado de código sem explicação que depois terá que ser estudado para saber realmente como tudo funciona.

**O vigésimo quarto vídeo(~7min)**, trata-se de um vídeo de despedida. Chegamos ao fim do projeto, com a nossa aplicação funcional e disponível na intenet!

[![FinalApp](http://jcfausto.com/wp-content/uploads/2013/08/FinalApp-1024x705.png)](http://jcfausto.com/wp-content/uploads/2013/08/FinalApp.png)

**Teste a aplicação no heroku:[ http://vast-dawn-6062.herokuapp.com/]( http://vast-dawn-6062.herokuapp.com/)**[http://vast-dawn-6062.herokuapp.com/]( http://vast-dawn-6062.herokuapp.com/)

*OBS: Pode ocorrer de demorar um pouco para carregar a aplicação, pois quando ela fica sem acesso por um período o heroku a desabilita, e quando acessada novamente ele leva um tempinho para carragá-la.*

**Código fonte da aplicação:** [https://github.com/jcfausto/omrails](https://github.com/jcfausto/omrails)

**Avaliação do curso**

**Qualidade dos vídeos:** É boa. Em alguns vídeos que exigem um pouco mais de codificação, seria interassante se houvesse pausas para dar tempo de digitar e não perder a próxima instrução.

**Plataforma do curso:** Bem bacana. Feita especificamente para o curso pelo próprio Mattan. É bem simples e efetiva.

*Dica:* Sempre leia a seção “Lecture”. Há sempre alguma coisa alí que é importante para ter sucesso ao final da lição.

**Suporte:** O suporte não é muito bom, porque é feito pela própria comunidade de alunos, e geralmente a maioria é iniciante, então há uma certa dificuldade. O Google ajuda muito, mas também o autor responde a algumas questões. Acho que este ponto poderia ser melhorado.

**Tempo do curso:**São cerca de 6h de vídeo se você for assistir um atrás do outro. No meu caso, considerando o tempo necessário para fazer as tarefas com calma, foram necessárias cerca de 12h espalhadas entre um período de 11 dias para concluir o curso.

**Minhas recomendações para quem pretende fazer o curso também**

- Aprenda o básico sobre HTML e CSS (se você já não sabe). Eu sugiro estes como um ponto de partida.

- [http://www.codecademy.com/tracks/web](http://www.codecademy.com/tracks/web)
- [http://www.webmonkey.com/2010/02/html_cheatsheet/](http://www.webmonkey.com/2010/02/html_cheatsheet/)
- [http://www.simplehtmlguide.com/](http://www.simplehtmlguide.com/)

- Instale as versões recomendadas no curso, caso contrário você poderá enfrentar dificuldades. Uma versão diferente do JQuery Masonry por exemplo, pode lhe trazer complicações.

**Pergunda final: Você recomendaria este curso ?**

- Sim. Eu recomendo, desde que a sua pretensão seja apenas iniciar o aprendizado. Se você quer algo mais avançado, este curso não seria o mais adequado.

  /post-entry-content 
 /post-entry-footer 

 /post-entry-text
