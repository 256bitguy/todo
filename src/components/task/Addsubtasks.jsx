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
   

    // Reset the input field
    setSubTaskText('');
    const newd={text:subTaskText}
    setSubtasks((prev) => [...prev, newd]);

    // Toggle the addSubTask state
    setAddSubTask(!addSubTask);
  };
   
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
         
        <Button
   onClick={() => setAddSubTask(!addSubTask)}
  variant="contained"
  color="primary"
  style={{
    marginTop: '10px',
    backgroundColor: '#2196F3', // Blue color
    color: '#fff', // Text color
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease-in-out',
  }}
>
  ADD A SUBTASK
</Button>

      )}
    </div>
  );
};

export default Addsubtasks;
