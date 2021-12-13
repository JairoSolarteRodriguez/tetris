//Array talero
let tablero = [
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

let tetromino = [
    [
        [1, 1, 1],
        [0, 1, 0],
    ],
    [
        [1, 1, 0],
        [0, 1, 1],
    ],
    [
        [0,0,0,0],
    ],
    [
        [0,0],
        [0,0],
    ],
    [
        [0],
        [0],
        [0],
        [0,0],
    ]
];

let colores = [
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
    constructor(tablero) {
        // Obtenemos el tablero que pasamos por parametros
        this.tablero = tablero;        

        //Definir el ancho y alto del la cuadricula
        this.anchoCuadricula = 41;
        this.altoCuadricula = 41;

        // Definimos el ancho y alto del tablero deacuerdo a las medidas de la cuadricula
        CANVAS.width = this.anchoCuadricula * 15;
        CANVAS.height = this.anchoCuadricula * 20;

        // Recorremos el primer nivel del array
        for (let ejeY = 0; ejeY < this.tablero.length; ejeY++) {
            //recorrer subíndices
            for (let ejeX = 0; ejeX < this.tablero[ejeY].length; ejeX++) {
                if (this.tablero[ejeY][ejeX] == 0) {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(ejeX * this.anchoCuadricula, ejeY * this.altoCuadricula, this.anchoCuadricula, this.altoCuadricula);
                    ctx.strokeStyle = '#eee';
                    ctx.strokeRect(ejeX * this.anchoCuadricula, ejeY * this.altoCuadricula, this.anchoCuadricula, this.altoCuadricula);
                }
            }
        }        
    }

    //Selection of colors and shapes randomly
    getRandom (array) {
        return Math.floor(Math.random() * array.length)
    }

}

let Shape = function(color, x, y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.widthShape = 41;
    this.heightShape = 41;
    this.disabledMove = false;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * this.widthShape, this.y * this.heightShape, this.widthShape, this.heightShape);
        ctx.strokeStyle = '#eee';
        ctx.strokeRect(this.x * this.widthShape, this.y * this.heightShape, this.widthShape, this.heightShape);
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
        let currenPosition = tablero[this.y][this.x];
        this.colision(currenPosition, 'down');
    }

    this.down = function(){
        this.y++;
        let currenPosition = tablero[this.y][this.x];
        this.colision(currenPosition, 'down');
    }
    this.right = function(){
        this.x++;
        let currenPosition = tablero[this.y][this.x];
        this.colision(currenPosition, 'right');
    }
    this.left = function(){
        this.x--;
        let currenPosition = tablero[this.y][this.x];
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
        let tableroTetris = new Tetris(tablero);
        let color = tableroTetris.getRandom(colores);
        color = colores[color];
        let shape = new Shape(color, 7, 0);
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
            tableroTetris = new Tetris(tablero);
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

