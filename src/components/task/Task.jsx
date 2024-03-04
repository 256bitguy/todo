import { List, ListItem } from '@mui/material'
import React from 'react'

const Task = () => {
  return (
    <div> 
        {/**here the list of task will be displayed and a form or prop
         * will pass so that we can manage the next component inside it.
         */}
         <List>
          <ListItem>hello</ListItem>
         </List>
    </div>
  )
}

export default Task