import React, {useState, useEffect} from 'react';
import StyledWrapper from './StyledWrapper';
import {useAuth} from './../../providers/Auth';
import AssessmentApi from './../../api/assessment';
import { IconRefresh } from '@tabler/icons';
import {
  useNavigate,
  useParams
} from 'react-router-dom';

const AssessmentQuestionPage = () => {
  const {
    assesmentId,
    questionId
  } = useParams();

  const [question, setQuestion] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  let navigate = useNavigate();
  const [authState] = useAuth();

  const {
    currentUser
  } = authState;

  useEffect(() => {
    AssessmentApi
      .getQuestion(assesmentId, questionId)
      .then((data) => {
        setQuestion(data.question);
        setSelectedOption(data.selectedOptionId);
        setTotalQuestions(data.totalQuestions);
      });
  }, [questionId ? questionId : null]);  

  useEffect(() => {
    if(!currentUser || !currentUser.id) {
      navigate('/');
    }
  }, [currentUser]);
  

 const goToPrev = () => {
    const prevQuestionId = Number(questionId) - 1;
    navigate(`/assessment/${assesmentId}/${prevQuestionId}`);
  }

  const goToNext = () => {
    const nextQuestionId = Number(questionId) + 1;
    if (questionId == totalQuestions) {
      navigate(`/assessment/${assesmentId}/result`);
    } else {
      navigate(`/assessment/${assesmentId}/${nextQuestionId}`);
    }
  }

  const handleSelectOption = (id) => {
    AssessmentApi
      .selectAnswer(assesmentId, questionId, id)
      .then((data) => {
        setQuestion(data.question);
        setSelectedOption(data.selectedOptionId);
      });
  }

  if(!question) {
    return (
      <StyledWrapper>
        <div style={{textAlign: "center"}} className="question">
          <h1>ReactJS Assessment</h1>
          <IconRefresh size={28} className="spinner"/> 
        </div>
      </StyledWrapper>
    )
  }

  return (
    <StyledWrapper>
      <div className="question">
        <h1>ReactJS Assessment</h1>
        <div className="card">
          <div className="card-body" style={{marginTop: "30px"}}>
            <h2 style={{textAlign: "center"}}>Question No {questionId}</h2>
            <p>{question.question}</p>
            <div className="div-options">
              {question && question.options && question.options.map((option, index) => (
                <button 
                  onClick={() => handleSelectOption(index)} 
                  className={selectedOption === index ? "btn-options btn-selected" : "btn-options"}
                  key={index}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="div-navigate">
              <button onClick={goToPrev} className={questionId == 1 ? "btn-hidden": "btn-secondary"}>PREV</button>
              <button onClick={goToNext} className="btn-primary">{questionId == totalQuestions ? 'SUBMIT' : 'NEXT'}</button>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default AssessmentQuestionPage;
