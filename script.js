const quizdata = [
  {
    question: "which language runs in a web browser?",
    a: "java",
    b: "C",
    c: "python",
    d: "javascript",
    correct: "d",
  },

  {
    question: "what does CSS stand for?",
    a: "central style sheets",
    b: "Cascading style sheets",
    c: "cascading simple sheets",
    d: "casrs suvs sailboats",
    correct: "b",
  },

  {
    question: "which language runs in a web browser?",
    a: "java",
    b: "C",
    c: "python",
    d: "javascript",
    correct: "d",
  },

  {
    question: "which language runs in a web browser?",
    a: "java",
    b: "C",
    c: "python",
    d: "javascript",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerels = document.querySelectorAll(".answer");
const questionel = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentquiz = 0;
let score = 0;

loadquiz();

function loadquiz() {
  deselectanswer();
  const currentquizdata = quizdata[currentquiz];

  questionel.innerText = currentquizdata.question;
  a_text.innerText = currentquizdata.a;
  b_text.innerText = currentquizdata.b;
  c_text.innerText = currentquizdata.c;
  d_text.innerText = currentquizdata.d;
}

function deselectanswer() {
  answerels.forEach((answerel) => (answerel.checked = false));
}

function getSelected() {
  let answer;

  answerels.forEach((answerel) => {
    if (answerel.checked) {
      answer = answerel.id;
    }
  });
  return answer;
}

submitbtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizdata[currentquiz].correct) {
      score++;
    }
    currentquiz++;

    if (currentquiz < quizdata.length) {
      loadquiz();
    } else {
      quiz.innerHTML = `<h2>you answered ${score}/${quizdata.length} questions  correctly  </h2>

                <button onclick = "location.reload()" >
                Reload</button>
                `;
    }
  }
});
