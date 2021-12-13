//Array board
let board = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Draw Shapes
let tetromino = [
	[ //Shape 1
		[
			[0, 0, 0, 0],
			[0, 7, 7, 0],
			[0, 7, 7, 0],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 0, 0],
			[0, 7, 7, 0],
			[0, 7, 7, 0],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 0, 0],
			[0, 7, 7, 0],
			[0, 7, 7, 0],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 0, 0],
			[0, 7, 7, 0],
			[0, 7, 7, 0],
			[0, 0, 0, 0]
		]
	],

	[ // Shape 2
		[
			[0, 0, 0, 0],
			[2, 2, 2, 2],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 2, 0],
			[0, 0, 2, 0],
			[0, 0, 2, 0],
			[0, 0, 2, 0]
		],

		[
			[0, 0, 0, 0],
			[2, 2, 2, 2],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 2, 0],
			[0, 0, 2, 0],
			[0, 0, 2, 0],
			[0, 0, 2, 0]
		]

	],

	[ //Shape 3
		[
			[0, 0, 0, 0],
			[0, 0, 3, 3],
			[0, 3, 3, 0],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 3, 0],
			[0, 0, 3, 3],
			[0, 0, 0, 3],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 0, 0],
			[0, 3, 3, 0],
			[0, 0, 3, 3],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 0, 3],
			[0, 0, 3, 3],
			[0, 0, 3, 0],
			[0, 0, 0, 0]
		]

	],

	[ //Shape 4
		[
			[0, 0, 0, 0],
			[0, 0, 4, 0],
			[0, 0, 4, 0],
			[0, 0, 4, 4]
		],

		[
			[0, 0, 0, 0],
			[0, 0, 4, 4],
			[0, 0, 4, 0],
			[0, 0, 4, 0]
		],

		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 4],
			[0, 4, 4, 4]
		],

		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 4, 0, 0],
			[0, 4, 4, 4]
		]

	],

	[ //Shape 5
		[
			[0, 0, 0, 0],
			[0, 5, 5, 5],
			[0, 0, 5, 0],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 0, 5],
			[0, 0, 5, 5],
			[0, 0, 0, 5],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 5, 0],
			[0, 5, 5, 5],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],

		[
			[0, 0, 5, 0],
			[0, 0, 5, 5],
			[0, 0, 5, 0],
			[0, 0, 0, 0]
		]
	],
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

const widthShape = 41;
const heightShape = 41;

// Canva and context
const CANVAS = document.getElementById('canvas');
let ctx = CANVAS.getContext('2d');
const FPS = 50;

class Tetris {
    //build board
    constructor(board) {
        //get board
        this.board = board;
        this.color = 'blue';

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
            for (let ejeX = 1; ejeX < boardWidth+1; ejeX++) {
                if (this.board[ejeY][ejeX] == 0) {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(ejeX * this.gridWidth, (ejeY + 1) * this.gridHeigth, this.gridWidth, this.gridHeigth);
                    ctx.strokeStyle = '#eee';
                    ctx.strokeRect(ejeX * this.gridWidth, (ejeY + 1) * this.gridHeigth, this.gridWidth, this.gridHeigth);
                }
            }
        }

    }

}

//Selection of colors and shapes randomly
let getRandom = function(array) {
    return Math.floor(Math.random() * array.length)
}

let Shape = function () {
    this.x = 0;
    this.y = 0;
    this.color;
    this.Random = 0; //type of shape
    this.angle= 0; // 0 - 3

    this.newShape= function(){
        this.Random = getRandom(tetromino);
        let color = getRandom(colors);
        this.color = colors[color];
        this.y = 0;
        this.x = 5;
    }

    this.getCurrentColor = function(){
        return this.color;
    }

    this.gameOver = function(){
        let lose = false;
        for(axisX = 1; axisX < widthShape + 1; axisX++){
            if(board[2][axisX] > 0){
                lose = true;
            }
        }
        return lose;
    }

    this.draw = function () {
        // Tab with random color
        for(ejey = 0; ejey < 4; ejey++){
            for(ejex = 0; ejex < 4; ejex++){
                if(tetromino[this.Random][this.angle][ejey][ejex] != 0){
                    ctx.fillStyle = this.color;
                    ctx.fillRect((this.x + ejex) * widthShape, (this.y + ejey) * heightShape, widthShape, heightShape);
                    ctx.strokeStyle = '#eee';
                    ctx.strokeRect((this.x + ejex) * widthShape, (this.y + ejey) * heightShape, widthShape, heightShape);
                }
            }
        }
    }
    

    this.fix = function(){
        for(axisY = 0; axisY < 4; axisY++){
            for(axisX = 0; axisX < 4; axisX++){
                if(tetromino[this.Random][this.angle][axisY][axisX] != 0){
                    board[this.y + axisY][this.x + axisX] = tetromino[this.Random][this.angle][axisY][axisX];
                }
            }
        }
    }

    this.fallShape = function(){
        switch (this.colision(this.angle, this.y, this.x)) {
            case true:
                this.y--;
                this.fix();
                this.newShape();
                if(this.gameOver()){
                    console.log('perdiste')
                    // this.resetBoard();
                }
                break;
            case false:
                this.y++;
            default:
                break;
        }
    }

    this.rotate = function(){
        let newAngle = this.angle;

        if(newAngle >= 3){
            newAngle = 0;
        }else{
            newAngle++;
        }

        if(this.colision(newAngle, this.y, this.x) == false){
            this.angle = newAngle;
        }
    }

    this.right = function(){
        if(this.colision(this.angle, this.y, this.x+1) == false){
            this.x++;
        }
    }

    this.down = function(){
        if(this.colision(this.angle, this.y, this.x) == false){
            this.y++;
        }
    }

    this.left = function(){
        if(this.colision(this.angle, this.y, this.x-1) == false){
            this.x--;
        }
    }

    this.colision = function(newAngle, newY, newX){
        let result = false;

        for(axisY = 0; axisY < 4; axisY++){
            for(axisX = 0; axisX < 4; axisX++){
                if(tetromino[this.Random][newAngle][axisY][axisX] > 0){
                    if(board[newY+axisY][newX+axisX] > 0){
                        result = true;
                    }
                }
            }
        }

        return result;
    }

    // launch new shape
    this.newShape();
}

class Game {
    init() {
        let boardTetris = new Tetris(board); // create board
        
        let shape = new Shape(); // create shape
        shape.draw();

        let listener = new window.keypress.Listener();

        //Use of keypress library
        let my_scope = this;
        let my_combos = listener.register_many([
            {
                keys: "up",
                is_exclusive: true,
                on_keydown: function () {
                shape.rotate();
                },
                this: my_scope,
            },
            {
                keys: "right",
                is_exclusive: true,
                on_keydown: function () {
                shape.right();
                },
                this: my_scope,
            },
            {
                keys: "left",
                is_exclusive: true,
                on_keydown: function () {
                shape.left();
                },
                this: my_scope,
            },
            {
                keys: "down",
                is_exclusive: true,
                on_keydown: function () {
                shape.down();
                },
                this: my_scope,
            },
        ]);

        setInterval(function () {
            shape.fallShape();
            boardTetris = new Tetris(board);
            shape.draw();
        }, 10000 / FPS);
    }
}



let game = new Game();
game.init();