class Questioner {
    constructor() {
        this.questions = [];
        this.questionsBankBuffer = [];
        this.questionsRuntimeIndex = [];
        this.nowQuestionsIndex = -1;
        this.nowLastQuestion = false;
        this.wrongCount = 0;
    }

    load(questions) {
        this.nowQuestionsIndex = -1;
        this.questionsBankBuffer = this.questionsBankBuffer.concat(questions);
        return this.questionsBankBuffer;
    }

    answerRandom(answerList) {
        let output = [], r;
        while (answerList.length > 0) {
            r = Math.floor(Math.random() * answerList.length);
            output.push(answerList[r]);
            answerList.splice(r, 1);
        }
        return output;
    }

    start(limit=10) {
        this.questions = [];
        this.nowQuestionsIndex = -1;
        this.questionsRuntimeIndex = [];
        this.wrongCount = 0;

        if (limit > this.questionsBankBuffer.length) limit = this.questionsBankBuffer.length;

        for (let i = 0; i < limit; i++) {
            let r = (Math.random() * (this.questionsBankBuffer.length - 1)).toFixed(0);
            let q = this.questionsBankBuffer.splice(r, 1)[0];
            let a = new Array();
            q.wrong.forEach(e => {
                a.push(e);
            });
            
            a.push(q.correct);
            a = this.answerRandom(a);
            q.answers = a;
            q.index = i;
            this.questions.push(q);
        }

        for (let j = 0; j < this.questions.length; j++) {
            this.questionsRuntimeIndex.push(j);
        }

        return {
            code: "ready",
            index: this.nowQuestionsIndex,
            indexList: this.questionsRuntimeIndex,
            progress: "0%",
            length: this.questionsRuntimeIndex.length,
            questions: this.questions
        };
    }

    next() {
        if (this.nowQuestionsIndex + 1 < this.questionsRuntimeIndex.length) {
            this.nowQuestionsIndex++;
            if (this.nowQuestionsIndex + 1 >= this.questionsRuntimeIndex.length) {
                this.nowLastQuestion = true;
            }
            return {
                code: "next",
                index: this.nowQuestionsIndex,
                progress: ((this.nowQuestionsIndex / this.questionsRuntimeIndex.length) * 100) + "%",
                length: this.questionsRuntimeIndex.length,
                question: this.questions[this.questionsRuntimeIndex[this.nowQuestionsIndex]],
                nowLastQuestion: this.nowLastQuestion
            };
        } else {
            return this.end();
        }
    }

    answerCheck(value) {
        let q = this.questions[this.questionsRuntimeIndex[this.nowQuestionsIndex]];
        if (q.answers[value] == q.correct) {
            return this.answerCorrect();
        } else {
            this.questionsRuntimeIndex.push(q.index);
            this.wrongCount++;
            return this.answerWrong();
        }
    }

    answerCorrect() {
        return {
            code: "correct",
            index: this.nowQuestionsIndex,
            progress: (((this.nowQuestionsIndex + 1) / this.questionsRuntimeIndex.length) * 100) + "%",
            length: this.questionsRuntimeIndex.length,
            question: this.questions[this.questionsRuntimeIndex[this.nowQuestionsIndex]],
            nowLastQuestion: this.nowLastQuestion
        };
    }

    answerWrong() {
        return {
            code: "wrong",
            index: this.nowQuestionsIndex,
            progress: (((this.nowQuestionsIndex + 1) / this.questionsRuntimeIndex.length) * 100) + "%",
            length: this.questionsRuntimeIndex.length,
            question: this.questions[this.questionsRuntimeIndex[this.nowQuestionsIndex]],
            nowLastQuestion: this.nowLastQuestion
        };
    }

    end() {
        this.nowQuestionsIndex++;
        return {
            code: "end",
            index: this.nowQuestionsIndex,
            progress: "100%",
            length: this.questionsRuntimeIndex.length
        };
    }
}