export default function Intro(props) {
    console.log(props.toggleIntro);
    return (
        <div className={props.toggleIntro}>
            <h1>Quizzical</h1>
            <p className="p-intro">Quizz game for lunatics</p>
            <button 
                className="btn-start" 
                onClick={props.hideClick}
            >
                Start Quizz
            </button>
        </div>
    )
}