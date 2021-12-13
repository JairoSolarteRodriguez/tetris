//Array board
let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//Draw tiles
let tetromino = [
    [
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
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

// Canva and context
const CANVAS = document.getElementById('canvas');
let ctx = CANVAS.getContext('2d');
const FPS = 50;

class Tetris{
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
        for (let ejeY = 0; ejeY < this.board.length; ejeY++) {
            //loop subscripts
            for (let ejeX = 0; ejeX < this.board[ejeY].length; ejeX++) {
                if (this.board[ejeY][ejeX] == 0) {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(ejeX * this.gridWidth, ejeY * this.gridHeigth, this.gridWidth, this.gridHeigth);
                    ctx.strokeStyle = '#eee';
                    ctx.strokeRect(ejeX * this.gridWidth, ejeY * this.gridHeigth, this.gridWidth, this.gridHeigth)
                }
            }
        }        
    }

    //Selection of colors and shapes randomly
    getRandom (array) {
        return Math.floor(Math.random() * array.length)
    }     
}

let Shape = function(color, Random, x, y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.widthShape = 41;
    this.heightShape = 41;
    this.Random = Random;

    this.draw = function(){
        // Tab with random color
        for (let ejey = 0; ejey < tetromino[0][this.Random].length; ejey++) {
            for (let ejex = 0; ejex < tetromino.length; ejex++) {
                if (tetromino[ejey][ejex] != 0) {                    
                    ctx.fillStyle = this.color;
                    ctx.fillRect(this.x * this.widthShape, this.y * this.heightShape, this.widthShape, this.heightShape);
                    ctx.strokeStyle = '#eee';
                    ctx.strokeRect(this.x * this.widthShape, this.y * this.heightShape, this.widthShape, this.heightShape);
                }
            }    
        }   
    }     
  
    this.fijar = function(){
        let currenPosition = [this.y, [this.x]];
        for(let i; i<currenPosition.length; i++){
            for(let j; j<currenPosition.length; j++){
                let t = tablero[i][j];
                console.log(t);
            }
        }
    }

    this.fallShape = function(){
        this.y++;
        let currenPosition = board[this.y][this.x];
        this.colision(currenPosition, 'down');
    }

    this.down = function(){
        this.y++;
        let currenPosition = board[this.y][this.x];
        this.colision(currenPosition, 'down');
    }
    this.right = function(){
        this.x++;
        let currenPosition = board[this.y][this.x];
        this.colision(currenPosition, 'right');
    }
    this.left = function(){
        this.x--;
        let currenPosition = board[this.y][this.x];
        this.colision(currenPosition, 'left');
    }

    this.colision = function(pos, direction){
        if(pos != 0){
            if(direction == 'down') this.y--;
            if(direction == 'right') this.x--;
            if(direction == 'left') this.x++;
        }
        if(pos == 1){
            this.fijar();
        }
    }
}

class Game{
    init(){
        let boardTetris = new Tetris(board);
        let color = boardTetris.getRandom(colors);
        color = colors[color];
        let Random = boardTetris.getRandom(tetromino);
        Random = tetromino[0][Random];
        let shape = new Shape(color, Random, 7, 0);
        shape.draw();


        //lectura de teclado
        document.addEventListener('keydown', function(tecla){
            if(tecla.key == 'ArrowDown'){
                shape.down();
            }else if(tecla.key == 'ArrowRight'){
                shape.right();
            }else if(tecla.key == 'ArrowLeft'){
                shape.left();
            }
        });

        setInterval(function() {
            boardTetris = new Tetris(board);
            shape.draw();
        },1000/FPS);

        // falling shape
        setInterval(function() {
            shape.fallShape();
        },10000/FPS);
    }
}



let game = new Game();
game.init();

