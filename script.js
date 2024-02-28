var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submitscore");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback");
var reStartBtn = document.querySelector("#restart");
var correctAnswers = 0;
var scoreMultiplier = 10;

var questions = [
    {
        prompt: "Inside which HTML element do we put the Javascript?",
       choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
        answer: "<script>"
    },
    {
        prompt: "Which of the following are used to define a varaible in Javascript?",
       choices: ["var", "let", "both a and b", "none of the above"],
        answer: "both a and b"
    },
    {
        prompt: "Which of the following is used to display data in some form using Javascript?",
        choices: ["console.log()", "data.log()", "console.data()", "all of the above"],
        answer: "console.log()"
    },
    {
        prompt: "What is the abreviation for Javascript?",
        choices: ["HTML", "CSS", "JScript", "JS"],
        answer: "JS"
    },
    {
        prompt: "How do you add a comment in your Javascript code that will not be executed?",
        choices: ["// This is a comment", "<!-- This is a comment -->", "/** This is a comment **/", "# This is a comment #"],
        answer: "// This is a comment"
    },
    {
        prompt: "JavaScript file has an extension of...",
        choices: [".java", ".js", ".javascript", ".xml"],
        answer: ".js"
    },
    {
        prompt: "How do you write a message in an alert box?",
        choices: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        prompt: "Which built-in method returns the string representation of the number's value?",
        choices: ["toValue()", "toNumber()", "toString()", "None of the above"],
        answer: "toString()"
    },
    {
        prompt: "Javascript is a _____ language?",
        choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer: "Object-Oriented"
    },
    {
        prompt: "How can a datatype be declared to be a constant type?",
        choices: ["var", "const", "let", "constant"],
        answer: "const"
    },
];

var currentQuestionIndex = 0;
var time = questions.length * 7.5;
var timerId;

function quizStart() {
    timerId = setInterval(clockTick,1000);
	timerEl.textContent = time;
	let landingScreenEl = document.getElementById("startscreen");
	landingScreenEl.setAttribute("class", "hide");
	questionsEl.removeAttribute("class");
	getQuestion();
}


function getQuestion() {
	let currentQuestion = questions[currentQuestionIndex];
	let promptEl = document.getElementById("quizquestions");
	promptEl.textContent = currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.choices.forEach(
		function (choice, i) {
			let choiceBtn = document.createElement("button");
			choiceBtn.setAttribute("value", choice);
			choiceBtn.textContent = i + 1 + ". " + choice;
			choiceBtn.onclick = questionClick;
			choicesEl.appendChild(choiceBtn);
		}
	);
}

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = `Wrong! The correct answer is: ${questions[currentQuestionIndex].answer}.`;
        feedbackEl.style.color = "red";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        correctAnswers++; 
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    clearInterval(timerId);
    let endScreenEl = document.getElementById("quizend");
    endScreenEl.removeAttribute("class");
    let finalScoreEl = document.getElementById("scorefinal");
    let finalScore = correctAnswers * scoreMultiplier;
    finalScoreEl.textContent = finalScore; 
    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
		let newScore = {score: correctAnswers * scoreMultiplier, name: name,};
		highscores.push(newScore);
		window.localStorage.setItem("highscores",JSON.stringify(highscores));
		alert("Your score has been submitted");
	}
}


function checkForEnter(event) {
	if (event.key === "Enter") {saveHighscore(); 
        alert("Your score has been submitted");
	}
}

nameEl.onkeyup = checkForEnter;
submitBtn.onclick = saveHighscore;
startBtn.onclick = quizStart;
