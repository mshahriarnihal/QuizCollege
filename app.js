/*Project3 Modification by Mubasshir starts here*/


/* setToken function. I am asking Md Akram Hossain to check it and utilize on the pages he is working too to restrict unauthorized people access those pages.*/
function setToken(token, username) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
}
function getToken() {
    return localStorage.getItem('token');
}
function getUsername() {
    return localStorage.getItem('username');
}
function clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
}

// Defining the backend logics for the signup page that I earlier worked on simultenously and also for the signin page that Md Akram Hossain worked on.

// Signin
if (window.location.pathname.endsWith('signin.html')) {
    document.getElementById('signinForm').onsubmit = async function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorEl = document.getElementById('error');
        errorEl.textContent = '';
        try {
            const resp = await fetch('/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await resp.json();
            if (resp.ok) {
                setToken(data.token, data.username);
                window.location.href = 'index.html';
            } else {
                errorEl.textContent = data.error || 'Sign in failed';
            }
        } catch (err) {
            errorEl.textContent = 'Sign in failed. Server error.';
        }
    };
}

// For Signup
if (window.location.pathname.endsWith('signup.html')) {
    document.getElementById('signupForm').onsubmit = async function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorEl = document.getElementById('error');
        errorEl.textContent = '';
        try {
            const resp = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await resp.json();
            if (resp.ok) {
                // Go to sign in page
                window.location.href = 'signin.html';
            } else {
                errorEl.textContent = data.error || 'Sign up failed';
            }
        } catch (err) {
            errorEl.textContent = 'Sign up failed. Server error.';
        }
    };
}

// For the logout feature on navbar, also for the user's identity.

function updateNavbar() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const user = getUsername();
    if (getToken()) {
        let userSpan = document.createElement('span');
        userSpan.textContent = `👤 ${user} `;
        userSpan.style.marginRight = "10px";
        let logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.className = "btn-main";
        logoutBtn.onclick = () => {
            clearAuth();
            window.location.href = 'signin.html';
        };
        nav.appendChild(userSpan);
        nav.appendChild(logoutBtn);
    }
}
window.addEventListener('DOMContentLoaded', updateNavbar);

// Marking following pages as "protected" stay restrict usage to limited people.

// If the user is on a protected page and is not signed in already, it redirects to signin page.
const protectedPages = [
    'quiz.html', 'results.html', 'results_history.html'
];
protectedPages.forEach(page => {
    if (window.location.pathname.endsWith(page)) {
        if (!getToken()) {
            window.location.href = 'signin.html';
        }
    }
});


