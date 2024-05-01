let count = 0;
let typeOfCell = 0;

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
document.querySelectorAll(".disabled").forEach((element) => {
  element.style.pointerEvents = "none";
});

function flagIt(id) {
  document.querySelectorAll(`#N${id}`).innerText = "F";
}
function createBoard() {
  let board = document.querySelector("#board");
  for (let iC = 1; iC <= 100; iC++) {
    board.innerHTML += `<div style ='display:none' class = 'numberCell' id = 'N${String(
      iC
    )}'></div><div  class = 'squareCell' id = 'S${String(
      iC
    )}' onclick = revealMine(${String(iC)})>
    </div>`;
  }
}
function enterValue(sId) {
  let mines = [];
  let minesLengh = Math.floor(Math.random() * 25);
  for (let i = 0; i < minesLengh; i++) {
    mines[i] = Math.floor(Math.random() * 100) + 1;
  }
  console.log(mines);
  for (
    let j = 1;
    j <= 100;
    j++ //enter mines
  ) {
    if (mines.indexOf(j) != -1 && j != sId) {
      document.querySelector(`#N${j}`).innerText = "M";
    }
  }
  for (
    let j = 1;
    j <= 100;
    j++ //enter noneMines
  ) {
    if (mines.indexOf(j) == -1) {
      document.querySelector(`#N${j}`).innerText = nearMines(j);
    }
  }
}

function nearMines(id) {
  let mineCount = 0;
  id = parseInt(id);
  try {
    if (
      //left
      document.querySelector(`#N${id - 1}`).innerText == "M" &&
      (id - 1) % 10 != 0
    ) {
      mineCount++;
    }
  } catch (err) {}
  try {
    //right
    if (
      (id + 1) % 10 != 0 &&
      document.querySelector(`#N${id + 1}`).innerText == "M" &&
      (id + 1) % 10 != 0
    ) {
      mineCount++;
    }
  } catch (err) {}
  //top
  try {
    if (document.querySelector(`#N${id - 10}`).innerText == "M") {
      mineCount++;
    }
  } catch {}
  //top left
  try {
    if (
      document.querySelector(`#N${id - 11}`).innerText == "M" &&
      (id - 1) % 10 != 0
    ) {
      mineCount++;
    }
  } catch {}
  //top right
  try {
    if (
      document.querySelector(`#N${id - 9}`).innerText == "M" &&
      (id + 1) % 10 != 0
    ) {
      mineCount++;
    }
  } catch {}
  //bottom
  try {
    if (document.querySelector(`#N${id + 10}`).innerText == "M") {
      mineCount++;
    }
  } catch {}
  //bottom right
  try {
    if (
      document.querySelector(`#N${id + 11}`).innerText == "M" &&
      (id + 1) % 10 != 0
    ) {
      mineCount++;
    }
  } catch {}
  //bottom left
  try {
    if (
      document.querySelector(`#N${id + 9}`).innerText == "M" &&
      (id - 1) % 10 != 0
    ) {
      mineCount++;
    }
  } catch {}
  if (mineCount == 0) {
    mineCount = "";
  }
  return mineCount;
}

function revealMine(sId) {
  count++;
  if (count == 1) {
    enterValue(sId);
    document.querySelector(`#N${sId}`).innerText = nearMines(sId);
    document.querySelector(`#S${sId}`).style = "display:none";
    document.querySelector(`#N${sId}`).style = "display:block";
  }

  //if is mine
  if (document.querySelector(`#N${sId}`).innerText == "M") {
    for (let i = 1; i <= 100; i++) {
      document.querySelector(`#S${i}`).style = "display:none";
      document.querySelector(`#N${i}`).style = "display:block";
    }
  } else if (document.querySelector(`#N${sId}`).innerText == "") {
    document.querySelector(`#S${sId}`).style = "display:none";
    document.querySelector(`#N${sId}`).style = "display:block";
    console.log(sId);
    //revealAround(sId);
  } else {
    document.querySelector(`#S${sId}`).style = "display:none";
    document.querySelector(`#N${sId}`).style = "display:block";
  }
}
function revealAround(id) {
  if (id <= 100) {
    let cellNum = document.querySelector(`#N${id}`);
    let cellSquare = document.querySelector(`#S${id}`);

    if (cellNum.innerText == "M") {
      console.log("break");
      return false;
    } //if its not a bomb:
    cellNum.style = "display: block";
    cellSquare.style = "display: none";
    if (cellNum.innerText != "") {
      //if its not empty
      return;
    }
    //if its empty
    if (id == 100) {
      //right and bottom
      revealAround(id - 1); //left
      revealAround(id - 10); //top
      revealAround(id - 11); //top left
    } else if (id == 10) {
      //right and top
      revealAround(id - 1); //left
      revealAround(id + 10); //bottom
      revealAround(id + 9); //bottom left
    } else if (id == 91) {
      //left and bottom
      revealAround(id - 10); //top
      revealAround(id - 9); //top right
      revealAround(id + 1); //right;
    } else if (id == 1) {
      //left and top
      revealAround(id + 10); //bottom
      revealAround(id + 11); //bottom right
      revealAround(id + 1); //right;
    } else if ((id - 1) % 10 == 0) {
      //left
      revealAround(id - 10);
      revealAround(id - 9);
      revealAround(id + 1);
      revealAround(id + 9);
      revealAround(id + 10);
      revealAround(id + 11);
    } else if (id % 10 == 0) {
      revealAround(id - 11);
      revealAround(id - 10);
      revealAround(id - 9);
      revealAround(id - 1);
      revealAround(id + 9);
      revealAround(id + 10);
      revealAround(id + 11);
      //right
    } else if (id > 90) {
      revealAround(id - 11);
      revealAround(id - 10);
      revealAround(id - 9);
      revealAround(id - 1);
      revealAround(id + 1);
    } else if (id < 11) {
      revealAround(id - 1);
      revealAround(id + 1);
      revealAround(id + 9);
      revealAround(id + 10);
      revealAround(id + 11);
    } else {
      revealAround(id - 11);
      revealAround(id - 10);
      revealAround(id - 9);
      revealAround(id - 1);
      revealAround(id + 1);
      revealAround(id + 9);
      revealAround(id + 10);
      revealAround(id + 11);
    }
    return;
  }
}
//-11 -10 -9
//-1   X  +1
//+9  +10 +11
function convertNumToinnerText(num) {
  if (num == 1) {
    return "M";
  } else {
    return "0";
  }
}

createBoard();
