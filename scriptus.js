/* ================================================= */
/* ELEMENTS */
/* ================================================= */

const screens = document.querySelectorAll(".screen");

const quizScreen =
  document.getElementById("quizScreen");

const envelopeScreen =
  document.getElementById("envelopeScreen");

const birthdayScreen =
  document.getElementById("birthdayScreen");

const letterScreen =
  document.getElementById("letterScreen");

const memoryScreen =
  document.getElementById("memoryScreen");

const finalScreen =
  document.getElementById("finalScreen");

const question =
  document.getElementById("question");

const questionNumber =
  document.getElementById("questionNumber");

const answers =
  document.getElementById("answers");

const feedback =
  document.getElementById("feedback");

const animationArea =
  document.getElementById("animationArea");

const textAnswerBox =
  document.getElementById("textAnswerBox");


/* ================================================= */
/* SCREEN TRANSITION */
/* ================================================= */

function showScreen(screen) {

  screens.forEach(s => {
    s.classList.remove("active");
  });

  setTimeout(() => {
    screen.classList.add("active");
  }, 100);

}


/* ================================================= */
/* QUESTIONS */
/* ================================================= */

const questions = [

  {
    type: "buttons",

    icon: "♡",

    question:
      "Do you love me...?",

    answers: [
      ["YES ❤️", true],
      ["NO...", false]
    ]
  },


  {
    type: "buttons",

    icon: "🌹",

    question:
      "Who is your favorite person?",

    answers: [
      ["Me 🖤", true],
      ["Someone else...", false]
    ]
  },


  {
    type: "buttons",

    icon: "📸",

    question:
      "Do you remember our first meeting?",

    answers: [
      ["Yes, of course.", true],
      ["I forgot 😭", false]
    ]
  },


  {
    type: "buttons",

    icon: "💭",

    question:
      "What was your first impression of me?",

    answers: [
      ["Cute jirr", true],
      ["Interesting", true],
      ["Weird ahh human", true],
      ["I don't remember", true]
    ]
  },


  {
    type: "buttons",

    icon: "📷",

    question:
      "Which kind of memory would you choose with me?",

    answers: [
      ["A funny one", true],
      ["A romantic one ♡", true],
      ["A peaceful one", true],
      ["An unforgettable one", true]
    ]
  },


  {
    type: "buttons",

    icon: "🌊",

    question:
      "If we could go anywhere together, where would you go?",

    answers: [
      ["🌊 Beach", true],
      ["🌃 City", true],
      ["🌲 Somewhere quiet", true],
      ["🏠 Stay home", true]
    ]
  },


  {
    type: "buttons",

    icon: "🌙",

    question:
      "What would you rather do with me?",

    answers: [
      ["Talk all night", true],
      ["walk somewhere", true],
      ["Eat together", true],
      ["Just stay beside each other", true]
    ]
  },


  {
    type: "buttons",

    icon: "🎬",

    question:
      "If our story were a movie, what would it be?",

    answers: [
      ["Romance ♡", true],
      ["Comedy", true],
      ["Adventure", true],
      ["A little bit of..everything?", true]
    ]
  },


  {
    type: "buttons",

    icon: "🍜",

    question:
      "What's more fun to you?",

    answers: [
      ["Eating together", true],
      ["Going somewhere", true],
      ["Watching something", true],
      ["Doing absolutely nothing", true]
    ]
  },


  {
    type: "buttons",

    icon: "🖤",

    question:
      "What's one thing you never want to lose about us?",

    answers: [
      ["Our conversations", true],
      ["Our trust", true],
      ["Our silly moments", true],
      ["Everything", true]
    ]
  },


  {
    type: "buttons",

    icon: "😂",

    question:
      "Who is more annoying?",

    answers: [
      ["You ", true],
      ["Ofc you", true],
      ["you..", true],
      ["Definitely you", true]
    ]
  },


  {
    type: "buttons",

    icon: "😭",

    question:
      "Who gets emotional first?",

    answers: [
      ["Me", true],
      ["You", true],
      ["Depends", true]
    ]
  },


  {
    type: "buttons",

    icon: "🤍",

    question:
      "What do you think makes us 'us'?",

    answers: [
      ["Our weirdness", true],
      ["Our conversations", true],
      ["The way we understand each other", true],
      ["Everythin we've been through", true]
    ]
  },


  {
    type: "buttons",

    icon: "🌧️",

    question:
      "umm...Will you stay with me through the hard days too?",

    answers: [
      ["YES", true],
      ["I promise", true]
    ]
  },


  {
    type: "buttons",

    icon: "🌱",

    question:
      "Do you think we've changed since we met?",

    answers: [
      ["Definitely", true],
      ["A little", true],
      ["We're still the same bruh..", true]
    ]
  },


  {
    type: "buttons",

    icon: "✨",

    question:
      "What's one thing you'd love for us to experience together?",

    answers: [
      ["Travel around the world!!", true],
      ["Build something together", true],
      ["Make more memories", true],
      ["Grow together", true]
    ]
  },


  {
    type: "buttons",

    icon: "🏠",

    question:
      "What would our perfect day together look like?",

    answers: [
      ["Going somewhere", true],
      ["Staying home", true],
      ["Eating all day", true],
      ["Just being together", true]
    ]
  },


  {
    type: "buttons",

    icon: "💭",

    question:
      "If you could relive one moment with me, what would you choose?",

    answers: [
      ["Our first meeting", true],
      ["Our funniest moment", true],
      ["Our sweetest moment", true],
      ["Something completely random", true]
    ]
  },


  {
    type: "buttons",

    icon: "LAST ONE",

    question:
      "Are you happy that we met?",

    answers: [
      ["Yes", true],
      ["Of course", true],
      ["Absolutely", true]
    ]
  },


  {
    type: "buttons",

    icon: "🎂",

    question:
      "Are you ready for your birthday surprise?",

    answers: [
      ["LESSGOOOOO", true],
      ["I'm ready!", true]
    ]
  }

];


