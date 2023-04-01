//to get all p tags
const allPTags = document.querySelectorAll("p");
const startButton = document.querySelector("#btn-start");
const containerDiv =  document.querySelector(".container");
const info = document.querySelector(".starter-info");
const input = document.querySelector("input");

//to create instances of UI, Quiz
const ui = new UI();
const quiz = new Quiz();

let numberOfQuestions = 0;

//to create data from Quiz class
const questionsArray = [
    new Quiz("what is the most popular language in programming?", ["C#", "JavaScript", "Python", "Java", "Swift"], "JavaScript"),
    new Quiz("What's the capital of Turkey?", ["Ankara", "İzmir", "İstanbul", "Antalya"], "Ankara"),
    new Quiz("What's the best football team in Turkey?", ["Galatasaray", "Beşiktaş", "Trabzonspor", "Göztepe"], "Beşiktaş"),
    new Quiz("What's the best programming language in computer?", ["Java", "Javascript", "C#", "Python"], "Python"),
    new Quiz("Which degree freezes water?", ["0&#176; C", "5&#176; C", "100&#176; C", "24&#176; C"], "0° C")
]

//to display infos when page is loaded at the beginnig of page
document.body.onload = function () {
    ui.showInfosToUI(questionsArray[numberOfQuestions]);
}

startButton.addEventListener("click", () => {
    if (input.value === "") {
        return;
    }
    containerDiv.style.display = "block";
    info.style.display = "none";
    ui.assignName(input.value);
});

//to traverse all p tags
allPTags.forEach(item => {
    item.addEventListener("click", () => {

        quiz.checkAnswer(item.innerHTML, questionsArray[numberOfQuestions].correctAnswer);
        numberOfQuestions++;
        if (numberOfQuestions > questionsArray.length - 1) {
            ui.showScoreToUI(quiz.getQuizScore(), questionsArray.length);
            return;
        }
        ui.showInfosToUI(questionsArray[numberOfQuestions]);
    })
})