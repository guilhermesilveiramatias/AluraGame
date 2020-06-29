class Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        this.matriz = matriz;
        this.imagem = imagem;
        // tamanho que vai aparecer na tela
        this.largura = largura;
        this.altura = altura;

        // posicionamento da imagem 
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = height - this.altura - this.variacaoY;

        // tamanho de cada imagem na sprite
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frameAtual = 0;
    }


    exibe() {
        // desenhando o objeto
        image(this.imagem,
            this.x,
            this.y,
            this.largura,
            this.altura,
            this.matriz[this.frameAtual][0],
            this.matriz[this.frameAtual][1],
            this.larguraSprite,
            this.alturaSprite);

        this.anima();
    }


    // efeito de animação
    anima() {
        this.frameAtual++;

        if (this.frameAtual >= this.matriz.length - 1) {
            this.frameAtual = 0;
        }
    }
}