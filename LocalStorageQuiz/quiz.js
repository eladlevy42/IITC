let correctAns = ["A", "B", "C", "A", "B", "C", "D", "A", "B", "D"];
let count = 0;
let questionsArr = [];
let userAnswers = [];
let userAnswersJson = JSON.stringify(userAnswers);
initUserAnswer();
function initUserAnswer() {
  if (localStorage.getItem("userAns") == null) {
    let userAnswers = [];
    let userAnswersJson = JSON.stringify(userAnswers);
    localStorage.setItem("userAns", userAnswersJson);
  } else {
    userAnswersJson = localStorage.getItem("userAns");
    userAnswers = JSON.parse(userAnswersJson);
  }
  printQuestions();
}
function reset() {
  userAnswers = [];
  userAnswersJson = JSON.stringify(userAnswers);
  localStorage.setItem("userAns", userAnswersJson);
  printQuestions();
  document.querySelector("#score").style = "display: none";
}
function createQuestions() {
  let questions = [
    {
      Q: "What car company produces the Mustang?",
      A: "A) Ford <br/> B) Chevrolet <br/> C) Dodge <br/> D) Toyota",
    },
    {
      Q: "What car company produces the Camaro?",
      A: "A) Ford <br/> B) Chevrolet <br/> C) Dodge <br/> D) Toyota",
    },
    {
      Q: "What car company produces the Challenger?",
      A: "A) Ford <br/> B) Chevrolet <br/> C) Dodge <br/>D) Toyota",
    },
    {
      Q: "What car company produces the Civic?",
      A: "A) Honda <br/>  B) Toyota <br/>  C) Nissan <br/>  D) Hyundai",
    },
    {
      Q: "What car company produces the Corolla?",
      A: "A) Honda <br/>  B) Toyota <br/>  C) Nissan <br/>  D) Hyundai",
    },
    {
      Q: "What car company produces the Altima?",
      A: "A) Honda <br/>  B) Toyota <br/>  C) Nissan <br/>  D) Hyundai",
    },
    {
      Q: "What car company produces the Sonata?",
      A: "A) Honda <br/>  B) Toyota <br/>  C) Nissan <br/>  D) Hyundai",
    },
    {
      Q: "What car company produces the Mustang Mach-E?",
      A: "A) Ford <br/> B) Chevrolet <br/> C) Dodge <br/> D) Tesla",
    },
    {
      Q: "What car company produces the Bolt EV?",
      A: "A) Ford <br/> B) Chevrolet <br/> C) Dodge <br/> D) Tesla",
    },
    {
      Q: "What car company produces the Model S?",
      A: "A) Ford <br/> B) Chevrolet <br/> C) Dodge <br/> D) Tesla",
    },
  ];
  questionsArr = questions.map((question) => {
    let answers = question.A.split("<br/>").map((answer) => answer.trim());
    return {
      Q: question.Q,
      A: answers[0],
      B: answers[1],
      C: answers[2],
      D: answers[3],
    };
  });
  console.log(questionsArr);
}
function printQuestions() {
  createQuestions();
  let quizElement = document.querySelector("#quiz");
  quizElement.innerHTML = "<ol>";
  for (let i = 0; i < questionsArr.length; i++) {
    quizElement.innerHTML += `
      <li>${questionsArr[i].Q}
        <ul class="a" id = 'q${i}A' onclick="checkAns('${i}','A')"> ${questionsArr[i].A}</ul>
        <ul class="a" id = 'q${i}B' onclick="checkAns('${i}','B')"> ${questionsArr[i].B}</ul>
        <ul class="a" id = 'q${i}C' onclick="checkAns('${i}','C')"> ${questionsArr[i].C}</ul>
        <ul class="a" id = 'q${i}D' onclick="checkAns('${i}','D')"> ${questionsArr[i].D}</ul>
      </li>`;
  }
  quizElement.innerHTML += "</ol>";
}
function updateCount() {
  count = 0;
  for (let i in userAnswers) {
    if (userAnswers[i] == correctAns[i]) {
      count += 10;
    }
  }
  console.log(count);
}
function colorAns() {
  for (let i in userAnswers) {
    let answerRow = document.querySelector(`#q${i}${userAnswers[i]}`);
    //RESETING THE COLOR
    document.querySelector(`#q${i}A`).style = "color:black";
    document.querySelector(`#q${i}B`).style = "color:black";
    document.querySelector(`#q${i}C`).style = "color:black";
    document.querySelector(`#q${i}D`).style = "color:black";
    //COLOR THE SELECTED ANSWER
    if (userAnswers[i] == correctAns[i]) {
      answerRow.style = "color:green";
    } else {
      answerRow.style = "color:red";
    }
  }
}
function checkAns(qNum, ans) {
  userAnswers[qNum] = ans;
  userAnswersJson = JSON.stringify(userAnswers);
  localStorage.setItem("userAns", userAnswersJson);
}
function revealScore() {
  updateCount();
  colorAns();
  document.querySelector("#score").innerText = `your score is: ${count}/100`;
  document.querySelector("#score").style = "display: block";
}
