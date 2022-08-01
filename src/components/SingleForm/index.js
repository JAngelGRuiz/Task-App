import React from 'react';
import {
    WrapperForm,
    Button,
    Input
} from './styles';

const SingleForm = ({ handleSubmit, handleChange, isEditing, taskValue }) => {
    return (
        <WrapperForm onSubmit={handleSubmit}>
            <Input onChange={handleChange} placeholder='Add your notes' type='text' value={taskValue} name='todos' />
            <Button type='submit'>{isEditing ? 'Edit' : 'Add'}</Button>
        </WrapperForm>
    );
};

export default SingleForm;
