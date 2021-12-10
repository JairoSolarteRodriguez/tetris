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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let tetromino = [
    [
        [0,0,0,0]
    ],[
        [0,0]
        [0,0]
    ],[
        [0]
        [0]
        [0]
        [0,0]
    ]
]


class Tetris{
    //construir tablero
    constructor(canvasId, tablero) {
        // Obtenemos el tablero que pasamos por parametros
        this.tablero = tablero;

        //Variable del tablero
        this.CANVAS = document.getElementById(canvasId);

        //variable contexto
        this.ctx = this.CANVAS.getContext('2d');
        this.FPS = 50;

        //Definir el ancho y alto del la cuadricula
        this.anchoCuadricula = 41;
        this.altoCuadricula = 41;

        // Definimos el ancho y alto del tablero deacuerdo a las medidas de la cuadricula
        this.CANVAS.width = this.anchoCuadricula * 15;
        this.CANVAS.height = this.anchoCuadricula * 20;

        // Recorremos el primer nivel del array
        for (let ejeY = 0; ejeY < this.tablero.length; ejeY++) {
            //recorrer subíndices
            for (let ejeX = 0; ejeX < this.tablero[ejeY].length; ejeX++) {
                if (this.tablero[ejeY][ejeX] == 0) {
                    this.ctx.fillStyle = 'green';
                    this.ctx.fillRect(ejeX * this.anchoCuadricula, ejeY * this.altoCuadricula, this.anchoCuadricula, this.altoCuadricula);
                    this.ctx.strokeStyle = '#eee';
                    this.ctx.strokeRect(ejeX * this.anchoCuadricula, ejeY * this.altoCuadricula, this.anchoCuadricula, this.altoCuadricula)
                }
            }
        }
    }
}



// Creacion del objeto
let Tablero = new Tetris('canvas', tablero);
