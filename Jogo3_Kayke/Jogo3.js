const questions = [
    {
        question: "Qual é o planeta mais próximo do Sol?",
        choices: ["Terra", "Vênus", "Mercúrio"],
        correctAnswer: "Mercúrio"
    },
    {
        question: "Qual é a maior lua de Júpiter?",
        choices: ["Ganimedes", "Io", "Europa"],
        correctAnswer: "Ganimedes"
    },
    {
        question: "Quantos planetas existem no sistema solar?",
        choices: ["8", "9", "10"],
        correctAnswer: "8"
    },
     {
        question: "___________________ é o planeta mais próximo do Sol. Esse planeta é capaz de refletir cerca de 12% da luz solar, sendo um dos astros mais brilhantes vistos da Terra. ",
        choices: ["Mercúrio", "Saturno", "Vênus"],
        correctAnswer: "Mercúrio"
    },
   {
        question: "Os planetas gasosos são compostos por gases, como hidrogênio e hélio. Qual o nome do maior planeta gasoso do Sistema Solar?",
        choices: ["Mercúrio", "Saturno", "Netuno"],
        correctAnswer: "Netuno"
    },
    {
        question: "O movimento de rotação realizado pelo planeta Terra tem como consequência principal a:",
        choices: ["sucessão dos dias e das noites", "ocorrência das fases da Lua", "definição das temperaturas."],
        correctAnswer: "sucessão dos dias e das noites"
    },
   {
        question: "O planeta Terra realiza vários movimentos, sendo os dois principais o de rotação, realizado em torno de si mesmo, e o movimento realizado em torno do Sol, sendo corretamente chamado de:",
        choices: ["Rotação", "Mutação", "Translação"],
        correctAnswer: "Translação"
    },
    {
        question: "Qual o nome do planeta que é conhecido como planeta-anão?",
        choices: ["Lua", "Pangeia", "Plutão"],
        correctAnswer: "Plutão"
    },
   {
        question: "A energia do Sol, vital para a compreensão dos fenômenos meteorológicos e climáticos, chega à Terra aproximadamente em 11 minutos. Para a compreensão dos fenômenos meteorológicos e climáticos, é também denominada:",
        choices: ["radiação de ondas longas.", "convecção solar", "radiação de ondas curtas"],
        correctAnswer: "radiação de ondas curtas"
    },
  {
        question: "O Sistema Solar possui quatro planetas rochosos, também chamados de telúricos, formados basicamente por diversos metais e rochas. Quais são eles?",
        choices: ["Vênus, Terra, Saturno e Júpiter.", "Mercúrio, Vênus, Terra e Marte", "Saturno, Mercúrio, Marte e Terra."],
        correctAnswer: "radiação de ondas curtas"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    
    choicesElement.innerHTML = "";
    question.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.className = "choice";
        button.textContent = choice;
        button.addEventListener("click", checkAnswer);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Concluído!";
    choicesElement.innerHTML = "";
    scoreElement.textContent = `Sua pontuação: ${score} de ${questions.length}`;
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
});

displayQuestion();

