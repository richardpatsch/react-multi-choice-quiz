import React from 'react';
import PropTypes from 'prop-types';
import { GoCheck, GoX, GoArrowRight } from 'react-icons/go';

const AnswerOption = (props) => {
  let classes = "answerOption";

  if (props.result) {
    if (props.correct && !props.checked) {
      classes += " wrongAnswer";
    } else if (props.correct) {
      classes += " correctAnswer"
    }
 
    console.log(classes);
  }
  //      <GoArrowRight />
  //<GoCheck />
  return (
    <li className={classes}>

      <GoX className="resultStatusIcon"/>

      <input
        type="checkbox"
        className={props.result ? "radioResultButton" : "radioCustomButton"}
        id={props.questionId + "x" + props.answerId}
        checked={props.checked}
        value={props.answer}
        onChange={() => {props.onAnswerSelected(props.questionId, props.answerId)}}
      />
      <label className="radioCustomLabel" htmlFor={props.questionId + "x" + props.answerId}>
        {props.answer}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  checked: PropTypes.bool.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  answerId: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  result: PropTypes.bool.isRequired,
  correct: PropTypes.bool.isRequired,
};

export default AnswerOption;
