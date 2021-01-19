import React from 'react';
import { Button, Input, WrapperEdit } from './styles';

const EditForm = ({ taskList, id }) => {

    let changeText = '';
    const handleSubmit = (e) => {
        e.preventDefault();
        if(changeText.value){
            taskList.tasks[id].edit(changeText.value);
        }else{
            alert('Olvidas algo importante... Tu TASK. No olvides escribirla')
        }
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
