window.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById('play');
    var stop = document.getElementById('pause');
    var counterStart = 0;
    var boardParent = document.querySelector('.boardFlex');
    var glider = document.getElementById('glider');
    var capitan = document.getElementById('capitan');
    var pentadecathlon = document.getElementById('pentadecathlon');
    var gliderGun = document.getElementById('gliderGun');

    function GameOfLife(boardWidth, boardHeight) {
        this.width = boardWidth;
        this.height = boardHeight;
        this.board = document.getElementById('board');
        this.cells = [];
        counterStart = 0;
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
        this.capShield = function () {
            this.setCellState(8,0,'live');
            this.setCellState(9,0,'live');
            this.setCellState(10,0,'live');
            this.setCellState(11,0,'live');
            this.setCellState(12,0,'live');
            this.setCellState(6,1,'live');
            this.setCellState(7,1,'live');
            this.setCellState(8,1,'live');
            this.setCellState(9,1,'live');
            this.setCellState(10,1,'live');
            this.setCellState(11,1,'live');
            this.setCellState(12,1,'live');
            this.setCellState(13,1,'live');
            this.setCellState(14,1,'live');
            this.setCellState(4,2,'live');
            this.setCellState(5,2,'live');
            this.setCellState(6,2,'live');
            this.setCellState(7,2,'live');
            this.setCellState(13,2,'live');
            this.setCellState(14,2,'live');
            this.setCellState(15,2,'live');
            this.setCellState(16,2,'live');
            this.setCellState(3,3,'live');
            this.setCellState(4,3,'live');
            this.setCellState(5,3,'live');
            this.setCellState(15,3,'live');
            this.setCellState(16,3,'live');
            this.setCellState(17,3,'live');
            this.setCellState(2,4,'live');
            this.setCellState(3,4,'live');
            this.setCellState(4,4,'live');
            this.setCellState(16,4,'live');
            this.setCellState(17,4,'live');
            this.setCellState(18,4,'live');
            this.setCellState(2,5,'live');
            this.setCellState(3,5,'live');
            this.setCellState(7,5,'live');
            this.setCellState(8,5,'live');
            this.setCellState(9,5,'live');
            this.setCellState(10,5,'live');
            this.setCellState(11,5,'live');
            this.setCellState(12,5,'live');
            this.setCellState(13,5,'live');
            this.setCellState(17,5,'live');
            this.setCellState(18,5,'live');
            this.setCellState(1,6,'live');
            this.setCellState(2,6,'live');
            this.setCellState(6,6,'live');
            this.setCellState(7,6,'live');
            this.setCellState(10,6,'live');
            this.setCellState(13,6,'live');
            this.setCellState(14,6,'live');
            this.setCellState(18,6,'live');
            this.setCellState(19,6,'live');
            this.setCellState(1,7,'live');
            this.setCellState(2,7,'live');
            this.setCellState(5,7,'live');
            this.setCellState(6,7,'live');
            this.setCellState(10,7,'live');
            this.setCellState(14,7,'live');
            this.setCellState(15,7,'live');
            this.setCellState(18,7,'live');
            this.setCellState(19,7,'live');
            this.setCellState(0,8,'live');
            this.setCellState(1,8,'live');
            this.setCellState(5,8,'live');
            this.setCellState(9,8,'live');
            this.setCellState(10,8,'live');
            this.setCellState(11,8,'live');
            this.setCellState(15,8,'live');
            this.setCellState(19,8,'live');
            this.setCellState(20,8,'live');
            this.setCellState(0,9,'live');
            this.setCellState(1,9,'live');
            this.setCellState(5,9,'live');
            this.setCellState(6,9,'live');
            this.setCellState(7,9,'live');
            this.setCellState(8,9,'live');
            this.setCellState(9,9,'live');
            this.setCellState(10,9,'live');
            this.setCellState(11,9,'live');
            this.setCellState(12,9,'live');
            this.setCellState(13,9,'live');
            this.setCellState(14,9,'live');
            this.setCellState(15,9,'live');
            this.setCellState(19,9,'live');
            this.setCellState(20,9,'live');
            this.setCellState(0,10,'live');
            this.setCellState(1,10,'live');
            this.setCellState(5,10,'live');
            this.setCellState(8,10,'live');
            this.setCellState(9,10,'live');
            this.setCellState(10,10,'live');
            this.setCellState(11,10,'live');
            this.setCellState(12,10,'live');
            this.setCellState(15,10,'live');
            this.setCellState(19,10,'live');
            this.setCellState(20,10,'live');
            this.setCellState(0,11,'live');
            this.setCellState(1,11,'live');
            this.setCellState(5,11,'live');
            this.setCellState(9,11,'live');
            this.setCellState(10,11,'live');
            this.setCellState(11,11,'live');
            this.setCellState(15,11,'live');
            this.setCellState(19,11,'live');
            this.setCellState(20,11,'live');
            this.setCellState(0,12,'live');
            this.setCellState(1,12,'live');
            this.setCellState(5,12,'live');
            this.setCellState(8,12,'live');
            this.setCellState(9,12,'live');
            this.setCellState(11,12,'live');
            this.setCellState(12,12,'live');
            this.setCellState(15,12,'live');
            this.setCellState(19,12,'live');
            this.setCellState(20,12,'live');
            this.setCellState(1,13,'live');
            this.setCellState(2,13,'live');
            this.setCellState(5,13,'live');
            this.setCellState(6,13,'live');
            this.setCellState(8,13,'live');
            this.setCellState(12,13,'live');
            this.setCellState(14,13,'live');
            this.setCellState(15,13,'live');
            this.setCellState(18,13,'live');
            this.setCellState(19,13,'live');
            this.setCellState(1,14,'live');
            this.setCellState(2,14,'live');
            this.setCellState(6,14,'live');
            this.setCellState(7,14,'live');
            this.setCellState(13,14,'live');
            this.setCellState(14,14,'live');
            this.setCellState(18,14,'live');
            this.setCellState(19,14,'live');
            this.setCellState(2,15,'live');
            this.setCellState(3,15,'live');
            this.setCellState(7,15,'live');
            this.setCellState(8,15,'live');
            this.setCellState(9,15,'live');
            this.setCellState(10,15,'live');
            this.setCellState(11,15,'live');
            this.setCellState(12,15,'live');
            this.setCellState(13,15,'live');
            this.setCellState(17,15,'live');
            this.setCellState(18,15,'live');
            this.setCellState(2,16,'live');
            this.setCellState(3,16,'live');
            this.setCellState(4,16,'live');
            this.setCellState(16,16,'live');
            this.setCellState(17,16,'live');
            this.setCellState(18,16,'live');
            this.setCellState(3,17,'live');
            this.setCellState(4,17,'live');
            this.setCellState(5,17,'live');
            this.setCellState(15,17,'live');
            this.setCellState(16,17,'live');
            this.setCellState(17,17,'live');
            this.setCellState(4,18,'live');
            this.setCellState(5,18,'live');
            this.setCellState(6,18,'live');
            this.setCellState(7,18,'live');
            this.setCellState(13,18,'live');
            this.setCellState(14,18,'live');
            this.setCellState(15,18,'live');
            this.setCellState(16,18,'live');
            this.setCellState(6,19,'live');
            this.setCellState(7,19,'live');
            this.setCellState(8,19,'live');
            this.setCellState(9,19,'live');
            this.setCellState(10,19,'live');
            this.setCellState(11,19,'live');
            this.setCellState(12,19,'live');
            this.setCellState(13,19,'live');
            this.setCellState(14,19,'live');
            this.setCellState(8,20,'live');
            this.setCellState(9,20,'live');
            this.setCellState(10,20,'live');
            this.setCellState(11,20,'live');
            this.setCellState(12,20,'live');
        };
        this.pantadecthlon = function () {
          this.setCellState(9,4,'live');
          this.setCellState(9,5,'live');
          this.setCellState(8,6,'live');
          this.setCellState(10,6,'live');
          this.setCellState(9,7,'live');
          this.setCellState(9,8,'live');
          this.setCellState(9,9,'live');
          this.setCellState(9,10,'live');
          this.setCellState(8,11,'live');
          this.setCellState(10,11,'live');
          this.setCellState(9,12,'live');
          this.setCellState(9,13,'live');
        };
        this.gliderGun = function () {
          this.setCellState(25,1,'live');
          this.setCellState(23,2,'live');
          this.setCellState(25,2,'live');
          this.setCellState(13,3,'live');
          this.setCellState(14,3,'live');
          this.setCellState(21,3,'live');
          this.setCellState(22,3,'live');
          this.setCellState(35,3,'live');
          this.setCellState(36,3,'live');
          this.setCellState(12,4,'live');
          this.setCellState(16,4,'live');
          this.setCellState(21,4,'live');
          this.setCellState(22,4,'live');
          this.setCellState(35,4,'live');
          this.setCellState(36,4,'live');
          this.setCellState(1,5,'live');
          this.setCellState(2,5,'live');
          this.setCellState(11,5,'live');
          this.setCellState(17,5,'live');
          this.setCellState(21,5,'live');
          this.setCellState(22,5,'live');
          this.setCellState(1,6,'live');
          this.setCellState(2,6,'live');
          this.setCellState(11,6,'live');
          this.setCellState(15,6,'live');
          this.setCellState(17,6,'live');
          this.setCellState(18,6,'live');
          this.setCellState(23,6,'live');
          this.setCellState(25,6,'live');
          this.setCellState(11,7,'live');
          this.setCellState(17,7,'live');
          this.setCellState(25,7,'live');
          this.setCellState(12,8,'live');
          this.setCellState(16,8,'live');
          this.setCellState(13,9,'live');
          this.setCellState(14,9,'live');
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
            if (x !== this.width - 1) {
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
            if (x !== this.width - 1) {
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
            if (x !== this.width - 1) {
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
        this.startGame = function(){
            if (counterStart === 0) {
                counterStart++;
                self.interval = setInterval(function () {
                    self.startLive(), console.log("Bla,Bla");
                }, 500);
                console.log("klikam");
            }
        };
        this.stopGame = function (){
            counterStart = 0;
            clearInterval(self.interval)
        };
    }

    function clearBoard() {
        if (boardParent.children.length > 1)
        boardParent.removeChild(boardParent.firstElementChild);
        var board = document.createElement("section");
        board.setAttribute('id','board');
        boardParent.insertBefore(board,boardParent.firstElementChild);
    }


    glider.addEventListener('click', function () {
        if (window.newgame) {
            start.removeEventListener('click', newgame.startGame);
            stop.removeEventListener('click', newgame.stopGame);
            delete window.newgame;
        }
        clearBoard();
        newgame = new GameOfLife(10,10);
        newgame.createBoard();
        newgame.firstGlider();
        start.addEventListener('click', newgame.startGame);
        stop.addEventListener('click', newgame.stopGame);
    });
    capitan.addEventListener('click', function () {
        if (window.newgame) {
            start.removeEventListener('click', newgame.startGame);
            stop.removeEventListener('click', newgame.stopGame);
            delete window.newgame;
        }
        clearBoard();
        newgame = new GameOfLife(21,21);
        newgame.createBoard();
        newgame.capShield();
        start.addEventListener('click', newgame.startGame);
        stop.addEventListener('click', newgame.stopGame);
    });
    pentadecathlon.addEventListener('click', function () {
        if (window.newgame) {
            start.removeEventListener('click', newgame.startGame);
            stop.removeEventListener('click', newgame.stopGame);
            delete window.newgame;
        }
        clearBoard();
        newgame = new GameOfLife(18,18);
        newgame.createBoard();
        newgame.pantadecthlon();
        start.addEventListener('click', newgame.startGame);
        stop.addEventListener('click', newgame.stopGame);
    });
    gliderGun.addEventListener('click', function () {
        if (window.newgame) {
            start.removeEventListener('click', newgame.startGame);
            stop.removeEventListener('click', newgame.stopGame);
            delete window.newgame;
        }
        clearBoard();
        newgame = new GameOfLife(38,38);
        newgame.createBoard();
        newgame.gliderGun();
        start.addEventListener('click', newgame.startGame);
        stop.addEventListener('click', newgame.stopGame);
    });
});