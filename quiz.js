function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

const quizData = [
  {
    question: "1. What is the full form of UPI?",
    options: ["Unified Payment Interface", "Unique Payment Identifier", "Universal Payment India"],
    answer: "Unified Payment Interface"
  },
  {
    question: "2. Which account offers highest interest?",
    options: ["Savings Account", "Fixed Deposit", "PPF"],
    answer: "PPF"
  },
  {
    question: "3. What is the main goal of budgeting?",
    options: ["To spend more", "To manage income and expenses", "To invest in stocks"],
    answer: "To manage income and expenses"
  }
];

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result");

let score = 0;

quizData.forEach((item, index) => {
  const qDiv = document.createElement("div");
  qDiv.className = "question";

  const qTitle = document.createElement("p");
  qTitle.textContent = item.question;
  qDiv.appendChild(qTitle);

  const opts = document.createElement("div");
  opts.className = "options";

  item.options.forEach(opt => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "q" + index;
    radio.value = opt;
    label.appendChild(radio);
    label.append(" " + opt);
    opts.appendChild(label);
  });

  qDiv.appendChild(opts);
  quizBox.appendChild(qDiv);
});

const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit Quiz";
submitBtn.onclick = () => {
  score = 0;
  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === item.answer) {
      score++;
    }
  });
  resultBox.textContent = `You scored ${score} out of ${quizData.length}`;
};

quizBox.appendChild(submitBtn);
