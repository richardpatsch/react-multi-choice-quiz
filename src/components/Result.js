import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Quiz from './Quiz';

const Result = (props) => {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      {
        props.questions.map(question => (
          <Quiz
            key={question.id+"Q"}
            questionTotal={props.questions.length}
            answerOptions={question.answers}
            selectedAnswers={question.selectedAnswers}
            questionId={question.id}
            question={question.question}
            onAnswerSelected={() => console.log("not changeable in result screen")}
            result={true}
            correctAnswers={question.correctAnswers}
          />
        ))
      }
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  questions: PropTypes.array.isRequired
};

export default Result;
