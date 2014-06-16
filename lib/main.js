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

app.selected = '';

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
            temporarySquare.dataset.position = letter + '' + line;

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
                                    'square-' + letter + '' + line
                                );
                // Salva a posição da peça para ser usada por script posteriormente
                temporaryElement.dataset.position = letter + '' + line;
            }

            // Coloca a peça no fragment
            documentFragmentPieces.appendChild(temporaryElement);
        };

    // Passa o loop em casa linha do tabuleiro, e dentro de cada linha passa um loop em casa letra
    while(line) {
        temporaryLine = document.createElement('span');
        temporaryLine.classList.add('square-line');

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

app.delegateClick = function () {
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('piece')) {
            app.removeSelected();
            app.selectSquare(event.target.dataset.position);
            app.suggestsMovesForSquare(event.target.dataset.position);
        }

        if (event.target.dataset.move) {
            app.moveSelectedTo(event.target.dataset.position);
        }
    });
};

/*
    position: a1, h3, b7 etc...
*/
app.selectSquare = function (position) {

    var piece = document.querySelector('.piece[data-position="' + position + '"]');

    if (!piece.classList.contains(app.dictionary['c' + chess.turn()])) {
        return false;
    }

    app.selected = piece;

    var selected = document.querySelectorAll('.square[data-position="' + position + '"]');

    Array.prototype.slice
        .call(selected)
        .map(function (element) {
            element.classList.add('selected');
        });
};

app.removeSelected = function () {
    app.selected = '';

    Array.prototype.slice
                .call(document.querySelectorAll('.square.selected'))
                .map(function (element) {
                    element.classList.remove('selected');
                });
};

app.suggestsMovesForSquare = function (square) {

    var moves = chess.moves({square: square});

    app.removePossibleMoves();
    app.possibleMove(square, moves);
};

app.possibleMove = function (square, moves) {

    moves.map(function (move) {
        var square = move.replace(/[NQK]/, '');

        square = document.querySelector('.square[data-position="' + square + '"]');

        square.classList.add('selected');
        square.dataset.move = move;
    });
};

app.removePossibleMoves = function () {
    Array.prototype.slice
        .call(document.querySelectorAll('[data-move]'))
        .map(function (element) {
            element.removeAttribute('data-move');
        });
};

app.moveSelectedTo = function (position) {

    var square = document.querySelector('.square[data-position="' + position + '"]');

    if ( !square.dataset.move ) {
        return false;
    }

    chess.move(square.dataset.move);

    var history = chess.history({ verbose: true });

    history = history[history.length - 1];

    app.selected.classList.remove('square-' + history.from);
    app.selected.classList.add('square-' + history.to);
    app.selected.dataset.position = history.to;

    app.removeSelected();
    app.removePossibleMoves();
};

app.create();
app.delegateClick();