import React, { useState } from 'react';
import { observer } from 'mobx-react';
import EditForm from '../EditForm/EditForm';
import {
    TaskContainer,
    List,
    WrapperTask,
    Check, 
    TodoTask,
    EditingPart,
    DltButton,
    DltSection
} from './styles';

const Task = ({ tasks, id, taskList }) => {

    const [isEditing, setIsEditing ] = useState(false);

    return (
        <TaskContainer isDone={tasks.isDone} hide={taskList.hideDone}>
            <List isEditing={isEditing}>
                <WrapperTask isEditing={isEditing} isDone={tasks.isDone}>
                    <Check type='checkbox' defaultChecked={tasks.isDone ? 'checked' : null} onClick={() => tasks.setIsDone()} />
                    <TodoTask onClick={() => setIsEditing(!isEditing)}> { tasks.todoTask } </TodoTask>
                    <DltSection><DltButton onClick={() => taskList.delete(id)}>Eliminar</DltButton></DltSection>
                </WrapperTask> 
                <EditingPart isEditing={isEditing}>
                    <EditForm taskList={taskList} id={id} />
                </EditingPart> 
            </List>
        </TaskContainer>    
    );
};

export default observer(Task);
