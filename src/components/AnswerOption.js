import React from 'react';
import PropTypes from 'prop-types';

const AnswerOption = (props) => {
  return (
    <li className="answerOption">
      <input
        type="checkbox"
        className="radioCustomButton"
        id={props.answerId}
        checked={props.checked}
        value={props.answer}
        onChange={() => {props.onAnswerSelected(props.questionId, props.answerId)}}
      />
      <label className="radioCustomLabel" htmlFor={props.answerId}>
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
};

export default AnswerOption;
