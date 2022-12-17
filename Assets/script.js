var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: "Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
        answer: "Console.log"
    },
];

//Additional Variables: 
var currentScore = 0; 
var questionNumber = 0;

// Variables with query selection to reference HTML file: 
var timeLeft = document.querySelector("#time-left");
var startGame = document.querySelector("#start-button");
var quizQuestion = document.querySelector("#quiz-question");
var card = document.querySelector("#card");

// Variables for quiz functions: 
var startingTime = 75;
var timer = 0;
var wrongAnswer = 10;