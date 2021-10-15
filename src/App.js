import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { setData, setStudentInfo } from './redux/action';
import { csv } from "d3";
import studentData from "./student-dashboard-data.csv";
import studentInfoData from "./student-info-data.csv"
import Header  from './components/Header';
import Nav from "./components/Nav";
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import StudentInfo from './components/StudentInfo';
import AssignmentInfo from './components/AssignmentInfo.js';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    csv(studentData).then(data => dispatch(setData(data)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    csv(studentInfoData).then(data => dispatch(setStudentInfo(data)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/student/:name/" component={StudentInfo} />
          <Route path="/assignment/:opdracht/" component={AssignmentInfo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
