import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.initQuestions(),
      currentQuestion: 0,
      finished: false,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.setFinish = this.setFinish.bind(this);

  }

  initQuestions() {
    let questions = [];
    
    quizQuestions.forEach(question => {
      questions.push({...question, selectedAnswers:[]});
    });

    return questions;
  } 

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(questionId, answerId) {
    this.setState({
      questions: this.updateSelectedAnswers(questionId, answerId),
    });
  }

  updateSelectedAnswers(qId, aId) {
    return this.state.questions.map(question => {
      if (question.id === qId) {
        let newSelection;
        //remove if existent:
        if (question.selectedAnswers.indexOf(aId) >= 0) {
          newSelection = question.selectedAnswers.filter(item => item !== aId);
        } else { //push if non-existent
          newSelection = question.selectedAnswers.concat(aId);
        }
        question.selectedAnswers = newSelection;
      } 
      return question;
    });
  }

  setNextQuestion() {
    if (this.state.questions.length -1 !== this.state.currentQuestion) {
      this.setState({currentQuestion: this.state.currentQuestion+1});
    }
  }

  setPreviousQuestion() {
    if (this.state.currentQuestion > 0) {
      this.setState({currentQuestion: this.state.currentQuestion-1});
    }
  }

  setFinish() {
    this.setState({finished: true});
  }

  renderQuiz() {
    const question = this.state.questions[this.state.currentQuestion];
    return (
      <div>
        <Quiz
          questionTotal = {this.state.questions.length}
          answerOptions={question.answers}
          selectedAnswers={question.selectedAnswers}
          questionId={question.id}
          question={question.question}
          onAnswerSelected={this.handleAnswerSelected}
          result={false}
          correctAnswers={question.correctAnswers}
        />
        <button onClick={this.setNextQuestion}>Next</button>
        <button onClick={this.setPreviousQuestion}>Previous</button>
        <button onClick={this.setFinish}>Finish</button>
      </div>
    );
  }

  renderResult() {
    return <Result questions={this.state.questions} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ELAM Quiz</h2>
        </div>
        {this.state.finished ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
