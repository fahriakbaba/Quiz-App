class Quiz {
    constructor(questions, answers, correctAnswer) {
        this.questions = questions;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.score = 0;
    }

    checkAnswer(answer, correct) {
        console.log("answer: ", answer);
        console.log("correct: ", correct);
        if(correct === answer) {
            this.score++;
        }
        console.log("score: ",this.score);
    }

    getQuizScore() {
        return this.score;
    }
}