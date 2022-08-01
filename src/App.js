import React, { Fragment } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import { observer } from 'mobx-react';
import ToggleViewBtn from './components/ToggleViewBtn/ToggleViewBtn';
import SingleForm from './components/SingleForm';

const App = ({ taskList }) => {
  return (
    <Fragment>
      <Header />
      <TaskForm taskList={taskList} render={(props) =>  <SingleForm {...props} />} />
      <ToggleViewBtn taskList={taskList} />
      <TaskList taskList={taskList} />
    </Fragment>
  );
}

export default observer(App);
