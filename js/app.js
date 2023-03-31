//to get all p tags
const allPTags = document.querySelectorAll("p");

//to create instances of UI, Quiz
const ui = new UI();
const quiz = new Quiz();

let numberOfQuestions = 0;

const questionsArray = [
    new Quiz("what is the most popular language in programming", ["C#", "JavaScript", "Python", "Java", "Swift"], "JavaScript"),
    new Quiz("What's the capital of Turkey?", ["Ankara", "İzmir", "İstanbul", "Antalya"], "Ankara"),
    new Quiz("What's the best football team in Turkey?", ["Galatasaray", "Beşiktaş", "Trabzonspor", "Göztepe"], "Beşiktaş"),
    new Quiz("What's the best programming language in computer?", ["Java", "Javascript", "C#", "Python"], "Python"),
    new Quiz("Which degree freezes water?", ["0 C", "5 C", "100 C", "24 C"], "0 C")
]

ui.showInfosToUI(questionsArray[numberOfQuestions]);

// allPTags.forEach(item => {
//     item.addEventListener("click", () => {ui.handleClickForAnswer(item.innerHTML, questionsArray[numberOfQuestions])})
// })
 
allPTags.forEach(item => {
    item.addEventListener("click", () => {
        if(numberOfQuestions > questionsArray.length- 1) {
            alert("questions are finished")
            return
        }
        quiz.checkAnswer(item.innerHTML, questionsArray[numberOfQuestions].correctAnswer);
        ui.showInfosToUI(questionsArray[numberOfQuestions]);
        numberOfQuestions++;
    })
})