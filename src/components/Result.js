import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Quiz from './Quiz';
import { arraysEqual } from '../misc/Helper'

const Result = (props) => {
  console.log(props.questions[0].correctAnswers);
  console.log(props.questions[0].selectedAnswers);
  console.log(arraysEqual(props.questions[0].correctAnswers, props.questions[0].selectedAnswers));
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
      <h4>{`${props.questions.filter(question => arraysEqual(question.selectedAnswers, question.correctAnswers)).length} of ${props.questions.length} questions are correct.`}</h4>
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
