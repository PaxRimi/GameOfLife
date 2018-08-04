window.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById('play');
    var stop = document.getElementById('pause');

    function GameOfLife(boardWidth, boardHeight) {
        this.width = boardWidth;
        this.height = boardHeight;
        this.board = document.getElementById('board');
        this.cells = [];
        this.createBoard = function () {
            this.board.style.width = this.width * 10 + "px";
            this.board.style.height = this.height * 10 + "px";
            var numberOfElements = this.width * this.height;
            for (var i=0; i<numberOfElements; i++) {
                var div = document.createElement('div');
                this.board.appendChild(div);
            }
            this.cells = this.board.querySelectorAll('div');
            this.cells.forEach(function (element) {
                element.addEventListener('click', function (e) {
                    this.classList.toggle('live');
                })
            });
        };
        this.index = function (x,y) {
            return x + (y * this.height);
        };
        this.setCellState = function (x,y,state) {
            this.cells[this.index(x,y)].classList.toggle(state);
        };
        this.firstGlider = function () {
            this.setCellState(0,0,'live');
            this.setCellState(1,1,"live");
            this.setCellState(2,1,"live");
            this.setCellState(1,2,"live");
            this.setCellState(0,2,"live");
        };
        this.computeCellNextState = function (x,y) {
            var neighbor =0;
            var cellLive = 0;


            if (this.cells[this.index(x, y)].classList.length > 0) {
                cellLive++;
            }

            if (x!==0) {
                if (this.cells[this.index(x - 1, y - 1)] !== undefined) {
                    if (this.cells[this.index(x - 1, y - 1)].classList.length > 0) {
                        neighbor++;
                    }
                }
            }
            if (this.cells[this.index(x, y-1)] !== undefined) {
                if (this.cells[this.index(x, y-1)].classList.length > 0 ) {
                    neighbor++;
                }
            }
            if (x !== 9) {
                if (this.cells[this.index(x + 1, y - 1)] !== undefined) {
                    if (this.cells[this.index(x + 1, y - 1)].classList.length > 0) {
                        neighbor++;
                    }
                }
            }
            if (x !== 0) {
                if (this.cells[this.index(x - 1, y)] !== undefined) {
                    if (this.cells[this.index(x - 1, y)].classList.length > 0) {
                        neighbor++;
                    }
                }
            }
            if (x !== 9) {
                if (this.cells[this.index(x + 1, y)] !== undefined) {
                    if (this.cells[this.index(x + 1, y)].classList.length > 0) {
                        neighbor++;
                    }
                }
            }
            if (x !== 0) {
                if (this.cells[this.index(x - 1, y + 1)] !== undefined) {
                    if (this.cells[this.index(x - 1, y + 1)].classList.length > 0) {
                        neighbor++;
                    }
                }
            }
            if (this.cells[this.index(x, y+1)] !== undefined) {
                if (this.cells[this.index(x, y+1)].classList.length > 0 ) {
                    neighbor++;
                }
            }
            if (x !== 9) {
                if (this.cells[this.index(x + 1, y + 1)] !== undefined) {
                    if (this.cells[this.index(x + 1, y + 1)].classList.length > 0) {
                        neighbor++;
                    }
                }
            }


            if (cellLive > 0 ) {
                if (neighbor < 2 || neighbor > 3) {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                if (neighbor === 3 ) {
                    return 1;
                } else {
                    return 0;
                }
            }
        };
        this.computeNextGenerationArray = [];
        this.computeNextGeneration = function () {
            for (let i=0; i<this.height; i++){
                for (var j=0; j<this.width; j++) {
                    this.computeNextGenerationArray.push(this.computeCellNextState(j,i));
                }
            }
        };
        this.printNextGeneration = function () {
            for (let i=0; i<this.cells.length; i++) {
                if(this.computeNextGenerationArray[i] === 1 ) {
                    this.cells[i].classList.add('live');
                } else {
                    this.cells[i].classList.remove('live');
                }
            };
            this.computeNextGenerationArray = [];
        };
        this.startLive = function () {
            this.computeNextGeneration();
            this.printNextGeneration();
        };
        var self = this;
        this.startGame = function(){ self.interval = setInterval(function (){self.startLive()}, 250);};
        this.stopGame = function (){clearInterval(self.interval)};
    }


    var newgame = new GameOfLife(10,10);
    newgame.createBoard();
    newgame.firstGlider();
    start.addEventListener('click', newgame.startGame);
    stop.addEventListener('click', newgame.stopGame);

});