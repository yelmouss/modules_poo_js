class Quiz {
    constructor(title, questionNumber) {
        if (title === 'Film' && questionNumber === 4) {
            this._title = title
            this._questionNumber = questionNumber
        } else {
            throw 'Les paramètres données ne sont pas les bons !'
        }
    }

    getAnswer() {
        return "C'était pas si difficile :)"
    }
}