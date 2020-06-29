
class Cenario{
  // o construtor vai definir tudo o que é necessário para criar uma imagem
  
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  
  
  exibe(){
      image(imagemCenario, this.x1, 0, width, height);
      image(imagemCenario, this.x2, 0, width, height);    
}
  // aqui movimentaremos o background.
  move(){
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;
    
    
    // Preparando para a volta do background para o início.
    if (this.x1 < -width)
    {
      this.x1 = width;
    }
    
    if (this.x2 < -width)
    {
      this.x2 = width;
    }
    
    
  }
}
