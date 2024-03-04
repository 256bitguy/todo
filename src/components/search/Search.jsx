import React from 'react'
import { TaskContext } from '../../Context';
 import TextField from '@mui/material/TextField';
const Search = () => {
  const {searchTerm,setSearchTerm}=React.useContext(TaskContext);
  function seting(e){
    setSearchTerm(e.target.value)
    console.log(searchTerm);
  }
  return (
    <div
    style={{
      display:'flex',
      justifyContent:"center",
      alignContent:'center'
    }}
    >
      <TextField id="outlined-basic" label="Search Task" variant="outlined" onChange={(e)=>{seting(e)}} />
    </div>
  )
}

export default Search