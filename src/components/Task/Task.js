import React, { useState } from 'react';
import { observer } from 'mobx-react';
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
import TaskForm from '../TaskForm/TaskForm';
import SingleForm from '../SingleForm';

const Task = ({ task, taskList }) => {

    const [isEditing, setIsEditing ] = useState(false);
    const { isDone, setIsDone, name, id } = task

    return (
        <TaskContainer isDone={isDone} hide={taskList.hideDone}>
            <List isEditing={isEditing}>
                <WrapperTask isEditing={isEditing} isDone={isDone}>
                    <Check
                        type='checkbox'
                        defaultChecked={isDone ? 'checked' : null}
                        onClick={() => setIsDone()}
                    />
                    <TodoTask onClick={() => setIsEditing(!isEditing)}> { name } </TodoTask>
                    <DltSection>
                      <DltButton onClick={() => taskList.delete(id)}>Delete</DltButton>
                    </DltSection>
                </WrapperTask> 
                <EditingPart isEditing={isEditing}>
                    <TaskForm
                        taskList={taskList}
                        id={id}
                        isEditing={isEditing}
                        name={name}
                        render={
                            (props) => 
                                <SingleForm {...props} />
                        }
                     />
                </EditingPart> 
            </List>
        </TaskContainer>    
    );
};

export default observer(Task);
