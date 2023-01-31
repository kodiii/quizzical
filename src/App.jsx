import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Quizz from './components/Quizz'
import { nanoid } from 'nanoid'
// import './App.css'

export default function App() {
  const [quizz, setQuizz] = useState([])

  useEffect(() => {
    async function quizzApi() {
      const res = await fetch(`https://opentdb.com/api.php?amount=5`)
      const data = await res.json()
      setQuizz(data.results)
    }
    quizzApi()
  }, [])

  const [toggle, setToggle ] = useState(false)

  function hideClick() {
    setToggle(prevToggle => !prevToggle)
  }

  const toggleIntro = toggle ? 'hide--intro' : 'show--intro'
  const toggleQuizz = toggle ? 'show--quizz': 'hide--quizz'

  const question = quizz.map(data => (
      <Quizz 
        key={nanoid()}
        question={data.question}
        correctAnswer={data.correct_answer}
        incorrectAnswers={data.incorrect_answers}
        toggleQuizz={toggleQuizz}
      />
  ))

  return (
    <div className="App">
      <Intro 
        hideClick={hideClick}
        toggleIntro={toggleIntro}
      />
      {question}
    </div>
  )
}
