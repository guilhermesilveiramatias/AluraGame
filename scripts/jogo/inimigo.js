class Inimigo extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
        //this.delay = delay;
        this.x = width; //+ this.delay;
    }


    move(){
        this.x = this.x - this.velocidade; //  determina a velocidade do inimigo.

        // if (this.x < - this.largura){
        //     this.x = width;
        // }
    }

    aparece() {
        this.x = width;
    }
}