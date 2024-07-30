document.addEventListener('DOMContentLoaded', (event) => {
const questions = [
    {
        question:"Which is large animal in the world?",
        answers:[
            {text:"Shark", correct: false},
            {text:"Blue Whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Shark", correct: false},
        ]
    },
{
    question: "What is the capital of France?",
    answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false }
    ]
},
{
    question: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
    ]
},
{
    question: "What is the boiling point of water?",
    answers: [
        { text: "90°C", correct: false },
        { text: "100°C", correct: true },
        { text: "110°C", correct: false },
        { text: "120°C", correct: false }
    ]
},
{
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "Jane Austen", correct: false }
    ]
},
{
    question: "What is the smallest prime number?",
    answers: [
        { text: "0", correct: false },
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false }
    ]
},
{
    question: "Which element has the chemical symbol 'O'?",
    answers: [
        { text: "Gold", correct: false },
        { text: "Oxygen", correct: true },
        { text: "Osmium", correct: false },
        { text: "Oganesson", correct: false }
    ]
},
{
    question: "How many continents are there on Earth?",
    answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false }
    ]
},
{
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "South Korea", correct: false },
        { text: "Thailand", correct: false }
    ]
},
{
    question: "What is the chemical formula for water?",
    answers: [
        { text: "CO2", correct: false },
        { text: "H2O", correct: true },
        { text: "O2", correct: false },
        { text: "H2", correct: false }
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML =`Play Again`;
    nextButton.style.display =`block`;
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
});