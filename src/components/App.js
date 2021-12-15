import React from 'react';
import LoginPage from './Login';
import AssessmentStartPage from './AssessmentStart';
import AssessmentQuestionPage from './AssessmentQuestion';
import AssessmentResultPage from './AssessmentResult';
import AuthProvider from './../providers/Auth';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import GlobalStyle from './../globalStyles'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyle/>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/assessment" element={<AssessmentStartPage/>}/>
          <Route exact path="/assessment/:assesmentId/:questionId" element={<AssessmentQuestionPage/>}/>
          <Route exact path="/assessment/:assesmentId/result" element={<AssessmentResultPage/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
};
export default App;