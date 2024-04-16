let targetArr = createRandomArr();
let count = 1;
let bulls = 0;
let cows = 0;
let userArr = [];
function createRandomArr() {
  let arr = [
    Math.random() * 9,
    Math.random() * 9,
    Math.random() * 9,
    Math.random() * 9,
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (arr[j] == arr[i] && i != j) {
        while (true) {
          let randomNum = Math.random() * 9;
          if (randomNum != arr[i]) {
            arr[i] = Math.random() * 9;
            break;
          }
        }
      }
    }
  }
  return arr;
}

function Go(id) {
  for (let i = 0; i < 4; i++) {
    if (isNaN(document.querySelector(`#r${id}${i}`).value)) {
      userArr[i] = i + 1;
    } else {
      userArr[i] = document.querySelector(`#r${id}${i}`).value;
    }
  }
  if (!checkDuplicate()) {
    checkBullsCows();
    if (bulls == 4) {
      document.querySelector(".numberWrapper").innerHTML =
        '<div class="numbers"> Well Done! </div>';
      document.querySelector("button").style.visibility = "hidden";
    } else {
      document.querySelector(`#r${count}btn`).style.visibility = "hidden";
      count++;
      document.querySelector(
        "#numberWrapper"
      ).innerHTML = `<input type="number" id="r${count}n0" class="numberBlock" placeholder="1" /><input type="number" id="r${count}n1" class="numberBlock" placeholder="2" /><input type="number" id="r${count}n2" class="numberBlock" placeholder="3" /><input type="number" id="r${count}n3" class="numberBlock" placeholder="4" /><div class="result" id="b${count}"></div><button id="r${count}btn" onclick="Go('${count}')">Go</button><div class="result" id="c${count}"></div>`;
    }
  }
}
function checkDuplicate() {
  for (let i in userArr) {
    for (let j in userArr)
      if (j != i && userArr[i] == userArr[j]) {
        return true;
      }
  }
  return false;
}

function checkBullsCows() {
  bulls = 0;
  cows = 0;
  for (let i in userArr) {
    for (let j in targetArr) {
      if (j != i && targetArr[j] == userArr[i]) {
        cows++;
      }
      if (j == i && targetArr[j] == userArr[i]) {
        bulls++;
      }
    }
  }
  document.querySelector(`b${count}`).style.visibility = "visible";
  document.querySelector(`c${count}`).style.visibility = "visible";
  document.querySelector(`b${count}`).innerText = bulls;
  document.querySelector(`c${count}`).innerText = cows;
}
