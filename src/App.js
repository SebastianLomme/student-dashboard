import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setData } from './redux/action';
import { useEffect } from 'react';
import { csv } from "d3";
import studentData from "./student-dashboard-data.csv";
import Header  from './components/Header';
import Nav from "./components/Nav";
import GrafBar from './components/GrafBar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.reducer)
  useEffect(() => {
    csv(studentData).then(data => dispatch(setData(data)))
  }, [dispatch])

  console.log(data)

  return (
    <div className="App">
      <Header />
      <Nav />
      <GrafBar data={ data }/>

    </div>
  );
}

export default App;
