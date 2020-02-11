
(function() {

 function Question(question, possibleAnswers, correctAnswer) {
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.possibleAnswers.length; i++) {
        console.log(i + 1 + ': ' + this.possibleAnswers[i]);
    }
}

Question.prototype.isAnswerCorrect = function(answer, callback) {
    var sc;
    if (this.correctAnswer === (answer - 1)) {
        this.score += 1;
        console.log('Correct answer, yay!!');
        sc = callback(true);
    } else {
        console.log('Wrong answer, try again.');
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log(' ------- ');
}

function nextQuestion() {
    selectedQuestionIndex = Math.floor(Math.random() * questions.length);
    questions[selectedQuestionIndex].displayQuestion();

    var response = prompt('Please select the correct answer (just type the number):');
    if (response !== 'exit') {
        parseInt(questions[selectedQuestionIndex].isAnswerCorrect(response, keepScore));
        nextQuestion();
    } else {
        console.log('Thanks for playing!');
        console.log('Your final score was: ' + keepScore());
    }
}



var questionOne = new Question('Is learning JS fun?', ['no', 'yes', 'sometimes'],2);
var questionTwo = new Question('What is the capital of France?', ['Paris', 'Lyon', 'London', 'Marseille'],0);
var questionThree = new Question('Do you understand currying?', ['not yet', 'yes', 'I think so but need practice'], 2);
var questions = [questionOne, questionTwo, questionThree];

function score() {
    var sc = 0;
    return function(isCorrect) {
        if (isCorrect) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

nextQuestion();

})();
