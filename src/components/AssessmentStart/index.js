import React, {useState, useEffect} from 'react';
import StyledWrapper from './StyledWrapper';
import {useAuth} from './../../providers/Auth';
import AssessmentApi from './../../api/assessment';
import { useNavigate } from 'react-router-dom';
import { IconUser } from '@tabler/icons';

const AssessmentStartPage = () => {
  let navigate = useNavigate();
  const [authState] = useAuth();

  const {
    currentUser
  } = authState;

  useEffect(() => {
    if(!currentUser || !currentUser.id) {
      navigate('/');
    }
  }, [currentUser]);

  const handleStartAssessment = (e) => {
    AssessmentApi
      .startAssessment()
      .then((data) => {
        navigate(`/assessment/${data.id}/1`);
      });
  }

  return (
    <StyledWrapper>
      <div style={{marginTop: "50px"}} className="card">
        <div className="card-body">
          <div style={{flexGrow: 1}}>
            <div className="user-data">
              <IconUser size={24}/>
              <h2>{currentUser ? currentUser.username : null}</h2>
            </div>
            <h1 style={{textAlign: "center"}}>ReactJS Assessment</h1>
          </div>
          <div>
            <section>
              <h4>Before you begin</h4>
              <p>Each assessment must be completed in one session. Make sure you are finish before exiting</p>
            </section>
            <section>
              <h4>Overview</h4>
              <ul>
                <li>There are 20 questions in this session</li>
                <li>Each question is multiple choice, with only one right answer</li>
                <li>The test will take around 15 min to complete</li>
              </ul>
            </section>
          </div>
          <div style={{textAlign: "end"}}>
            <button className="btn-primary" style={{}} onClick={handleStartAssessment}>START TEST</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default AssessmentStartPage;