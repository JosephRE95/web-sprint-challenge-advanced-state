import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';

function Quiz(props) {
  useEffect(() => {
    props.fetchQuiz();
  }, []);

  const handleAnswerSelect = (answer) => {
    props.selectAnswer(answer);
  };

  return (
    <div id="wrapper">
      {props.quiz ? (
        <>
          <h2>{props.quiz.question}</h2>
  
          <div id="quizAnswers">
            {props.quiz.answers.map((answer) => (
              <div
                key={answer.answer_id}
                className={props.selectedAnswer?.answer_id === answer.answer_id ? 'answer selected' : 'answer'}
              >
                {answer.text}
                <button onClick={() => handleAnswerSelect(answer)}>
                  {props.selectedAnswer?.answer_id === answer.answer_id ? 'Selected' : 'Select'}
                </button>
              </div>
            ))}
          </div>
  
          <button 
            onClick={() => props.postAnswer(props.quiz.quiz_id, props.selectedAnswer.answer_id)} 
            id="submitAnswerBtn"
            disabled={!props.selectedAnswer} // Disable button if no answer is selected
          >
            Submit answer
          </button>
        </>
      ) : (
        'Loading next quiz...'
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
  };
};

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz);
