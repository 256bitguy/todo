import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TaskContext } from '../../Context';

const Addsubtasks = () => {
    const {subtasks, setSubtasks}=React.useContext(TaskContext);
  const [subTaskText, setSubTaskText] = useState('');
  const [addSubTask, setAddSubTask] = useState(false);

  const handleInputChange = (event) => {
    setSubTaskText(event.target.value);
  };

  const handleAddSubTask = () => {
    // Use the subTaskText as needed, for example, store it in your state or perform an action
    console.log('Submitted SubTask:', subTaskText);

    // Reset the input field
    setSubTaskText('');
    setSubtasks((prev) => [...prev, subTaskText]);

    // Toggle the addSubTask state
    setAddSubTask(!addSubTask);
  };
  console.log(subtasks);
  return (
    <div>
      {addSubTask ? (
        <div>
          <TextField
            value={subTaskText}
            onChange={handleInputChange}
            label="Your SubTask"
          />
          <Button onClick={handleAddSubTask}>Submit</Button>
        </div>
      ) : (
        <Button onClick={() => setAddSubTask(!addSubTask)}>Add New</Button>
      )}
    </div>
  );
};

export default Addsubtasks;
