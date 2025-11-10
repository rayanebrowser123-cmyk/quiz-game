const questions = [
    {
        question: "Quelle est la capitale de l'Australie ?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false },
        ]
    },
    {
        question: "Qui a peint La Joconde ?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Léonard de Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false },
        ]
    },
    {
        question: "Quel est le plus long fleuve du monde ?",
        answers: [
            { text: "Le Nil", correct: false },
            { text: "Le Yangtsé", correct: false },
            { text: "L'Amazone", correct: true },
            { text: "Le Mississippi", correct: false },
        ]
    },
    {
        question: "Combien y a-t-il de côtés dans un heptagone ?",
        answers: [
            { text: "Six", correct: false },
            { text: "Sept", correct: true },
            { text: "Huit", correct: false },
            { text: "Neuf", correct: false },
        ]
    },
    {
        question: "En quelle année le mur de Berlin est-il tombé ?",
        answers: [
            { text: "1985", correct: false },
            { text: "1989", correct: true },
            { text: "1991", correct: false },
            { text: "1993", correct: false },
        ]
    },
    {
        question: "Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
        answers: [
            { text: "Oxygène", correct: false },
            { text: "Azote", correct: true },
            { text: "Dioxyde de carbone", correct: false },
            { text: "Argon", correct: false },
        ]
    },
    {
        question: "Quel écrivain a créé le personnage de Sherlock Holmes ?",
        answers: [
            { text: "Agatha Christie", correct: false },
            { text: "Edgar Allan Poe", correct: false },
            { text: "Arthur Conan Doyle", correct: true },
            { text: "Jules Verne", correct: false },
        ]
    },
    {
        question: "Dans quel sport utilise-t-on le terme 'eagle' ?",
        answers: [
            { text: "Baseball", correct: false },
            { text: "Tennis", correct: false },
            { text: "Golf", correct: true },
            { text: "Football américain", correct: false },
        ]
    },
    {
        question: "Quel pays est le plus grand producteur de café au monde ?",
        answers: [
            { text: "Colombie", correct: false },
            { text: "Vietnam", correct: false },
            { text: "Brésil", correct: true },
            { text: "Éthiopie", correct: false },
        ]
    },
    {
        question: "Qui est l'auteur de la phrase 'Je pense, donc je suis' ?",
        answers: [
            { text: "Platon", correct: false },
            { text: "Sartre", correct: false },
            { text: "Voltaire", correct: false },
            { text: "René Descartes", correct: true },
        ]
    },
    {
        question: "Quel est le seul métal liquide à température ambiante ?",
        answers: [
            { text: "L'Or", correct: false },
            { text: "Le Mercure", correct: true },
            { text: "Le Brome", correct: false },
            { text: "Le Sodium", correct: false },
        ]
    },
    {
        question: "Combien de joueurs compte une équipe de basketball sur le terrain ?",
        answers: [
            { text: "Six", correct: false },
            { text: "Cinq", correct: true },
            { text: "Quatre", correct: false },
            { text: "Sept", correct: false },
        ]
    },
    {
        question: "Quelle planète est surnommée l'« Étoile du Berger » ?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Vénus", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercure", correct: false },
        ]
    },
    {
        question: "Qui était le premier Empereur romain ?",
        answers: [
            { text: "Jules César", correct: false },
            { text: "Néron", correct: false },
            { text: "Constantin", correct: false },
            { text: "Auguste", correct: true },
        ]
    },
    {
        question: "Quelle est la monnaie officielle du Japon ?",
        answers: [
            { text: "Le Won", correct: false },
            { text: "Le Dollar", correct: false },
            { text: "Le Yuan", correct: false },
            { text: "Le Yen", correct: true },
        ]
    },
    {
        question: "Quel instrument est souvent associé à Louis Armstrong ?",
        answers: [
            { text: "Le Saxophone", correct: false },
            { text: "La Clarinette", correct: false },
            { text: "La Trompette", correct: true },
            { text: "Le Piano", correct: false },
        ]
    },
    {
        question: "Quelle est la plus grande île de la Méditerranée ?",
        answers: [
            { text: "La Corse", correct: false },
            { text: "La Crète", correct: false },
            { text: "La Sicile", correct: true },
            { text: "Sardaigne", correct: false },
        ]
    },
    {
        question: "Quel est le nom du chien de Tintin ?",
        answers: [
            { text: "Idéfix", correct: false },
            { text: "Rantanplan", correct: false },
            { text: "Milou", correct: true },
            { text: "Pluto", correct: false },
        ]
    },
    {
        question: "Combien de temps dure un mandat présidentiel en France ?",
        answers: [
            { text: "Quatre ans", correct: false },
            { text: "Cinq ans", correct: true },
            { text: "Sept ans", correct: false },
            { text: "Six ans", correct: false },
        ]
    },
    {
        question: "Quel élément chimique a pour symbole $\text{Fe}$ ?",
        answers: [
            { text: "Le Fluor", correct: false },
            { text: "Le Fer", correct: true },
            { text: "Le Brome", correct: false },
            { text: "L'Argent", correct: false },
        ]
    },
    {
        question: "Quel est le titre de l'hymne national français ?",
        answers: [
            { text: "Le Chant du Départ", correct: false },
            { text: "La Marseillaise", correct: true },
            { text: "La Carmagnole", correct: false },
            { text: "Le Requiem", correct: false },
        ]
    },
    {
        question: "En quelle année a eu lieu la Révolution Française ?",
        answers: [
            { text: "1776", correct: false },
            { text: "1789", correct: true },
            { text: "1815", correct: false },
            { text: "1848", correct: false },
        ]
    },
    {
        question: "Quel est l'organe qui pompe le sang dans le corps humain ?",
        answers: [
            { text: "Le Foie", correct: false },
            { text: "Le Cerveau", correct: false },
            { text: "Le Rein", correct: false },
            { text: "Le Cœur", correct: true },
        ]
    },
    {
        question: "Qui a écrit Les Misérables ?",
        answers: [
            { text: "Émile Zola", correct: false },
            { text: "Alexandre Dumas", correct: false },
            { text: "Victor Hugo", correct: true },
            { text: "Gustave Flaubert", correct: false },
        ]
    },
    {
        question: "Quel pays a remporté le plus grand nombre de Coupes du Monde de football masculines ?",
        answers: [
            { text: "L'Italie", correct: false },
            { text: "L'Allemagne", correct: false },
            { text: "Le Brésil", correct: true },
            { text: "L'Argentine", correct: false },
        ]
    },
    {
        question: "Dans quel océan se trouve la Fosse des Mariannes ?",
        answers: [
            { text: "L'Océan Indien", correct: false },
            { text: "L'Océan Atlantique", correct: false },
            { text: "L'Océan Pacifique", correct: true },
            { text: "L'Océan Arctique", correct: false },
        ]
    },
    {
        question: "Quel est le nom de l'instrument à corde que l'on frotte avec un archet ?",
        answers: [
            { text: "La Guitare", correct: false },
            { text: "La Harpe", correct: false },
            { text: "Le Violon", correct: true },
            { text: "Le Banjo", correct: false },
        ]
    },
    {
        question: "Que signifie l'acronyme $\text{WWW}$ ?",
        answers: [
            { text: "Wide World Web", correct: false },
            { text: "World Wide Web", correct: true },
            { text: "Web World Wide", correct: false },
            { text: "Web Wide World", correct: false },
        ]
    },
    {
        question: "Qui a inventé l'ampoule électrique ?",
        answers: [
            { text: "Nikola Tesla", correct: false },
            { text: "Alexander Graham Bell", correct: false },
            { text: "Thomas Edison", correct: true },
            { text: "Albert Einstein", correct: false },
        ]
    },
    {
        question: "Quel est l'oiseau national de l'Inde ?",
        answers: [
            { text: "Le Tigre", correct: false },
            { text: "Le Paon", correct: true },
            { text: "L'Aigle", correct: false },
            { text: "Le Cygne", correct: false },
        ]
    },
    {
        question: "Quel est le point le plus bas sur Terre (hors fonds marins) ?",
        answers: [
            { text: "La Vallée de la Mort", correct: false },
            { text: "Le Lac Baïkal", correct: false },
            { text: "La Mer Morte", correct: true },
            { text: "Le Désert d'Atacama", correct: false },
        ]
    },
    {
        question: "Qui a été le premier homme à marcher sur la Lune ?",
        answers: [
            { text: "Youri Gagarine", correct: false },
            { text: "Buzz Aldrin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Alan Shepard", correct: false },
        ]
    },
    {
        question: "Quel est le nom du méchant dans Harry Potter ?",
        answers: [
            { text: "Gellert Grindelwald", correct: false },
            { text: "Snape", correct: false },
            { text: "Voldemort", correct: true },
            { text: "Drago Malefoy", correct: false },
        ]
    },
    {
        question: "Quelle est la couleur principale sur le drapeau du Maroc ?",
        answers: [
            { text: "Le Bleu", correct: false },
            { text: "Le Vert", correct: false },
            { text: "Le Rouge", correct: true },
            { text: "Le Jaune", correct: false },
        ]
    },
    {
        question: "Combien d'os y a-t-il dans le corps d'un adulte ?",
        answers: [
            { text: "150", correct: false },
            { text: "206", correct: true },
            { text: "300", correct: false },
            { text: "198", correct: false },
        ]
    },
    {
        question: "Quel est le sport national du Canada ?",
        answers: [
            { text: "Le Football", correct: false },
            { text: "Le Basketball", correct: false },
            { text: "Le Hockey sur glace", correct: true },
            { text: "Le Lacrosse", correct: false },
        ]
    },
    {
        question: "Dans quelle ville se trouve la tour de Pise ?",
        answers: [
            { text: "Florence", correct: false },
            { text: "Rome", correct: false },
            { text: "Pise", correct: true },
            { text: "Venise", correct: false },
        ]
    },
    {
        question: "Qui est la déesse grecque de la sagesse ?",
        answers: [
            { text: "Héra", correct: false },
            { text: "Aphrodite", correct: false },
            { text: "Athéna", correct: true },
            { text: "Artémis", correct: false },
        ]
    },
    {
        question: "Quelle invention a rendu l'impression de masse possible ?",
        answers: [
            { text: "Le Télescope", correct: false },
            { text: "L'Imprimerie (Gutenberg)", correct: true },
            { text: "La Machine à vapeur", correct: false },
            { text: "La Boussole", correct: false },
        ]
    },
    {
        question: "Quel est l'élément chimique le plus léger ?",
        answers: [
            { text: "L'Hélium", correct: false },
            { text: "L'Hydrogène", correct: true },
            { text: "Le Lithium", correct: false },
            { text: "L'Oxygène", correct: false },
        ]
    }
];

const questionElement = document.getElementById("quiz");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Question Suivante";
    resultElement.innerHTML = "";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    // Affichage de la question
    const questionText = document.createElement("div");
    questionText.id = "question";
    questionText.innerHTML = ${questionNo}. ${currentQuestion.question};
    questionElement.appendChild(questionText);

    // Création du conteneur des boutons de réponse
    const answerButtonsContainer = document.createElement("div");
    answerButtonsContainer.classList.add("answer-buttons");
    questionElement.appendChild(answerButtonsContainer);

    // Création des boutons de réponse
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsContainer.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (questionElement.firstChild) {
        questionElement.removeChild(questionElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Désactiver tous les boutons après la sélection
    Array.from(selectedBtn.parentNode.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Montrer la bonne réponse
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = <h2>🎉 Quiz Terminé ! 🎉</h2>;
    resultElement.innerHTML = Votre score est de **${score}** sur **${questions.length}** !;
    nextButton.innerHTML = "Recommencer le Quiz";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Recommencer le quiz
    }
});

startQuiz(); // Lancer le quiz au chargement de la page