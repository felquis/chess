var chess = new Chess();

/*
    Monta o tabuleiro colocando cada peça em seu devido lugar
*/
(function () {
    // Letras do tabuleiro
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    // Dicionário de abreviações da lib Chess.js
        dictionary = {
            r: 'rook',
            p: 'pawn',
            n: 'knight',
            b: 'bishop',
            k: 'king',
            q: 'queen',
            cw: 'white',
            cb: 'black'
        },
        number = 8,
        documentFragment = document.createDocumentFragment(),
        piecesWrapper = document.querySelector('.pieces'),
        temporaryElement,
        temporarySquare;

    /*
        Cada letra representa uma posição no tabuleiro, e cada letra tem numeros de 1 a 8
        No forEach, faço um while de 8 a 1, que pega a posição de cada square do tabuleiro
        "Casa a de 1 a 8", "Casa b de 1 a 8", "Casa c de 1 a 8" e assim até preencher todo
        o tabuleiro
    */
    letters.forEach(function (letter) {
        while (number) {

            // Aqui crio cada peça do tabuleiro, com referência ao tabuleiro da lib Chess.js
            temporarySquare = chess.get(letter + number);

            if (temporarySquare) {
                temporaryElement = document.createElement('i');
                // Coloca as classes para estilizar a peça corretamente
                temporaryElement.classList.add(
                                    'piece',
                                    dictionary[temporarySquare.type],
                                    dictionary['c' + temporarySquare.color],
                                    letter + '-' + number
                                );
                // Salva a posição da peça para ser usada por script posteriormente
                temporaryElement.dataset.position = letter + '-' + number;
            }

            // Coloca a peça no fragment
            documentFragment.appendChild(temporaryElement);

            // Pega a peça da próxima casa do tabuleiro ;) Quase like a boss
            number = number - 1;
        }

        number = 8;
    });

    // Coloca todas as peças no DOM :)
    piecesWrapper.innerHTML = ''; // Não conheço um jeito mais elegante de retirar os elementos do DOM :/
    piecesWrapper.appendChild(documentFragment);
}(chess));