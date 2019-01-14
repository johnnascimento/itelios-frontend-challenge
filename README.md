![Itelios](http://www.itelios.com.br/images/logo_itelios_orange@2x.png)

# Itelios Frontend Challenge

Bem-vindo ao desafio de admissão de front-end da Itelios! O que preparamos para este desafio é um pedacinho do que você irá fazer aqui na Itelios, caso seja admitido.

O objetivo do desafio é simples: Consumir uma json via xhttp e, com o resultado dele, montar um widget de prateleira de cross-sell. Na resposta deste request você receberá uma lista de produtos. Esta lista servirá para montar um pequeno carrossel de produtos. 

## Como realizar o teste

- Faça um fork deste repositório em seu GitHub
- Execute o arquivo index.html

## Funcionalidades

- Tentei utilizar apenas javascript, html e css para a criação desse pequeno Widget;
- Realizei o tratamento dos dados extraídos do objeto fornecido, utlizando métdo XMLHttpRequest e seus atributs;
- Para o tratamento do texto do corpo de cada item da prateleira, foi criada uma funcão que determina a quantidade de caracters permitidos, neste tem, na prateleira;
- Para a inclusão do texto no corpo do HTML, foram criadas duas funções:
  - A primeira função é responsável por tratar todos os dados que serão inseridos no item "escolhido" pelo cliente. A inclusão foi feita através da utilização de duas funções "truncatingString() e splitString()", que são chamadas dentro da função "buildBlock()";
    - A função truncatingString() é reponsável por limitar a quantidade de caracteres a serem exibidos na descrição dos produtos;
    - A função splitStrng() é responsavel por desmembrar o valor do objeto "productInfo.paymentConditions", para possibilitar o tratamento da informação, posteriormente;
  A segunda função é responsável por exibir todos os "items recomendados". Para isso, foram utiliadas as duas funções já mencionadas, "splitString()" e "truncatingString()", mais um for Loop que é responsável por atribuir os valores na prateleira, de acordo com o index apresentado no ciclo do loop;
  - Para o carousel, utilizei um switch() que é responsável por realizar a transição entre os elementos;
  - Também foi utilizado css para a estilização e transição mais suave.
- Para determinar o estilo do slide e a transição, foram criadas duas variáveis --selected-item e --total-items.
 - --total-itens juntamente com o atributo "width: calc(var(--total-items) * 84%)", auxilia o layout para determinar a quantidade de itens que será apresentado ao mesmo tempo no slide ativo.
 - --selected-item juntamente com o atributo "left: calc(var(--selected-item) * -100%)" é o responsável por determinar a posição do elemento no eixo x. Juntamente com o switch() statemente, consigo realizar a transição com o js.
 - Também incluí o google material icon através da declaração ".material-icons.orange600...", porém tive dificuldade em editar o estilo do icone, juntamente com o restante do estilo ao redor desse elemento.
 - Infelizmente não utilizei media query para tratar os elementos e editar a forma como os mesmos serão apresentados em dispositivos móveis;
 
 Qualquer dúvida estarei a disposição!
 
 John Nascimento
