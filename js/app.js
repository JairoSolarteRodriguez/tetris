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
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
        [1,1],
        [1,1],
    ],
    [
        [0,1,0],
        [0,1,0],
        [0,1,1],
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

//refresh variable
let lastTime = 0;



class Tetris{
    //construir board
    constructor(canvasId, board) {
        // we choose the board that we pass by parameter
        this.board = board;

        //board variable
        this.CANVAS = document.getElementById(canvasId);

        // context variable
        this.ctx = this.CANVAS.getContext('2d');
        this.FPS = 50;

        //Define the width and height of the grid
        this.gridWidth = 41;
        this.gridHeigth = 41;

        // We define the width and height of the board according to the measurements of the grid
        this.CANVAS.width = this.gridWidth * 15;
        this.CANVAS.height = this.gridWidth * 20;

        // We go through the first level of the array
        for (let ejeY = 0; ejeY < this.board.length; ejeY++) {
            //loop subscripts
            for (let ejeX = 0; ejeX < this.board[ejeY].length; ejeX++) {
                if (this.board[ejeY][ejeX] == 0) {
                    this.ctx.fillStyle = 'green';
                    this.ctx.fillRect(ejeX * this.gridWidth, ejeY * this.gridHeigth, this.gridWidth, this.gridHeigth);
                    this.ctx.strokeStyle = '#eee';
                    this.ctx.strokeRect(ejeX * this.gridWidth, ejeY * this.gridHeigth, this.gridWidth, this.gridHeigth)
                }
            }
        }        
    }
    //Selection of colors and shapes randomly
    getRandom (colors,) {
        return Math.floor(Math.random() * array.length)
    }

    
    //Random color is assigned to random Tetromino
    

}


 //








 function update (time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    Tetris ()
    requestAnimationFrame(update); 

    
}




// Creacion del objeto
let Tablero = new Tetris('canvas', board);
update(50)

//create update 



