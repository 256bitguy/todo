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
export default function TransitionsModal({valuee}) {
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
     const subTasksL=list.filter((item)=>item.id==valuee);
     const subtaskss=subTasksL[0].subtaskss;
     console.log( subtaskss);

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
      <Button onClick={handleOpen}><Typography variant="h5" color={"#123abc"}>Edit</Typography></Button>
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
            <Typography variant='h4'>Edit Your New Task Here</Typography>
           </div>
           <div style={{
            display:'flex',
            flexDirection:'row'
           }}>
                <div> 
                <TextField placeholder={subTasksL[0].Task} onChange={addedTask}></TextField>
                
                <List>
                  {subtaskss.map((item)=>{
                    return(
                      <ListItem>
                         <Checkbox {...label}   /> <Typography>{item}</Typography>
                      </ListItem>
                    )
                  })}
                    </List>
                <DatePicker selected={startDate} onChange={(date) => {setStartDate(date)
                }} /> 
                <DatePicker selected={endDate} onChange={(date) => {setEndDate(date)
                 }} />

                </div>
                <div>
                <Autocomplete
        multiple
        id="tags-filled"
        options={techs.map((option) => option.title)}
         
        onChange={handleAutocompleteChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
          />
        )}
      />

      <Button onClick={added }>ADD To Task</Button>
                </div>
           </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}