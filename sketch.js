/* Botão para ligar o som (descontinuado) */
// btnAudio = document.querySelector("#btnAudio");
// btnAudio.addEventListener("click", ligaSom);



// A função setup é chamada apenas uma vez. Usada para configurar.
function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(40); // definindo o frame rate. 

  // devido uma diretiva do chrome, eu não posso iniciar o som sem interação do usuário.
  //windowHeight: altura da janela.
  //height: altura do canvas

  // chamando a "cena" do jogo propriamente dito.(Cada fase é uma cena)
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,   // jogo:jogo
    telaInicial
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
  
}



// captura eventos do mouse e teclado (fica escutando)
function keyPressed() {
  jogo.keyPressed(key);
}

function ligaSom() {
  if (!somDoJogo.isPlaying()) {
    somDoJogo.loop();
  }
  else {
    somDoJogo.pause();
  }
}

// A função draw é gerada várias vezes. Usada para desenhar e animar um objeto.
function draw() {
  

  cenas[cenaAtual].draw();
  //cenas['telaInicial'].draw();
  //console.log(cenas[telaInicial]);
}

