import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setData, setStudentInfo } from './redux/action';
import { csv } from "d3";
import studentData from "./student-dashboard-data.csv";
import studentInfoData from "./student-info-data.csv"
import Header  from './components/Header';
import Nav from "./components/Nav";
import Home from './components/Home';
import GrafBar from './components/GrafBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import StudentInfo from './components/StudentInfo';
import AssigmentInfo from './components/AssigmentInfo.js';


function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.reducer.assigments)
  useEffect(() => {
    csv(studentData).then(data => dispatch(setData(data)))
  }, [dispatch])
  useEffect(() => {
    csv(studentInfoData).then(data => dispatch(setStudentInfo(data)))
}, [dispatch])
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/grafiek">
            <GrafBar data={data} filter={"Opdracht"} />
          </Route>
          <Route path="/student/:name/" component={StudentInfo} />
          <Route path="/assigment/:opdracht/" component={AssigmentInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
