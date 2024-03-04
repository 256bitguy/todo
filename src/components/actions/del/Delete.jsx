import React from 'react'
import { TaskContext } from '../../../Context'
import { Button } from '@mui/material';

const Delete = ({idea}) => {
  console.log(idea);
   
  const {list,setList}=React.useContext(TaskContext);
  const deletef=(ide)=>{
      const newlist=list.filter((item)=>item.id!==ide)
      setList(newlist);
      console.log(list)
  }
  return (
    <div>
        <Button onClick={()=>deletef(idea)}>DEL</Button>
    </div>
  )
}

export default Delete