class Personagem extends Animacao{
 constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
   super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY; //  -30 irá "subir" o chão.
    this.y = this.yInicial;
    this.gravidade = 3;
    this.velocidaeDoPulo = 0
    this.pulos = 0;
    this.alturaDoPulo = -30;
    this.invencivel = false;


//#region "DESCONTINUADO"
 //this.imagem = imagem;
  //  this.matriz = [
  //      [0, 0],
  //      [220, 0],
  //      [440, 0],
  //      [660, 0],
  //      [0, 270],
  //      [220, 270],
  //      [440, 270],
  //      [660, 270],     
  //       [0, 540],
  //      [220, 540],
  //      [440, 540],
  //      [660, 540],     
  //       [0, 810],
  //      [220, 810],
  //      [440, 810],
  //      [660, 810]
  //     ]
   
   //this.frameAtual = 0;


//#endregion 
 }
  
  // exibe(){
  //   image(this.imagem, 0, height - 135, 110, 135,this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270 ); // Imagem, local x e y, proporções e posição do sprite (dentro da imagem, item 0) e quantos pixels serão lidos dessa imagem        
  //   this.anima();
  // }
      
  // aqui não é movimentação e sim uma transição que ocorre.
  
  pula(){
    if (this.pulos < 2)
    {
      this.velocidaeDoPulo = this.alturaDoPulo;
      this.pulos++
      return true;  //  pulou
    }
    return false;
  }

  aplicaGravidade(){
    this.y += this.velocidaeDoPulo;
    this.velocidaeDoPulo += this.gravidade;

    if (this.y > this.yInicial){
      this.y = this.yInicial;
      // chegou no chão 
      this.pulos = 0; //  zera o pulo
    }
  }
  
  moverParaFrente()
  {
    if ( this.x <= windowWidth - 120){
      this.x += 15;
    }
  }

  moverParaTras(){
    if (this.x >= 0){
      this.x -= 15;
    }
  }

  tornarInvencivel(){
    this.invencivel = true;
    setTimeout( () => {
      this.invencivel = false
      }, 1000 );
  }

  estaColidindo(inimigo){
    if (this.invencivel){
      return false;
    }

    // hit box... melhorando a precisão das colisõesp5.BandPass()
    const precisao = .7;
    //noFill(); // serve para não preencher o retangulo construido abaixo.
    //rect(this.x, this.y, this.largura, this.altura);// serve para ver o ponto da colisão.
    const colisao =  collideRectRect(this.x, 
                      this.y, 
                      this.largura * precisao, 
                      this.altura * precisao,
                      inimigo.x,
                      inimigo.y,
                      inimigo.largura * precisao ,
                      inimigo.altura * precisao);
      return colisao;
  }
  
}