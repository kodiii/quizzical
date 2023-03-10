export default function Quizz(props) {
    const questionsArray = [
            props.correctAnswer, 
            ...props.incorrectAnswers
        ]

    return (
        <section className={props.toggleQuizz}>
            <h3>{props.question}</h3>
            <div className="answers--group">
                {questionsArray.map((answer, index) => (
                    <button key={index} className="answer--btn">{answer}</button>
                ))}
            </div>
        </section>
    )
}