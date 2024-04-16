let num1 = 0;
let num2 = 0;
let count = 0;
let opSymbol = "";
let numberElem = document.querySelector("#number");
function eraseNumber() {
  num1 = 0;
  num2 = 0;
  count = 0;
  opSymbol = "";
  numberElem.innerText = "0";
}
function printResult() {
  num2 = parseFloat(numberElem.textContent);
  numberElem.innerText = getResult();
  num1 = 0;
  num2 = 0;
}

function getResult() {
  switch (opSymbol) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "*":
      return num1 * num2;
      break;
    default:
      return "error";
  }
}
function getSymbol(symbol) {
  opSymbol = symbol;
  if (num1 != 0) {
    num2 = parseFloat(numberElem.textContent);
    printResult();
  } else {
    num1 = parseFloat(numberElem.textContent);
  }
  numberElem.innerText = "0";
}

function getNumber(num) {
  if (numberElem.textContent == "0" || numberElem.textContent == getResult()) {
    numberElem.textContent = num;
  } else {
    numberElem.textContent += num;
  }
}
