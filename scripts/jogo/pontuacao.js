class Pontuacao{
    constructor() {
        this.pontos = 0;

    }

    exibe(){
        // exibir uma pontuação na tela.
        textAlign(RIGHT);
        textSize(50);
        fill('#fff');
        text(parseInt(this.pontos),  width - 30, 50);

    }

    adicionarPonto(){
        this.pontos+= 0.2;
    }

}