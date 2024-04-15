let operatonSymbol = "";
let num1 = "";
let num2 = "";
function getResult() {
  if (operatonSymbol != "" && num1 != "" && num2 != "") {
    document.querySelector("#number").innerText = parseInt(
      `${parseInt(num1)} ${operatonSymbol} ${parseInT(num2)}`
    );
  } else {
    document.querySelector("#number").innerText = "0";
  }
}
function updateNum() {
  if (num1 == "") {
    num1 = document.querySelector(`#number`).outerText;
  } else if (num2 == "") {
    num2 = document.querySelector(`#number`).outerText;
  } else {
    document.querySelector(`#number`).innerText = getResult();
    num1 = document.querySelector(`#number`).outerText;
  }
}
function getSymbol(symbol) {
  if (symbol == "÷") {
    operatonSymbol = "/";
  } else if (symbol == "×") {
    operatonSymbol = "*";
  } else if (symbol == "+") {
    operatonSymbol = "+";
  } else if (symbol == "-") {
    operatonSymbol = "-";
  }
  updateNum();
  document.querySelector(`#${symbol}`).style.backgroundColor = "#FEE38D";
}
function eraseNumber() {
  document.querySelector("#number").innerHTML = "0";
}
function colorButtonReset() {
  document.querySelector(".Opbutton").style.background = "#CBD6FE";
}
function getNumber(num) {
  let numberElem = document.querySelector("#number");
  colorButtonReset();
  if (numberElem.outerText == 0 || num1 != "") {
    numberElem.innerText = num;
  } else {
    numberElem.innerText += num;
  }
}
