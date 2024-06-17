let board = [];
let resultsPrompt = "";
let results = [];
function createBoard(num) {
  board = [];
  for (let i = 0; i < num; i++) {
    board.push([]);
    for (let j = 1; j <= num; j++) {
      board[i].push(j + num * i);
    }
  }
}

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    let row = "";
    for (let j = 0; j < board.length; j++) {
      if (j < board.length - 1) {
        row += board[i][j] + "  ┃  ";
      } else {
        row += board[i][j];
      }
    }
    console.log(row);
    if (i < board.length - 1) {
      console.log("━━━━".repeat(board[i].length));
    }
    /*if (i < board.length - 1) {
          console.log("━━━━".repeat(board[i].length * 2));
        }*/
  }
  console.log("");
  console.log("");
}
function isWinByCulomn(culomn_index) {
  let boll = true;
  for (let iR = 0; iR < board.length; iR++) {
    if (iR < board.length - 1) {
      if (board[iR][culomn_index] != board[iR + 1][culomn_index]) {
        return false;
      }
    }
  }
  return true;
}
function isWinB(row_index) {
  for (let j = 0; j < board.length; j++) {
    if (
      j < board.length - 1 &&
      board[row_index][j] != board[row_index][j + 1]
    ) {
      return false;
    }
  }
  return true;
}
function isWinByDiagnalLTR() {
  for (let iR = 0; iR < board.length; iR++) {
    if (iR < board.length - 1) {
      if (board[iR][iR] != board[iR + 1][iR + 1]) {
        return false;
      }
    }
  }
  return true;
}

function isWinByDiagnalRTL() {
  let iC = board.length - 1;
  for (let iR = 0; iR < board.length; iR++) {
    if (iR < board.length - 1 && iC > 0) {
      if (board[iR][iC] != board[iR + 1][iC - 1]) {
        return false;
      }
    }
    iC--;
  }
  return true;
}
function isWinByDiagnal() {
  if (isWinByDiagnalLTR() || isWinByDiagnalRTL()) {
    return true;
  }
  return false;
}
function isWin() {
  if (isWinByDiagnal()) {
    return true;
  }
  for (let i = 0; i < board.length; i++) {
    if (isWinByCulomn(i)) {
      return true;
    }
    if (isWinB(i)) {
      return true;
    }
  }
  return false;
}
function checkCanPlay() {
  let counter = 0;
  for (let i = 1; i <= board.length ** 2; i++) {
    if (checkCanPlace(i)) {
      return true;
    }
  }
  return false;
}
function checkCanPlace(place) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == place) {
        return true;
      }
    }
  }
  return false;
}
function placeInBoard(place, player) {
  if (checkCanPlace(place)) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] == place) {
          board[i][j] = player;
          return true;
        }
      }
    }
  } else {
    return false;
  }
}
function getResults() {
  let countX = 0;
  let countO = 0;
  for (let i of results) {
    if (i == "X") {
      countX++;
    } else if (i == "O") {
      countO++;
    }
  }
  resultsPrompt = `results - X: ${countX}, O: ${countO}`;
}

function run() {
  let player1 = prompt("enter player1 name: ");
  let player2 = prompt("enter player2 name: ");
  let currentPlayer = player1;
  let game_loop = true;
  while (game_loop) {
    let count = 0;
    let place = "";
    let board_size = prompt("enter board size: ");
    while (true) {
      if (isFinite(board_size) && parseInt(board_size) > 1) {
        createBoard(board_size);
        break;
      } else {
        board_size = prompt("enter valid board size: ");
      }
    }
    let symbol = "X";
    while (checkCanPlay()) {
      console.clear();
      printBoard();
      if (count % 2 == 0) {
        symbol = "X";
        currentPlayer = player1;
      } else {
        symbol = "O";
        currentPlayer = player2;
      }
      place = prompt(`where do u want to put ${symbol}?`);
      while (true) {
        if (checkCanPlace(place)) {
          placeInBoard(place, symbol);
          break;
        } else {
          place = prompt(`enter valid place on board:`);
        }
      }
      if (isWin() || !checkCanPlay()) {
        printBoard();
        break;
      }
      count++;
    }
    if (isWin()) {
      console.log(`the winner is: ${currentPlayer}!`);
      results.push(currentPlayer);
    } else {
      console.log(`it's a tie`);
    }
    getResults();
    console.log(resultsPrompt);
    let contin = prompt("do you want to continue playing? y/n");
    while (true) {
      if (contin == "n") {
        game_loop = false;
        break;
      } else if (contin == "y") {
        break;
      } else {
        contin = prompt("enter valid prompt! y/n");
      }
    }
  }
}

run();
