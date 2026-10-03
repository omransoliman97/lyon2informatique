class Quiz {
    constructor(containerId, questions, storageKey) {
        this.container = document.getElementById(containerId);
        this.questions = questions;
        this.storageKey = storageKey;
        this.state = this.loadState();
        this.render();
    }

    loadState() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            currentIndex: 0,
            correctCount: 0,
            incorrectCount: 0,
            answers: {}, // index -> selected option index (so we can highlight it later)
            completed: false
        };
    }

    saveState() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    }

    restart() {
        if(confirm('Voulez-vous vraiment recommencer à zéro ?')) {
            this.state = {
                currentIndex: 0,
                correctCount: 0,
                incorrectCount: 0,
                answers: {},
                completed: false
            };
            this.saveState();
            this.render();
        }
    }

    handleAnswer(optionIndex) {
        if (this.state.answers[this.state.currentIndex] !== undefined) return; // already answered

        const q = this.questions[this.state.currentIndex];
        const isCorrect = optionIndex === q.correctAnswer;
        
        this.state.answers[this.state.currentIndex] = optionIndex;
        if (isCorrect) {
            this.state.correctCount++;
        } else {
            this.state.incorrectCount++;
        }
        
        this.saveState();
        this.render();
    }

    nextQuestion() {
        if (this.state.currentIndex < this.questions.length - 1) {
            this.state.currentIndex++;
            this.saveState();
            this.render();
        } else {
            this.state.completed = true;
            this.saveState();
            this.render();
        }
    }

    prevQuestion() {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex--;
            this.saveState();
            this.render();
        }
    }

    render() {
        if (this.state.completed) {
            this.renderResults();
            return;
        }

        const q = this.questions[this.state.currentIndex];
        const selected = this.state.answers[this.state.currentIndex];
        const hasAnswered = selected !== undefined;

        let optionsHtml = '';
        q.options.forEach((opt, idx) => {
            let className = 'quiz-option';
            if (hasAnswered) {
                if (idx === q.correctAnswer) {
                    // Always show the correct answer once the question has been answered.
                    className += ' correct';
                } else if (idx === selected) {
                    // Highlight the option the user actually picked when it was wrong.
                    className += ' incorrect';
                }
            }

            optionsHtml += `<button class="${className}" ${hasAnswered ? 'disabled' : ''} onclick="quizInstance.handleAnswer(${idx})">${String.fromCharCode(65 + idx)}) ${opt}</button>`;
        });
        
        this.container.innerHTML = `
            <div class="quiz-header">
                <div class="quiz-progress">Question ${this.state.currentIndex + 1} / ${this.questions.length}</div>
                <div class="quiz-stats">
                    <span class="stat-correct">Vrai : ${this.state.correctCount}</span>
                    <span class="stat-incorrect">Faux : ${this.state.incorrectCount}</span>
                    <button class="quiz-restart-btn" onclick="quizInstance.restart()" title="Recommencer" aria-label="Recommencer le quiz">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    </button>
                </div>
            </div>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options">
                ${optionsHtml}
            </div>
            <div class="quiz-explanation" style="display: ${hasAnswered ? 'block' : 'none'}">
                <strong>Explication:</strong> ${q.explanation}
            </div>
            <div class="quiz-controls">
                <button class="quiz-btn quiz-btn-secondary" onclick="quizInstance.prevQuestion()" ${this.state.currentIndex === 0 ? 'disabled' : ''}>Précédent</button>
                <button class="quiz-btn quiz-btn-primary" onclick="quizInstance.nextQuestion()" ${!hasAnswered ? 'disabled' : ''}>${this.state.currentIndex === this.questions.length - 1 ? 'Terminer' : 'Suivant'}</button>
            </div>
        `;
    }

    renderResults() {
        const total = this.questions.length;
        const score = Math.round((this.state.correctCount / total) * 100);
        
        this.container.innerHTML = `
            <div class="quiz-results">
                <h2>Quiz Terminé !</h2>
                <div class="score">${score}%</div>
                <p>Vous avez répondu correctement à ${this.state.correctCount} questions sur ${total}.</p>
                <div class="quiz-controls" style="justify-content: center; margin-top: 30px;">
                    <button class="quiz-btn quiz-btn-danger" onclick="quizInstance.restart()">Recommencer le quiz</button>
                </div>
            </div>
        `;
    }
}
