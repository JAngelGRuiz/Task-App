import React from 'react';
import { WrapperList, EmptyMessage } from './styles';
import Task from '../Task/Task';
import { observer } from 'mobx-react';

const TaskList = ({ taskList }) => {
    if(!taskList.tasks.length){
        return (
            <WrapperList emptyList={true}>
                <EmptyMessage>Write your first note</EmptyMessage>
            </WrapperList>
        )
    }

      return (
        <WrapperList emptyList={false}>
          { 
            taskList.tasks.map((task) =>  
              <Task
                task={task} 
                taskList={taskList}
                key={task.id} 
              />
            )
          }
        </WrapperList>
      );
};

export default observer(TaskList);