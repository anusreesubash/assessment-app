import React, { useState, useEffect } from 'react';
import StyledWrapper from './StyledWrapper';
import {
  useNavigate,
  useParams
} from 'react-router-dom';
import AssessmentApi from './../../api/assessment';
import { IconRefresh } from '@tabler/icons';

const AssessmentResultPage = () => {
  const [score, setScore] = useState(null);
  const [summary, setSummary] = useState({})

  const {
    assesmentId
  } = useParams();

  useEffect(() => {
    AssessmentApi
      .getResult(assesmentId)
      .then((data) => {
        setScore(data.score)
        setSummary(data.summary)
      });
  }, []);

  if(score == null) {
    return (
      <StyledWrapper>
        <div style={{textAlign: "center"}} className="summary">
          <h1>Assessment Summary</h1>
          <IconRefresh size={36} className="spinner" style={{marginTop: "100px"}}/> 
        </div>
      </StyledWrapper>
    )
  }

  return (
    <StyledWrapper>
      <div className="summary">
        <h1>Assessment Summary</h1>
        <div className="card" style={{marginTop: "30px"}}>
          <div className="card-body">
            <div style={{textAlign: "center"}}>
              <h2>ReactJS Assessment</h2>
              <h4>Your score</h4>
              <h1>{score}/10</h1>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default AssessmentResultPage;