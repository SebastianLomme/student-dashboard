import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { setData } from './redux/action';
import { useEffect } from 'react';
import { csv } from "d3";
import studentData from "./student-dashboard-data.csv";


function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.reducer.isLoading)
  console.log(loading)

  useEffect(() => {

    csv(studentData).then(data => dispatch(setData(data)))
  }, [dispatch])
  

  return (
    <div className="App">
      { loading ? <h1>...Loading</h1> : <h1>Hello World!</h1> }
    </div>
  );
}

export default App;
