import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

const Quiz = (props) => {
  const renderAnswerOptions = (key) => {
    console.log(props);
    const answerId = props.answerOptions.findIndex(answer => answer === key);
    return (
      <AnswerOption
        key={answerId + "A" + props.questionId}
        answer={key}
        checked={props.selectedAnswers.includes(answerId)}
        answerId={answerId}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        result={props.result}
        correct={props.correctAnswers.includes(answerId)}
      />
    );
  }


  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        {!props.result ? <QuestionCount counter={props.questionId + 1} total={props.questionTotal} /> : ""}
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  selectedAnswers: PropTypes.array.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  result: PropTypes.bool.isRequired,
  correctAnswers: PropTypes.array.isRequired,
};

export default Quiz;
