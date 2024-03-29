import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { List, ListItem, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { TaskContext } from '../../Context';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Addsubtasks from './Addsubtasks';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const techs=[
    {title:'React Js'},
    {title:'Node Js'},
    {title:'React +NodeJS'},
    {title:'Javascript'}
  ]
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function TransitionsModal() {
  const {id, list,
    tasks,
    subtasks,
    sdate,
    edate,
    status,
    searchTerm,
    setSearchTerm,
    setTasks,
    setSubtasks,
    setSdate,
    setEdate,
    setStatus,setList}=React.useContext(TaskContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [addSubtask,setAddSubTask]=React.useState(false)
    const [currTask,setCurrTask]=React.useState('');
     

  const handleAutocompleteChange = (event, newValue) => {
     setSelectedOption(newValue);
    
  };
  
    const addedTask=(e)=>{
setCurrTask(e.target.value);
console.log(currTask);
    }

      const added=()=>{
        const newdata={
          id:id+1,
          Task:currTask,
          start:startDate.toLocaleDateString(),
          end:endDate.toLocaleDateString(),
          status:selectedOption,
           }

           setList((prev)=>[...prev,newdata]);
           console.log(list);
            
      }
       
  return (
    <div>
      <Button onClick={handleOpen}><Typography variant="h5" color={"#123abc"}>Add Tasks</Typography></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <div>
           <Typography
  variant="h4"
  style={{
    textAlign: "center", // Center the text
    fontWeight: "bold", // Font weight
    letterSpacing: "2px", // Letter spacing
    fontFamily: "Verdana, sans-serif", // Font family
    color: "#4CAF50", // Green color
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Text shadow
  }}
>
  Add a new task here
</Typography>

           </div>
           <div style={{
            display:'flex',
            flexDirection:'row'
           }}>
                <div> 
                <TextField
  label="Add Task"
  variant="outlined"
  fullWidth
  style={{
    marginBottom: '15px',
    backgroundColor: '#fff', // Input background color
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
  }}
  InputLabelProps={{
    style: {
      fontWeight: 'bold', // Label font weight
      color: '#333', // Label text color
    },
  }}
  InputProps={{
    style: {
      fontSize: '16px', // Input font size
      color: '#333', // Input text color
    },
  }}
  onChange={addedTask}
/>

                <div>
                <Addsubtasks/>
                </div>
                <List>
                  {subtasks.map((item)=>{
                    return(
                      <ListItem>
                         <Checkbox {...label}   /> <Typography>{item.text}</Typography>
                      </ListItem>
                    )
                  })}
                    </List>
                    <DatePicker
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  placeholderText="Select Start Date"
  dateFormat="MM/dd/yyyy"
  style={{
    marginTop: '10px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    color: '#333',
    padding: '8px',
    border: 'none',
    outline: 'none',
  }}
/>
<DatePicker
  selected={endDate}
  onChange={(date) => setEndDate(date)}
  placeholderText="Select End Date"
  dateFormat="MM/dd/yyyy"
  style={{
    marginTop: '10px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    color: '#333',
    padding: '8px',
    border: 'none',
    outline: 'none',
  }}
/>


                </div>
                <div>
                <Autocomplete
        multiple
        id="tags-filled"
        options={techs.map((option) => option.title)}
         
        onChange={handleAutocompleteChange}
        // renderTags={(value, getTagProps) =>
        //   value.map((option, index) => (
        //     <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        //   ))
        // }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="Add Techs"
            
            placeholder="Favorites"
            style={{
              backgroundColor: '#fff', // Input background color
              borderRadius: '8px', // Rounded corners
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
            }}
            InputLabelProps={{
              style: {
                fontWeight: 'bold', // Label font weight
                color: '#333', // Label text color
              },
            }}
            renderOption={(props, option, { selected }) => (
              <li {...props} style={{ backgroundColor: selected ? '#4CAF50' : 'white', padding: '8px' }}>
                {option}
              </li>)}
          />
        )}
      />

<Button
  onClick={added}
  variant="contained"
  color="primary"
  style={{
    marginTop: '10px',
    backgroundColor: '#4CAF50', // Green color
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
  ADD TO TASK
</Button>

                </div>
           </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}