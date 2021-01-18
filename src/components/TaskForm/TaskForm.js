import React from 'react';
import {
    WrapperForm,
    Button,
    Input
} from './styles';

const TaskForm = (props) => {

    const { taskList } = props;

    let nameInput = '';
    const handleSubmit = (e) => {
        e.preventDefault();
        taskList.add({
            todoTask: nameInput.value,
        })
        e.target.reset();
        nameInput.focus();
    }

    return (
        <WrapperForm onSubmit={handleSubmit}>
            <Input ref={input => (nameInput = input)} placeholder='Agrega tus notas' type='text' />
            <Button type='submit'>Agregar</Button>
        </WrapperForm>
    );
};

export default TaskForm;
