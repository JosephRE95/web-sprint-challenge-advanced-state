import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    props.inputChange(evt.target.id, evt.target.value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.postQuiz(props.form.newQuestion, props.form.newTrueAnswer, props.form.newFalseAnswer);
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input value={props.form.newQuestion} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input value={props.form.newTrueAnswer} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input value={props.form.newFalseAnswer} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button 
      value={props.form} 
      id="submitNewQuizBtn"
      disabled={!props.form.newQuestion.trim() || !props.form.newTrueAnswer.trim() || !props.form.newFalseAnswer.trim()} // Disable button if any field is empty
      >Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    form: state.form
  }
}

export default connect(mapStateToProps, {inputChange: actionCreators.inputChange, postQuiz: actionCreators.postQuiz })(Form)
