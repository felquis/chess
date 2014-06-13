var chess = new Chess();

var app = {};


// Letras do tabuleiro
app.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Dicionário de abreviações da lib Chess.js
app.dictionary = {
    r: 'rook',
    p: 'pawn',
    n: 'knight',
    b: 'bishop',
    k: 'king',
    q: 'queen',
    cw: 'white',
    cb: 'black'
};

/***
    Monta o tabuleiro colocando cada peça em seu devido lugar
***/
app.create = function () {
    var documentFragmentPieces = document.createDocumentFragment(),
        documentFragmentLines = document.createDocumentFragment(),
        piecesWrapper = document.createElement('span'),
        squaresWrapper = document.querySelector('.chessboard'),
        temporaryLine,
        temporarySquare,
        temporaryPiece,
        temporaryElement,
        line = 8,
        createCurrentLine = function (letter) {
            // `line` é uma variável que está no escopo do loop

            /*
                Cria a casa
            */
            temporarySquare = document.createElement('i');
            temporarySquare.classList.add('square');
            temporarySquare.dataset.position = letter + '-' + line;

            temporaryLine.appendChild(temporarySquare);


            /*
                Cria a peça nesta casa
            */
            temporaryPiece = chess.get(letter + line);

            if (temporaryPiece) {
                temporaryElement = document.createElement('i');
                // Coloca as classes para estilizar a peça corretamente
                temporaryElement.classList.add(
                                    'piece',
                                    app.dictionary[temporaryPiece.type],
                                    app.dictionary['c' + temporaryPiece.color],
                                    letter + '-' + line
                                );
                // Salva a posição da peça para ser usada por script posteriormente
                temporaryElement.dataset.position = letter + '-' + line;
            }

            // Coloca a peça no fragment
            documentFragmentPieces.appendChild(temporaryElement);
        };

    // Passa o loop em casa linha do tabuleiro, e dentro de cada linha passa um loop em casa letra
    while(line) {
        temporaryLine = document.createElement('span');
        temporaryLine.classList.add('line-square');

        app.letters.forEach(createCurrentLine);

        documentFragmentLines.appendChild(temporaryLine);

        line = line - 1;
    }

    // Coloca as casas no DOM
    squaresWrapper.innerHTML = '';
    squaresWrapper.appendChild(documentFragmentLines);

    // Coloca as peças no DOM
    piecesWrapper.classList.add('pieces');
    piecesWrapper.appendChild(documentFragmentPieces);
    squaresWrapper.appendChild(piecesWrapper);

};

app.create();