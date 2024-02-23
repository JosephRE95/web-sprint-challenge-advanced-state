import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuiz } from '../state/action-creators'

function Quiz(props) {
console.log(props)


  useEffect(() => {
   console.log(props.fetchQuiz()) 
  }, [])
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            {/* <h2>{props.quiz.question}</h2> */}

            <div id="quizAnswers">
              <div className="answer selected">
                {/* {props.quiz.answer[0].text} */}
               
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
              {/* {props.quiz.answer[1].text} */}
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, {fetchQuiz})(Quiz);