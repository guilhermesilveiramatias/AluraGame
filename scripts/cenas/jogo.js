class Jogo {
    constructor() {
        this.indice = 0;

        this.mapa = fita.mapa;  //  é um json

        // cada linha será um inimgo, um ponto, etc

    }


    setup() {
        cenario = new Cenario(imagemCenario, 4);
        pontuacao = new Pontuacao()
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
        //personagem = new Personagem(imagemPersonagem);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);


        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);

    }


    keyPressed(key) {
        if (key === 'ArrowUp') {
            if (personagem.pula())
                somDoPulo.play();
        }

    }

    

    draw() {
        //a ordem definirá o que está atras ou na frente.. começa do fundo vindo para frente.
        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();


        vida.draw();

        if (keyIsPressed)
        {
            if (key === "ArrowRight") {
                personagem.moverParaFrente();
            }
            if (key === "ArrowLeft") {
                personagem.moverParaTras();
            }
        };

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura;
        inimigo.velocidade = linhaAtual.velocidade;//random(10, 30);


        //inimigos.forEach(inimigo => {
        //console.log(inimigo);
        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();

            if (this.indice > this.mapa.length - 1) {
                 
            }

        }

        //#region Descontinuado
        // inimigoGrande.exibe();
        // inimigoGrande.move();

        // inimigo.exibe();
        // inimigo.move(); 

        // inimigoVoador.exibe();
        // inimigoVoador.move(); 
        //background(220);  //  definindo cor.  
        // Define a posição x, y e o raio.
        //circle(windowWidth / 2, (windowHeight / 2), 300)
        //circle(mouseX, mouseY, 70);
        //console.log('inimigos');
        //console.log(inimigos);

        //#endregion




        if (personagem.estaColidindo(inimigo)) {
            //console.log('colidiu');
            
            vida.perdeVida();
            personagem.tornarInvencivel();

            if (vida.vidas === 0)
            {                
                vida.draw()
                image(imagemGameOver, width / 2 - 200, height / 3);
                noLoop(); // interrompe a execução da renderização.
            }
            
        }

        //})


    }
}