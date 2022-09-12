let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

function showQuestion () {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    let pct = Math.floor((currentQuestion / questions.length) * 100);

    document.querySelector('.progress--bar').style.width = `${pct}%`;

    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';

    document.querySelector('.question').innerHTML = q.question;
    document.querySelector('.options').innerHTML = '';
  
    let optionsHTML = '';
    for (let i in q.options) {
      optionsHTML += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span> ${q.options[i]}</div>`;
    }
    document.querySelector('.options').innerHTML = optionsHTML;

    document.querySelectorAll('.options .option').forEach(item => {
      item.addEventListener('click', optionClickEvent);
    });

  } else {
    finishQuiz();
  }
} 

function optionClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute('data-op'));

  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswer++;
  }
  currentQuestion++;
  showQuestion();
}

function finishQuiz() {
  let points = Math.floor((correctAnswer / questions.length) * 100);

  if (points < 30) {
    document.querySelector('.scoreText1').innerHTML = "Você foi mal...";
    document.querySelector('.scorePct').style.color = "red";
  } else if (points >= 30 && points < 70) {
    document.querySelector('.scoreText1').innerHTML = "Você foi ótimo...";
    document.querySelector('.scorePct').style.color = "blue";
  } else if (points >= 70) {
    document.querySelector('.scoreText1').innerHTML = "Parabéns...";
    document.querySelector('.scorePct').style.color = "#00FF00";
  }

  document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
  document.querySelector('.scoreText2').innerHTML = `Você responde ${questions.length} questões e acertou ${correctAnswer}.`;
  
  document.querySelector('.scoreArea').style.display = 'block';
  document.querySelector('.questionArea').style.display = 'none';
  document.querySelector('.progress--bar').style.width = `100%`;
}

function resetEvent() {
  correctAnswer = 0;
  currentQuestion = 0;
  showQuestion();
}