/*Project3 Modification primarily ends here. But later I made more modifications below. */

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
    let timer = 240;
    let interval = null;
    let selectedDifficulty = null;
    let selectedCategory = null;
    let numQuestions = 10;

    const timerEl = document.getElementById("timer");
    const questionArea = document.getElementById("questionArea");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");
    const restartBtn = document.getElementById("restartBtn");
    /* Removing prevBtn completely to ensure no backtracking, making this modification because without this the sound feature will let user cheat. */
    if (document.getElementById("prevBtn")) document.getElementById("prevBtn").remove();

    /* Project 3 modifications for Difficulty,Category, and total question selection modal logic. Trying to do it without further modifying the html file. */
    function waitForDifficultyAndStartQuiz(callback) {
        function checkModal() {
            const modal = document.getElementById('difficultyModal');
            const btn = modal ? document.getElementById('difficultyBtn') : null;
            const select = modal ? document.getElementById('difficultySelect') : null;
            const catSel = modal ? document.getElementById('categorySelect') : null;
            const numInp = modal ? document.getElementById('numQuestionsInput') : null;
            if (modal && btn && select && catSel && numInp) {
                btn.onclick = () => {
                    selectedDifficulty = select.value;
                    selectedCategory = catSel.value;
                    numQuestions = Math.max(5, Math.min(50, parseInt(numInp.value) || 10));
                    modal.style.display = 'none'; // Hides the modal (not remove!)
                    callback(selectedDifficulty, selectedCategory, numQuestions);
                };
            } else {
                setTimeout(checkModal, 100);
            }
        }
        checkModal();
    }

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
        answers[current] = {
            id: questions[current].id,
            question: questions[current].question, // Fixing here
            answer: selectedRadio.value,
            correctAnswer: questions[current].correctAnswer
        };
        localStorage.setItem('quizAnswers', JSON.stringify(answers));

        // Sound feedback AFTER submitting answer for this question
        const q = questions[current];
        if (q.correctAnswer && q.correctAnswer === selectedRadio.value) {
            playSound('sound-correct');
        } else if (q.correctAnswer) {
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
        answers[current] = {
            id: questions[current].id,
            question: questions[current].question, // Fixing done here.
            answer: selectedRadio.value,
            correctAnswer: questions[current].correctAnswer
        };
        localStorage.setItem('quizAnswers', JSON.stringify(answers));

        // Sound feedback AFTER submitting answer for last question
        const q = questions[current];
        if (q.correctAnswer && q.correctAnswer === selectedRadio.value) {
            playSound('sound-correct');
        } else if (q.correctAnswer) {
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
            if (!answers[i]) answers[i] = {
                id: questions[i].id,
                question: questions[i].question,
                answer: "",
                correctAnswer: questions[i].correctAnswer
            };
        }
        localStorage.setItem('quizAnswers', JSON.stringify(answers));
        const sessionId = localStorage.getItem('sessionId');
        const username = getUsername(); // <-- Project 3: get username!
        const resp = await fetch(`/api/submit-quiz`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sessionId,
                answers,
                username,
                difficulty: selectedDifficulty,
                category: selectedCategory,
                numQuestions: numQuestions
            }) // <-- send difficulty, category, and amount!
        });
        const result = await resp.json();
        let quizHistory = JSON.parse(localStorage.getItem('quizHistory') || "[]");

        // PATCH: Rebuild summary with question text if missing
        if (result.summary && result.summary.length > 0 && (!result.summary[0].question || result.summary[0].question === "undefined")) {
            const qList = JSON.parse(localStorage.getItem('quizQuestions') || "[]");
            result.summary = result.summary.map((item, idx) => ({
                ...item,
                question: (qList[idx] && qList[idx].question) || `Q${idx+1}`,
                correctAnswer: item.correctAnswer || (qList[idx] && (qList[idx].correctAnswer || qList[idx].answer))
            }));
        }

        quizHistory.push(result);
        localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
        localStorage.setItem('quizResult', JSON.stringify(result));
        window.location.href = "results.html";
    }

    function autoSubmit() {
        alert("Time's up! Submitting your quiz.");
        submitQuiz();
    }

    // Shuffle function for OpenTDB answers
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Difficulty Fetch/Init
    function startQuizWithDifficulty(difficulty, category, numQuestions) {
        selectedDifficulty = difficulty;
        selectedCategory = category;
        numQuestions = Math.max(5, Math.min(50, parseInt(numQuestions) || 10));
        // It removes any existing data. Doing it for troubleshooting purpose as previous version had lil issue.
        localStorage.removeItem('quizQuestions');
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('sessionId');

        (async () => {
            let url = `/api/start-quiz?difficulty=${selectedDifficulty}`;
            if (selectedCategory && selectedCategory !== "") url += `&category=${selectedCategory}`;
            url += `&amount=${numQuestions}`;
            const res = await fetch(url);
            const data = await res.json();
            selectedDifficulty = data.difficulty || selectedDifficulty || "medium";
            selectedCategory = data.category || selectedCategory || "";
            // This should support both local and OpenTDB questions
            if (Array.isArray(data.questions) && data.questions[0] && data.questions[0].correct_answer) {
                // OpenTDB API format
                questions = data.questions.map((q, idx) => ({
                    id: idx + 1,
                    question: q.question,
                    options: shuffle([q.correct_answer, ...q.incorrect_answers]),
                    correctAnswer: q.correct_answer
                }));
            } else {

                questions = data.questions.map(q => ({
                    ...q,
                    correctAnswer: q.answer
                }));
            }
            localStorage.setItem('quizQuestions', JSON.stringify(questions));
            localStorage.setItem('sessionId', data.sessionId);
            answers = [];
            current = 0;
            renderQuestion(current);
            updateControls();
            startTimer();
        })();
    }

    // On load, wait for modal and use its button to trigger start
    window.addEventListener('DOMContentLoaded', () => {
        waitForDifficultyAndStartQuiz(startQuizWithDifficulty);
    });

    // For now, keeping it as a initiating event driven JS to save answer (no feedback here)
    questionArea.addEventListener('change', e => {
        if (e.target && e.target.name === "answer") {
            answers[current] = {
                id: questions[current].id,
                question: questions[current].question, // FIX: Save the question text!
                answer: e.target.value,
                correctAnswer: questions[current].correctAnswer
            };
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
        <button id="shareBtn" class="btn-main" style="margin-top: 15px;">Share My Score</button>
        <input type="text" id="shareLink" style="width:80%;margin:15px 0;display:none;" readonly>
      </div>
    `;
        // Defining our share button's logic here. Doing it for extra credits.
        if (result.resultId) {
            const shareBtn = document.getElementById('shareBtn');
            const shareLink = document.getElementById('shareLink');
            const url = `${window.location.origin}/results.html?id=${result.resultId}`;
            if (navigator.share) {
                shareBtn.onclick = () => {
                    navigator.share({
                        title: "Quiz College - My Quiz Result",
                        text: "Check out my quiz score!",
                        url: url
                    }).catch(() => {
                        // It copies link (with unique id) to clipboard
                        shareLink.style.display = "block";
                        shareLink.value = url;
                        shareLink.select();
                        document.execCommand("copy");
                        shareBtn.textContent = "Link Copied!";
                        setTimeout(() => shareBtn.textContent = "Share My Score", 2000);
                    });
                };
            } else {
                shareBtn.onclick = () => {
                    shareLink.style.display = "block";
                    shareLink.value = url;
                    shareLink.select();
                    document.execCommand("copy");
                    shareBtn.textContent = "Link Copied!";
                    setTimeout(() => shareBtn.textContent = "Share My Score", 2000);
                };
            }
        }
    }
    document.getElementById("playAgainBtn").onclick = function () {
        playClick();
        window.location.href = "index.html";
    };
}

document.addEventListener("DOMContentLoaded", function() {
    // Get current file name (after last '/')
    const path = window.location.pathname.split("/").pop() || "index.html";
    // Map file names to nav link texts (edit if needed)
    const navMap = {
        "index.html": "Home",
        "results_history.html": "Old Results",
        "profile.html": "My Profile",
        "leaderboard.html": "Leaderboard",
        "quiz.html": "Quiz"
    };
    // Loop over all nav links
    document.querySelectorAll(".navbar a").forEach(a => {
        a.classList.remove("active-link");
        if ((a.textContent || "").trim() === navMap[path]) {
            a.classList.add("active-link");
        }
    });
});
