// For Dark Mode-Light Mode
function applyDarkMode(state) {  /* Copy-pasting this function from my previous projects' dark mode-light mode part. */
    if (state === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    localStorage.setItem("theme", state);
    if (document.getElementById('darkModeToggle')) {
        document.getElementById('darkModeToggle').textContent = state === "dark" ? "☀️" : "🌙";
    }
}
function toggleDarkMode() {
    let mode = document.body.classList.contains("dark") ? "light" : "dark";
    applyDarkMode(mode);
}
window.addEventListener('DOMContentLoaded', () => {
    let theme = localStorage.getItem("theme");
    if (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
    }
    applyDarkMode(theme || "light");
    if (document.getElementById('darkModeToggle')) {
        document.getElementById('darkModeToggle').onclick = toggleDarkMode;
    }
});

// For the Sound
function playSound(id) {
    let a = document.getElementById(id);
    if (a) { a.currentTime = 0; a.play(); }
}
function playClick() { playSound('sound-click'); }

// For Home Page
if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/public/")
) {
    const btn = document.getElementById('startBtn');
    if (btn) btn.onclick = function () {
        playClick();
        window.location.href = "quiz.html";
    };
}

/* For quiz.html page */
if (window.location.pathname.endsWith("quiz.html")) {
    let questions = [];
    let answers = [];
    let current = 0;
    let timer = 120;
    let interval = null;

    const timerEl = document.getElementById("timer");
    const questionArea = document.getElementById("questionArea");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");
    const restartBtn = document.getElementById("restartBtn");
    /* Removing prevBtn completely to ensure no backtracking, making this modification because without this the sound feature will let user cheat. */
    if (document.getElementById("prevBtn")) document.getElementById("prevBtn").remove();

    function renderQuestion(idx) {
        const q = questions[idx];
        let saved = answers[idx] ? answers[idx].answer : "";
        let html = `
      <div id="qc" class="question-card">
        <div class="question-main">
          <span class="question-count">Q${idx + 1}/${questions.length}</span>
          <div class="question-title">${q.question}</div>
        </div>
        <ul class="question-options">
          ${q.options.map((opt, i) => {
            let checked = saved === opt ? "checked" : "";
            return `
            <li>
              <label>
                <input type="radio" name="answer" value="${opt}" ${checked}>
                ${opt}
              </label>
            </li>
            `;
        }).join("")}
        </ul>
      </div>
    `;
        questionArea.innerHTML = html;
    }

    nextBtn.onclick = () => {
        playClick();
        const selectedRadio = document.querySelector('input[name="answer"]:checked');
        if (!selectedRadio) {
            alert("Please select an answer!");
            return;
        }
        answers[current] = { id: questions[current].id, answer: selectedRadio.value };
        localStorage.setItem('quizAnswers', JSON.stringify(answers));

        // Sound feedback AFTER submitting answer for this question
        const q = questions[current];
        if (q.answer && q.answer === selectedRadio.value) {
            playSound('sound-correct');
        } else if (q.answer) {
            playSound('sound-wrong');
        }

        current++;
        if (current < questions.length) {
            renderQuestion(current);
            updateControls();
        }
        // Hide Next if at last question
        updateControls();
    };

    submitBtn.onclick = async () => {
        playClick();
        const selectedRadio = document.querySelector('input[name="answer"]:checked');
        if (!selectedRadio) {
            alert("Please select an answer!");
            return;
        }
        answers[current] = { id: questions[current].id, answer: selectedRadio.value };
        localStorage.setItem('quizAnswers', JSON.stringify(answers));

        // Sound feedback AFTER submitting answer for last question
        const q = questions[current];
        if (q.answer && q.answer === selectedRadio.value) {
            playSound('sound-correct');
        } else if (q.answer) {
            playSound('sound-wrong');
        }

        await submitQuiz();
    };

    restartBtn.onclick = () => {
        playClick();
        if (confirm("Are you sure you want to restart the quiz? Your current progress will be lost.")) {
            localStorage.removeItem('quizQuestions');
            localStorage.removeItem('quizAnswers');
            localStorage.removeItem('sessionId');
            window.location.href = "index.html";
        }
    };

    function updateControls() {
        /* This logic ensures that it shows "Next" button only if the user is not on last question, otherwise it will show "Submit" button. */
        nextBtn.style.display = (current === questions.length - 1) ? "none" : "";
        submitBtn.style.display = (current === questions.length - 1) ? "" : "none";
    }

    function startTimer() {
        timerEl.textContent = `⏰ ${formatTime(timer)}`;
        interval = setInterval(() => {
            timer--;
            timerEl.textContent = `⏰ ${formatTime(timer)}`;
            if (timer <= 0) {
                clearInterval(interval);
                playSound('sound-timer');
                autoSubmit();
            }
        }, 1000);
    }
    function formatTime(sec) {
        return `${Math.floor(sec / 60)}:${("0" + (sec % 60)).slice(-2)}`;
    }

    async function submitQuiz() {
        clearInterval(interval);
        for (let i = 0; i < questions.length; ++i) {
            if (!answers[i]) answers[i] = { id: questions[i].id, answer: "" };
        }
        localStorage.setItem('quizAnswers', JSON.stringify(answers));
        const sessionId = localStorage.getItem('sessionId');
        const resp = await fetch(`/api/submit-quiz`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId, answers })
        });
        const result = await resp.json();
        let quizHistory = JSON.parse(localStorage.getItem('quizHistory') || "[]");
        quizHistory.push(result);
        localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
        localStorage.setItem('quizResult', JSON.stringify(result));
        window.location.href = "results.html";
    }

    function autoSubmit() {
        alert("Time's up! Submitting your quiz.");
        submitQuiz();
    }

    // On load, fetches quiz
    window.addEventListener('DOMContentLoaded', async () => {
        let sessionId = localStorage.getItem('sessionId');
        const res = await fetch(`/api/start-quiz${sessionId ? `?sessionId=${sessionId}` : ""}`);
        const data = await res.json();
        questions = data.questions;
        localStorage.setItem('quizQuestions', JSON.stringify(questions));
        localStorage.setItem('sessionId', data.sessionId);
        answers = [];
        current = 0;
        renderQuestion(current);
        updateControls();
        startTimer();
    });

    // For now, keeping it as a initiating event driven JS to save answer (no feedback here)
    questionArea.addEventListener('change', e => {
        if (e.target && e.target.name === "answer") {
            answers[current] = { id: questions[current].id, answer: e.target.value };
            localStorage.setItem('quizAnswers', JSON.stringify(answers));
            // No sound here
        }
    });
}

