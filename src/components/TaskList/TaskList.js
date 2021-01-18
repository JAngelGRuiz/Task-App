import React from 'react';
import { WrapperList } from './styles';
import Task from '../Task/Task';
import { observer } from 'mobx-react';

const TaskList = ({ taskList }) => {
    return (
        <WrapperList>
            { taskList.tasks.map((tasks, i) => {
                return(
                    <Task tasks={tasks} taskList={taskList} id={i} key={i} />
                )
            })}
        </WrapperList>
    );
};

export default observer(TaskList);