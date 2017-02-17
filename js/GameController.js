angular.module('tictactoe')
    .controller('TicTacController', TicTacController);
  // Get a reference to the Firebase
  
TicTacController.$inject = ['$scope','$firebaseObject','$firebaseArray'];


 function TicTacController($scope, $firebaseObject, $firebaseArray) {


var rootRef = new Firebase("https://tictactoegarrett.firebaseio.com/");

        //sync with top level
$firebaseObject(rootRef).$bindTo($scope, "game");
    
    $scope.drawMark = function(index) {
        if ($scope.game.gameover === false && $scope.game.cells[index] === "") {
            if ($scope.game.currentMark === 'o') {
                $scope.game.cells[index] = 'x';
                $scope.game.currentMark = 'x';


                document.getElementsByClassName("cell").innerHTML = $scope.game.cells[index];
            } else {
                $scope.game.cells[index] = 'o';
                $scope.game.currentMark = 'o';
                
               
                document.getElementsByClassName("cell").innerHTML = $scope.game.cells[index];
            }
        }
        console.log($scope.game.cells)
        if ($scope.game.gameover === false){ 
            evaluateWin();
            } 
            $scope.game.moves += 1;
    }
    evaluateWin = function() {
        if ($scope.game.cells[0] == "x" && $scope.game.cells[1] == "x" && $scope.game.cells[2] == "x") {
            xwin();
        } else if ($scope.game.cells[3] == "x" && $scope.game.cells[4] == "x" && $scope.game.cells[5] == "x") {
            xwin();
        } else if ($scope.game.cells[6] == "x" && $scope.game.cells[7] == "x" && $scope.game.cells[8] == "x") {
            xwin();
        } else if ($scope.game.cells[0]== "x" && $scope.game.cells[3]== "x" && grid[6] == "x") {
            xwin();
        } else if ($scope.game.cells[1] == "x" && $scope.game.cells[4] == "x" && $scope.game.cells[7] == "x") {
            xwin();
        } else if ($scope.game.cells[2] == "x" && $scope.game.cells[5] == "x" && $scope.game.cells[8] == "x") {
            xwin();
        } else if ($scope.game.cells[0] == "x" && $scope.game.cells[4] == "x" && $scope.game.cells[8] == "x") {
            xwin();
        } else if ($scope.game.cells[2] == "x" && $scope.game.cells[4] == "x" && $scope.game.cells[6] == "x") {
            xwin();
        } else if ($scope.game.cells[0] == "o" && $scope.game.cells[1] == "o" && $scope.game.cells[2] == "o") {
            owin();
        } else if ($scope.game.cells[3] == "o" && $scope.game.cells[4] == "o" && $scope.game.cells[5] == "o") {
            owin();
        } else if ($scope.game.cells[6] == "o" && $scope.game.cells[7] == "o" && $scope.game.cells[8] == "o") {
            owin();
        } else if ($scope.game.cells[0]== "o" && $scope.game.cells[3]== "o" && grid[6] == "o") {
            owin();
        } else if ($scope.game.cells[1] == "o" && $scope.game.cells[4] == "o" && $scope.game.cells[7] == "o") {
            owin();
        } else if ($scope.game.cells[2] == "o" && $scope.game.cells[5] == "o" && $scope.game.cells[8] == "o") {
            owin();
        } else if ($scope.game.cells[0] == "o" && $scope.game.cells[4] == "o" && $scope.game.cells[8] == "o") {
            owin();
        } else if ($scope.game.cells[2] == "o" && $scope.game.cells[4] == "o" && $scope.game.cells[6] == "o") {
            owin();
        } else if ($scope.game.moves == 9) {
            var messagebox = document.getElementById('message');
            $scope.game.leftMessage = "draw...";
        } 
    };

    $scope.setName1 = function(player1Name) {
        $scope.game.player1Name = "";
    };

    $scope.setName2 = function(player2Name) {
        $scope.game.player2Name = "";
    };

    removeFocus1 = function(key) {
        if (key.keyCode == 13) {
            key.target.blur();
        }
    };

    removeFocus2 = function(key) {
        if (key.keyCode == 13) {
            key.target.blur();
        }
    };

    xwin = function () {
        $scope.game.leftMessage = $scope.game.player1Name + " wins!";
        $scope.game.gameover = true;
        $scope.game.leftScore += 1;
    };

    owin = function () {
        $scope.game.rightMessage = $scope.game.player2Name + " wins!";
        $scope.game.gameover = true;
        $scope.game.rightScore += 1;
    };

    $scope.clearBoard = function() {
        console.log('you tried to clear the board');
        for (var j = 0; j < $scope.game.cells.length; j++) {
            $scope.game.cells[j] = "";
        }
        $scope.game.leftMessage = "";
        $scope.game.rightMessage = "";
        $scope.game.currentMark = "o";
        $scope.game.empty = true;
        $scope.game.moves = 1;
        $scope.game.gameover = false;

    };

    $scope.resetScore =function() {
         for (var j = 0; j < $scope.game.cells.length; j++) {
            $scope.game.cells[j] = "";
        }
        $scope.game.leftMessage = "";
        $scope.game.rightMessage = "";
        $scope.game.currentMark = "o";
        $scope.game.empty = true;
        $scope.game.moves = 1;
        $scope.game.gameover = false;
        $scope.game.rightScore = 0;
        $scope.game.leftScore = 0;
        $scope.game.player1Name = "Input name...";
        $scope.game.player2Name = "Input name...";
  

    }
}
