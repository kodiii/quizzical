import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Question from './components/Question'
import './App.css'

function App() {
  const [quizz, setQuizz] = useState([])

  useEffect(() => {
    async function quizzApi() {
      const res = await fetch(`https://opentdb.com/api.php?amount=5`)
      const data = res.json()
      setQuizz(data.results)
    }
    quizzApi()
  }, [])

  console.log(quizz)

  const quizzQuestion = quizz.map(data => (
      <Question 
        key={data.key}
        question={data.question}
        correctAnswer={data.correct_answer}
        incorrectAnswers={data.incorrect_answers}
      />
  ))

  return (
    <div className="App">
      <Intro />
      {quizzQuestion}
    </div>
  )
}

export default App
