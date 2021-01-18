import React from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import { observer } from 'mobx-react';
import ToggleViewBtn from './components/ToggleViewBtn/ToggleViewBtn';

const App = (props) => {

  const { taskList } =  props;

  return (
    <>
      <Header />
      <TaskForm taskList={taskList} />
      <ToggleViewBtn taskList={taskList} />
      <TaskList taskList={taskList} />
    </>
  );
}

export default observer(App);
