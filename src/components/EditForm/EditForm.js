import React from 'react';
import { Button, Input, WrapperEdit } from './styles';

const EditForm = ({ taskList, id }) => {

    let changeText = '';
    const handleSubmit = (e) => {
        e.preventDefault();
        taskList.tasks[id].edit(changeText.value);
        e.target.reset();
        changeText.focus();
    }

    return (
        <WrapperEdit onSubmit={handleSubmit}>
            <Input placeholder='Edita aquí' ref={input => (changeText = input)} />
            <Button type='submit'>Editar</Button>
        </WrapperEdit>
    );
};

export default EditForm;
