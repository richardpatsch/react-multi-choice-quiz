import React from 'react';
import PropTypes from 'prop-types';

const Question = (props)  => (
  <h2 className="question">{props.content}</h2>
);

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
