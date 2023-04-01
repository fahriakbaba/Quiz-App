class Quiz {
    constructor(questions, answers, correctAnswer) {
        this.questions = questions;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.score = 0;
    }

    //to control answer
    checkAnswer(answer, correct) {
        console.log("answer: ", answer);
        console.log("correct: ", correct);
        if(correct === answer) {
            this.score++;
        }
        console.log("score: ",this.score);
    }

    //to get latest score point
    getQuizScore() {
        return this.score;
    }
}