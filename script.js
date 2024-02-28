var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submitscore");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback");
var reStartBtn = document.querySelector("#restart");

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