let currentQuestion = 0;


/* ================================================= */
/* LOAD QUESTION */
/* ================================================= */

function loadQuestion() {

  const data = questions[currentQuestion];

  question.innerText =
    data.question;

  questionNumber.innerText =
    `Question ${currentQuestion + 1} / ${questions.length}`;

  feedback.innerText = "";

  answers.innerHTML = "";

  textAnswerBox.innerHTML = "";

  animationArea.innerHTML =
    `<div class="question-icon">${data.icon}</div>`;

  const icon =
    animationArea.querySelector(".question-icon");

  if (currentQuestion === 0) {
    icon.classList.add("big-heart");
  }

  if (
    currentQuestion === 1 ||
    currentQuestion === 4
  ) {
    icon.classList.add("flower");
  }

  if (
    currentQuestion === 2 ||
    currentQuestion === 3 ||
    currentQuestion === 4
  ) {
    icon.classList.add("camera");
  }

  if (
    currentQuestion === 5 ||
    currentQuestion === 6 ||
    currentQuestion === 7
  ) {
    icon.classList.add("stars");
  }

  data.answers.forEach(item => {

    const button =
      document.createElement("button");

    button.className =
      "answer-button";

    button.innerText =
      item[0];

    button.onclick = () => {

      handleAnswer(
        item[1],
        button
      );

    };

    answers.appendChild(button);

  });

}


/* ================================================= */
/* ANSWER */
/* ================================================= */

function handleAnswer(correct, button) {

  if (!correct) {

    feedback.innerText =
      "hmm... try again nga.";

    quizScreen.classList.remove("shake");

    void quizScreen.offsetWidth;

    quizScreen.classList.add("shake");


    /* Make wrong buttons escape */

    button.style.position =
      "fixed";

    button.style.left =
      Math.random() * 70 + 10 + "%";

    button.style.top =
      Math.random() * 60 + 20 + "%";

    return;
  }


  feedback.innerText =
    "YEAYYSHSHHS ♡";


  /* special effects */

  if (currentQuestion === 1) {
    createPetals(15);
  }

  if (currentQuestion === 2) {
    createMemoryPop();
  }

  if (currentQuestion === 5) {
    createStars(30);
  }

  if (currentQuestion === 13) {
    createPetals(25);
    heartbeatEffect();
  }

  if (currentQuestion === 18) {
    createPetals(15);
  }


  button.style.boxShadow =
    "0 0 35px rgba(255,255,255,.25)";


  /* FINAL QUESTION */

  if (
    currentQuestion ===
    questions.length - 1
  ) {

    setTimeout(() => {

      showScreen(envelopeScreen);

    }, 1200);

    return;
  }


  currentQuestion++;

  setTimeout(() => {

    loadQuestion();

  }, 800);

}


/* ================================================= */
/* MEMORY POP */
/* ================================================= */

function createMemoryPop() {

  animationArea.innerHTML =
    `<div class="camera">📸</div>`;

  createStars(15);

}


/* ================================================= */
/* HEARTBEAT EFFECT */
/* ================================================= */

function heartbeatEffect() {

  animationArea.innerHTML =
    `<div class="big-heart">🖤</div>`;

}


