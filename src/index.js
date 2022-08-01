import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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