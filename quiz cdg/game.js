const question = document.querySelector(".question1");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const questionText = document.querySelector("#questionText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
 
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
 
let questions = [
    {
      question: "Sobre o episódio Queda do Muro, quem achou que a Dona Sônia poderia descobrir a queda através do Google Maps?",
      choice1: "Bentola",
      choice2: "Sheishei",
      choice3: "Fuminho",
      choice4: "Otabeia",
      answer: 2
    },
    {
      question: "Qual era o nome do cachorro que não permitia que o Koda comesse sua comida antes dele",
      choice1: "Nego",
      choice2: "Balde",
      choice3: "Apolo",
      choice4: "Bartô",
      answer: 3
    },
    {
      question: "Quantos namoros OFICIAIS a Perdida teve durante a graduação:",
      choice1: "2",
      choice2: "3",
      choice3: "4",
      choice4: "5",
      answer: 3
    },
    {
      question: "Quando a rep foi criada em 2015, onde Marys dormia todos os dias?",
      choice1: "Na sua cama de casal",
      choice2: "No sofá da sala",
      choice3: "No pufe da sala",
      choice4: "Na cama da Pitchula",
      answer: 3
    },
    {
        question: "Em uma treta histórica Giunaína, qual ato de violência se passou:",
        choice1: "Jana tacou o estojinho de maquiagem de Giu na parede e quebrou várias coisas caras",
        choice2: "Giu mordeu Jana",
        choice3: "Giu cuspiu em Jana",
        choice4: "Jana tacou seu celular em Giu",
        answer: 4
      },
      {
        question: "Como Jana queria que a rep se chamasse?",
        choice1: "República Gato Véio",
        choice2: "República Caçarolas",
        choice3: "República Chapuglobo",
        choice4: "República do Anel",
        answer: 2
      },
      {
        question: "Quem nasceu primeiro, o Koda ou o Bartô?",
        choice1: "Koda",
        choice2: "Bartô",
        choice3: "Eles nasceram no mesmo dia",
        choice4: "Sei lá, não gosto deles",
        answer: 2
      },
      {
        question: "Quem foi a bixete revelação do stralo em 2016?",
        choice1: "Morzis",
        choice2: "Frita",
        choice3: "Pompom",
        choice4: "Morena",
        answer: 1
      },
      {
        question: "Em 2016, quem Xororó alegou ser o garoto que ela estava ficando na sala e o que ela disse que eles estavam fazendo?",
        choice1: "Seu colega de sala, eles estavam estudando",
        choice2: "Seu primo, eles estavam apenas conversando",
        choice3: "Seu amigo, ele estava desabafando sobre a vida amorosa",
        choice4: "Um desconhecido, ele entrou em casa porque o portão tava aberto",
        answer: 2
      },
      {
        question: "Qual o maior número de moradoras que a CdG já teve morando na rep:",
        choice1: "19",
        choice2: "20",
        choice3: "21",
        choice4: "22",
        answer: 3
      },
      {
        question: "Quantas reuniões a CdG teve em 2016",
        choice1: "4",
        choice2: "22",
        choice3: "11",
        choice4: "32",
        answer: 1
      },
      {
        question: "Qual desses nomes NÃO é um animal que morou na rep",
        choice1: "Koda",
        choice2: "Tiffany",
        choice3: "Karen",
        choice4: "Kendra Foster",
        answer: 4
      }
  ];
 
   
const SCORE_POINTS = 10
const MAX_QUESTIONS = 12
 
startGame = () => {
questionCounter = 0
score = 0
availableQuestions = [...questions]
getNewQuestion()
}
 
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
 
    return window.location.assign('/end.html')
}
 
questionCounter++
questionText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
 
const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question
 
choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})
 
availableQuestions.splice(questionsIndex, 1)
 
acceptingAnswers = true
}

function highlightAnswerWithClass(question, answer, className) {
  var answers = document.forms.form[question];

  for (var index = 0; index < answers.length; index++) {
    if (answers[index].value === answer) {
      answers[index].classList.add(className);
    }
  }
}
 
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
 
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
 
        let classToAplly = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
 
        if(classToAplly === 'correct') {
            incrementScore(SCORE_POINTS)
        }
 
        selectedChoice.parentElement.classList.add(classToAplly)
 
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToAplly)
            getNewQuestion()
       
    }, 1000)
    })
})
 
incrementScore = num => {
    score +=num
    scoreText.innerText = score
 
}
 
startGame()
 
 

