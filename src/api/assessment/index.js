import { nanoid } from 'nanoid';
import mockReactAssessment from './mock-react-assessment';

class AssessmentApi {
  constructor() {
    this.selectedAnswers = {};
  }

  startAssessment() {
    return new Promise((resolve, reject) => {
      let id =  nanoid();

      resolve({
        id: id
      });
    });
  }

  getQuestion(assesmentId, questionId) {
    return new Promise((resolve, reject) => {
      resolve({
        question: mockReactAssessment[questionId - 1],
        totalQuestions: mockReactAssessment.length,
        selectedOptionId: this.selectedAnswers[questionId]
      });
    });
  }

  selectAnswer(assesmentId, questionId, optionId) {
    this.selectedAnswers[questionId] = optionId;

    return new Promise((resolve, reject) => {
      resolve({
        question: mockReactAssessment[questionId - 1],
        totalQuestions: mockReactAssessment.length,
        selectedOptionId: this.selectedAnswers[questionId]
      });
    });
  }

  getResult(assesmentId) {
    let totalQuestions = mockReactAssessment.length;
    let correctAnswers = 0;

    for (let questionId in this.selectedAnswers) {
      if(this.selectedAnswers.hasOwnProperty(questionId)) {
        const correctAnswer = mockReactAssessment[questionId - 1].answer;
        const userAnswer = this.selectedAnswers[questionId];

        if(correctAnswer == userAnswer) {
          correctAnswers += 1;
        }
      }
    }

    let score = (correctAnswers / totalQuestions) * 10

    return new Promise((resolve, reject) => {
      resolve({
        score: score,
      });
    });
  }
}

export default new AssessmentApi();