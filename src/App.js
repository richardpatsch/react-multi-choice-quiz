import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Button from '@material-ui/core/Button';


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
    this.loadState = this.loadState.bind(this);
    this.saveState = this.saveState.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    this.loadState();
  }

  initQuestions() {
    const shuffled = this.shuffleQuestions(quizQuestions).map(question => ({...this.shuffleAnswers(question), selectedAnswers: []}));
    let i = 0;
    return shuffled.map(question => {
      return {...question, id: i++};
    });
  } 

  loadState() {
    if (localStorage.getItem('vierGewinnt') !== undefined) {
      this.setState(JSON.parse(localStorage.getItem('vierGewinnt')));
    }
  }

  saveState() {
    localStorage.setItem('vierGewinnt', JSON.stringify(this.state));
  }

  clearState() {
    localStorage.removeItem('vierGewinnt');
    this.setState({
      currentQuestion: 0,
      finished: false,
      questions: this.initQuestions()
    });
  }

  shuffleQuestions (array) {
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
    }, () => this.saveState());
  }

  shuffleAnswers(question) {
    var currentIndex = question.answers.length,
      temp, 
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temp = question.answers[currentIndex];
      question.answers[currentIndex] = question.answers[randomIndex];
      question.answers[randomIndex] = temp;

      const currentCorrect = question.correctAnswers.includes(currentIndex);
      const randomCorrect = question.correctAnswers.includes(randomIndex);

      if (currentCorrect !== randomCorrect) {
        if (currentCorrect && !randomCorrect) {
          question.correctAnswers = question.correctAnswers.filter(answer => (answer !== currentIndex)).concat(randomIndex);
        } else {
          question.correctAnswers = question.correctAnswers.filter(answer => (answer !== randomIndex)).concat(currentIndex);
        }
      }
    }
    
    return question;
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
    console.log("next");
    if (this.state.questions.length -1 !== this.state.currentQuestion) {
      this.setState({currentQuestion: this.state.currentQuestion+1});
    }
  }

  setPreviousQuestion() {
    console.log("previous");
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
          questionId={this.state.questions.indexOf(question)}
          question={question.question}
          onAnswerSelected={this.handleAnswerSelected}
          result={false}
          correctAnswers={question.correctAnswers}
          onSetPreviousQuestion={this.setPreviousQuestion}
          onSetNextQuestion={this.setNextQuestion}
        /> 
        <div className="finishButton">
          <Button variant="contained" color="default" fullWidth onClick={() => this.setFinish()}>Finish</Button>
        </div>
      </div>
    );
  }

  renderResult() {
    return (
      <div>
        <Result questions={this.state.questions} />
        <Button variant="contained" color="primary" fullWidth onClick={() => this.clearState()}>Reset</Button>

      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h3>ELAM Quiz</h3>
        </div>
        {this.state.finished ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
