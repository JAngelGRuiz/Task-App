import React, { useEffect, useState } from 'react';

const TaskForm = ({ taskList, isEditing, id, name, render }) => {
    const[taskValue, setTaskValue] = useState(isEditing ? name : '')

    useEffect(() => {
      if(isEditing){
        setTaskValue(name)
      }
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault();

      if(!taskValue){
        alert('Do not forget to write your NOTE')
        return
      }

      if(isEditing) {
        taskList.edit(taskValue, id);
        return
      }

      taskList.add({
        name: taskValue,
        id: Math.random().toString(36).substr(2, 18)
      })

      setTaskValue('')
    }

    const handleChange = (e) => {
      setTaskValue(e.target.value)
    }

    return (
      render({handleSubmit, handleChange, taskValue, isEditing})
    );
};

export default TaskForm;
