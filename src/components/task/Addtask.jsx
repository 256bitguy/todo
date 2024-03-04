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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
     
    const [startDate, setStartDate] = React.useState(new Date());
    const [selectedOption, setSelectedOption] = React.useState(null);

  const handleAutocompleteChange = (event, newValue) => {
     setSelectedOption(newValue);
    
  };
  console.log(selectedOption);
    const techs=[
      {title:'React Js'},
      {title:'Node Js'},
      {title:'React +NodeJS'},
      {title:'Javascript'}
    ]
    const dataFilled={
      subtask:[],
      date:startDate,
      techs:'',

    }
    const [addSubtask,setAddSubTask]=React.useState(false)
    const { list,
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
      setStatus}=React.useContext(TaskContext);
      console.log(subtasks,sdate)
  return (
    <div>
      <Button onClick={handleOpen}>Tasks</Button>
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
            <Typography variant='h4'>This is the name of task</Typography>
           </div>
           <div style={{
            display:'flex',
            flexDirection:'row'
           }}>
                <div> 
                <Button onClick={()=>{setAddSubTask(!addSubtask)}}>Add Subtaks</Button>
                <div>
                <Addsubtasks/>
                </div>
                <List>
                    <ListItem>   <Checkbox {...label}  onChange={()=>{disabled}} /> <Typography>1st Subtask</Typography></ListItem>
                    <ListItem>   <Checkbox {...label}   /> <Typography>2nd Subtask</Typography></ListItem>
                </List>
                <DatePicker selected={startDate} onChange={(date) => {setStartDate(date)
                setSdate(startDate)}} />

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
                </div>
           </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}