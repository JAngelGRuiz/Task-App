import React from 'react';
import { WrapperList, EmptyMessage } from './styles';
import Task from '../Task/Task';
import { observer } from 'mobx-react';

const TaskList = ({ taskList }) => {
    if(taskList.tasks.length === 0){
        return (
            <WrapperList emptyList={true}>
                <EmptyMessage>Empieza a escribir tus notas</EmptyMessage>
            </WrapperList>
        )
    }else{
        return (
            <WrapperList emptyList={false}>
                { taskList.tasks.map((tasks, i) => {
                    return(
                        <Task tasks={tasks} taskList={taskList} id={i} key={i} />
                    )
                })
                }
            </WrapperList>
        );
    }
};

export default observer(TaskList);