/* ================================================= */
/* STARS */
/* ================================================= */

function createStars(amount) {

  const container =
    document.getElementById("particles");

  for (let i = 0; i < amount; i++) {

    const star =
      document.createElement("div");

    star.className =
      "particle";

    star.style.left =
      Math.random() * 100 + "%";

    star.style.animationDuration =
      3 + Math.random() * 5 + "s";

    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 9000);

  }

}


/* ================================================= */
/* PETALS */
/* ================================================= */

function createPetals(amount) {

  const container =
    document.getElementById("petals");

  for (let i = 0; i < amount; i++) {

    const petal =
      document.createElement("div");

    petal.className =
      "petal";

    petal.innerText =
      Math.random() > .5
        ? "🌹"
        : "♡";

    petal.style.left =
      Math.random() * 100 + "%";

    petal.style.animationDuration =
      3 + Math.random() * 5 + "s";

    petal.style.animationDelay =
      Math.random() * 2 + "s";

    container.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 9000);

  }

}


/* ================================================= */
/* LOAD FIRST QUESTION */
/* ================================================= */

loadQuestion();


/* ================================================= */
/* ENVELOPE */
/* ================================================= */

const envelope =
  document.getElementById("envelope");

envelope.addEventListener(
  "click",
  () => {

    envelope.classList.add("open");

    createPetals(35);

    setTimeout(() => {

      showScreen(birthdayScreen);

    }, 1800);

  }
);


/* ================================================= */
/* BIRTHDAY → LETTER */
/* ================================================= */

document
  .getElementById("letterButton")
  .addEventListener(
    "click",
    () => {

      showScreen(letterScreen);

    }
  );


/* ================================================= */
/* LETTER */
/* ================================================= */

const letterLines =
  document.querySelectorAll(".letter-line");

let currentLine = 0;

const nextLetter =
  document.getElementById("nextLetter");

nextLetter.addEventListener(
  "click",
  () => {

    currentLine++;

    if (
      currentLine <
      letterLines.length
    ) {

      letterLines[currentLine]
        .classList.add("active-line");

      return;

    }


    nextLetter.innerText =
      "see our memories ♡";

    nextLetter.onclick =
      () => {

        showScreen(memoryScreen);

      };

  }
);


/* ================================================= */
/* MEMORIES */
/* ================================================= */

const memories = [

  {
    image: "Screenshot_20260928_133701_Gallery.jpg",
    caption: "one of my favorite memories ♡"
  },

  {
    image: "Screenshot_20260928_133701_Gallery.jpg",
    caption: "CUTE AHH"
  },

  {
    image: "Screenshot_20260928_134149_Gallery.jpg",
    caption: "humph"
  },

  {
    image: "IMG_20260928_002132_358.jpg",
    caption: "NIGGER."
  }

];

let currentMemory = 0;

const memoryImage =
  document.getElementById("memoryImage");

const memoryCaption =
  document.getElementById("memoryCaption");

const memoryCounter =
  document.getElementById("memoryCounter");


function updateMemory() {

  memoryImage.style.opacity = "0";

  setTimeout(() => {

    memoryImage.src =
      memories[currentMemory].image;

    memoryCaption.innerText =
      memories[currentMemory].caption;

    memoryCounter.innerText =
      `${currentMemory + 1} / ${memories.length}`;

    memoryImage.style.opacity = "1";

  }, 300);

}


document
  .getElementById("nextMemory")
  .onclick = () => {

    currentMemory++;

    if (
      currentMemory >=
      memories.length
    ) {
      currentMemory = 0;
    }

    updateMemory();

  };


document
  .getElementById("prevMemory")
  .onclick = () => {

    currentMemory--;

    if (currentMemory < 0) {
      currentMemory =
        memories.length - 1;
    }

    updateMemory();

  };


/* ================================================= */
/* FINAL */
/* ================================================= */

document
  .getElementById("finalButton")
  .onclick = () => {

    createPetals(50);

    showScreen(finalScreen);

    startTyping();

  };


/* ================================================= */
/* TYPING */
/* ================================================= */

const finalText =
  "I'll always be proud of you. ♡";

const finalTyping =
  document.getElementById("finalTyping");

let typingIndex = 0;


function startTyping() {

  finalTyping.innerText = "";

  typingIndex = 0;

  typeText();

}


function typeText() {

  if (
    typingIndex <
    finalText.length
  ) {

    finalTyping.innerText +=
      finalText.charAt(typingIndex);

    typingIndex++;

    setTimeout(
      typeText,
      75
    );

  }

}