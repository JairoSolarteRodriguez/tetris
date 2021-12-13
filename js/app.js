//Array board
let board = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//Draw tiles
let tetromino = [
    [
        [2, 2, 2, 0],
        [0, 2, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [3, 3, 0, 0],
        [0, 3, 3, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 4, 0, 0],
        [0, 4, 0, 0],
        [0, 4, 0, 0],
        [0, 4, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 5, 5, 0],
        [0, 5, 5, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 6, 0, 0],
        [0, 6, 0, 0],
        [0, 6, 6, 0],
    ]
];

//token colors
let colors = [
    "#ffd300",
    "#de38c8",
    "#652ec7",
    "#33135c",
    "#13ca91",
    "#ff9472",
    "#35212a",
    "#ff8b8b",
    "#28cf75",
    "#00a9fe",
    "#04005e",
    "#120052",
    "#272822",
    "#f92672",
    "#66d9ef",
    "#a6e22e",
    "#fd971f",
];
const boardHeight = 20;
const boardWidth = 15;

// Canva and context
const CANVAS = document.getElementById('canvas');
let ctx = CANVAS.getContext('2d');
const FPS = 50;

class Tetris {
    //construir tablero
    constructor(board) {
        // Obtenemos el tablero que pasamos por parametros
        this.board = board;

        //Define the width and height of the grid
        this.gridWidth = 41;
        this.gridHeigth = 41;

        // We define the width and height of the board according to the measurements of the grid
        CANVAS.width = this.gridWidth * 15;
        CANVAS.height = this.gridWidth * 20;

        //we choose the tetromino as a parameter
        this.tetromino = tetromino

        // We go through the first level of the array
        for (let ejeY = 0; ejeY < boardHeight; ejeY++) {
            //loop subscripts
            for (let ejeX = 0; ejeX < boardWidth; ejeX++) {
                if (this.board[ejeY][ejeX] == 0) {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(ejeX * this.gridWidth, (ejeY + 1) * this.gridHeigth, this.gridWidth, this.gridHeigth);
                    ctx.strokeStyle = '#eee';
                    ctx.strokeRect(ejeX * this.gridWidth, (ejeY + 1) * this.gridHeigth, this.gridWidth, this.gridHeigth)
                }
            }
        }
    }

    //Selection of colors and shapes randomly
    getRandom(array) {
        return Math.floor(Math.random() * array.length)
    }
}

let Shape = function (color, Random, x, y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.widthShape = 41;
    this.heightShape = 41;
    this.Random = Random;
    // console.log(this.Random);

    this.draw = function () {
        // Tab with random color
        for(ejey = 0; ejey < 4; ejey++){
            for(ejex = 0; ejex < 4; ejex++){
                if(tetromino[this.Random][ejey][ejex] != 0){
                    ctx.fillStyle = this.color;
                    ctx.fillRect((this.x + ejex) * this.widthShape, (this.y + ejey) * this.heightShape, this.widthShape, this.heightShape);
                    ctx.strokeStyle = '#eee';
                    ctx.strokeRect((this.x + ejex) * this.widthShape, (this.y + ejey) * this.heightShape, this.widthShape, this.heightShape);
                }
            }
        }
    }

    this.fijar = function () {
        console.log('fijada')
    }

    this.fallShape = function(){
        console.log(this.colision(this.y, this.x));
        switch (this.colision(this.y, this.x)) {
            case true:
                this.y;
                break;
            case false:
                this.y++;
            default:
                break;
        }
    }

    this.right = function(){
        if(this.colision(this.y, this.x+1) == false){
            this.x++;
        }
    }

    this.down = function(){
        if(this.colision(this.y, this.x) == false){
            this.y++;
        }
    }

    this.left = function(){
        if(this.colision(this.y, this.x-1) == false){
            this.x--;
        }
    }

    this.colision = function(newY, newX){
        let result = false;

        for(axisY = 0; axisY < 4; axisY++){
            for(axisX = 0; axisX < 4; axisX++){
                if(tetromino[this.Random][axisY][axisX] > 0){
                    if(board[newY+axisY][newX+axisX] > 0){
                        result = true;
                    }
                }
            }
        }

        return result;
    }
}

class Game {
    init() {
        let boardTetris = new Tetris(board);
        let color = boardTetris.getRandom(colors);
        color = colors[color];

        let Random = boardTetris.getRandom(tetromino[0]);
        let shape = new Shape(color, Random, 7, 3);
        shape.draw();


        //lectura de teclado || Cambiar por la lobrerias keyprss
        document.addEventListener('keydown', function (tecla) {
            if (tecla.key == 'ArrowDown') {
                shape.down();
            } else if (tecla.key == 'ArrowRight') {
                shape.right();
            } else if (tecla.key == 'ArrowLeft') {
                shape.left();
            }
        });

        setInterval(function () {
            boardTetris = new Tetris(board);
            shape.draw();
        }, 1000 / FPS);

        // falling shape
        setInterval(function () {
            shape.fallShape();
        }, 10000 / FPS);
    }
}



let game = new Game();
game.init();