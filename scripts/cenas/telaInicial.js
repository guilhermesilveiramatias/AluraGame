class TelaInicial {
    cosntructor(){

    }

    draw(){
        this._imagemDeFundo();
        this._texto();
        this._botao();

    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto(){           
        textFont(fonteTelaInicial);
        textSize(50);
        textAlign(CENTER);
        text('As aventuras de', width / 2, height / 3 - 80);
        textSize(100);
        text(' Hipsta', width / 2, height / 3)
    }

    _botao(){
        botaoGerenciador.y = height / 7 * 5;    
        botaoGerenciador.draw();        

    }
}