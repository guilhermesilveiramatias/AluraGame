let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemVida;
let imagemGameOver;
let imagemTelaInicial;
let fonteTelaInicial;

let fita = [];



let cenario;
let somDoJogo;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

//let inimigoAtual = 0;


let btnAudio;
let somDoPulo;

let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let botaoGerenciador;
let vida;




const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],

  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],

  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],

  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],

  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],

  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],

  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
  // [0,100],
  // [104, 100],
  // [208, 100],
  // [312, 100],

  // [0, 200],
  // [104, 200],
  // [208, 200],
  // [312, 208],

  // [0,300],
  // [104, 300],
  // [208, 300],
  // [312, 300],

  // [0,400],
  // [104, 400],
  // [208, 400],
  // [312, 400],

  // [0,500],
  // [104, 500],
  // [208, 500],
  // [312, 500],

  // [0,600],
  // [104, 600],
  // [208, 600],
  // [312, 600],
];

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810]
];

const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]


const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
  [200, 750],
  [400, 750],
  [0, 900]
];

const inimigos = [];