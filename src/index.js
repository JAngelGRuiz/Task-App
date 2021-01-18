import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { onSnapshot } from 'mobx-state-tree';
import TaskList from './models/TaskList';

let initalState = {};

if(localStorage.getItem('taskList')){
  initalState = JSON.parse(localStorage.getItem('taskList'))
}

const taskList = TaskList.create(initalState);

onSnapshot(taskList, snapshot => {
  localStorage.setItem('taskList', JSON.stringify(snapshot));
})

ReactDOM.render(
  <React.StrictMode>
    <App taskList={taskList} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
