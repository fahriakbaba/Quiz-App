class UI {
    constructor() {
        this.question = document.querySelector(".quiz-question");
        this.answers = [document.querySelector("p:nth-child(1)"), document.querySelector("p:nth-child(2)"), document.querySelector("p:nth-child(3)"), document.querySelector("p:nth-child(4)")];
    }

    showInfosToUI(infos) {
        console.log(infos);
        this.answers.forEach((item, index) => {
            item.innerHTML = infos.answers[index];
        })
        this.question.innerHTML = infos.questions
    }

    showScoreToUI(score, numbersOfQuestions) {
        this.question.style.display = "none";
        document.querySelector(".quiz-answers").innerHTML = `
        <p class="quiz-score">This quiz finished and your quiz score: <span class="big-size">${score}/${numbersOfQuestions}</span></p>
        <button class="btn" onclick="location.reload()">Restart</button>
        `;
    }
}