// For the Results Page (Should be done soon by Md Akram Hossain)
if (window.location.pathname.endsWith("results.html")) {
    const result = JSON.parse(localStorage.getItem('quizResult') || "{}");
    const scoreSummary = document.getElementById('scoreSummary');
    if (!result || !result.summary || !Array.isArray(result.summary)) {
        scoreSummary.innerHTML = "<p>Oops! No results to show.</p>";
    } else {
        let grade = result.score / result.total;
        let message = grade === 1
            ? "🎉 Perfect! Genius!"
            : grade >= 0.8
                ? "👏 Great job!"
                : grade >= 0.5
                    ? "👍 Not bad!"
                    : "😅 Keep practicing!";
        let detailHtml = result.summary.map((q, i) =>
            `<li>
        Q${i + 1}: ${q.question}<br>
        <span style="color:${q.isCorrect ? '#12bb67' : '#e94560'};">
          Your Answer: ${q.yourAnswer || '<i>None</i>'}
          ${q.isCorrect ? "✔️" : "❌"}
        </span><br>
        <span>Correct Answer: ${q.correctAnswer}</span>
      </li>`
        ).join("<br>");
        scoreSummary.innerHTML = `
      <div class="result-main-summary">
        <h3 style="margin:0;">${message}</h3>
        <p style="font-size:1.2em;"><b>Score: ${result.score} / ${result.total}</b></p>
        <ul class="result-list">${detailHtml}</ul>
      </div>
    `;
    }
    document.getElementById("playAgainBtn").onclick = function () {
        playClick();
        window.location.href = "index.html";
    };
}
