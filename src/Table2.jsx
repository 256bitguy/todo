import { Button, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { TaskContext } from './Context'
import AddTask from './components/task/Addtask'
import Delete from './components/actions/del/Delete'
const Table2 = () => {
    const {list,setList}=React.useContext(TaskContext);

  return (
    <div 
    style={{
      
       height:"80vh"
    }}>
        <TableContainer
        style={{
            background:"#2123",
            display:"flex",
            flexDirection:"column",
                fontSize:"40px",
            width:"100vw",
            justifyContent:"space-around"
        }}>
            <TableHead
            style={{
                flex:"1",
                height:"100px",
                width:"100%",
                fontSize:"40px",
            }}>
                <TableRow
                style={{
                    display:"flex",
                     justifyContent:"space-around",
                    height:"200px",
                    width:"100%",
                    fontSize:"40px",
                }}>
                    <TableCell><Typography variant="h4">Sno.</Typography></TableCell>
                    <TableCell> <AddTask/> </TableCell>
                    <TableCell><Typography variant="h6">StartDate</Typography></TableCell>
                    <TableCell><Typography variant="h6">End Date</Typography></TableCell>
                    <TableCell><Typography variant="h6">TechUsed</Typography></TableCell>
                    <TableCell><Typography variant="h6">Actions</Typography></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                 
                    {
                        list.map((item,index)=>{
                            return (
                                    <TableRow  style={{
                                        display:"flex",
                                         justifyContent:"space-around",
                                        height:"200px",
                                        width:"100%"
                                    }}>
                                        <TableCell><Typography variant="h4">{index+1}</Typography></TableCell>
                    <TableCell><Typography variant="h4">{item.Task}</Typography></TableCell>
                    <TableCell><Typography variant="h4">{item.start}</Typography></TableCell>
                    <TableCell><Typography variant="h4">{item.end}</Typography></TableCell>
                    <TableCell><Typography variant="h4">{item.status}</Typography></TableCell>
                    <TableCell><span><Delete idea={item.id}/><Button>Edit</Button></span></TableCell>
                
                                        </TableRow>
                            )
                        })
                    }
                 
            </TableBody>
            <TableFooter style={{
                flex:"1"
            }}>Total number of tasks added are {list.length}</TableFooter>
        </TableContainer>
    </div>
  )
}

export default Table2