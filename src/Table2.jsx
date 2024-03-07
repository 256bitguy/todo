import { Button, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { TaskContext } from './Context'
import AddTask from './components/task/Addtask'
import EditTask from './components/task/EditTask'
import Delete from './components/actions/del/Delete'
const Table2 = () => {
    const {list,setList}=React.useContext(TaskContext);

  return (
    <div 
    style={{
      margin:"10px",
       height:"80vh"
    }}>
        <TableContainer
        style={{
            background:"#f0f0f0",
            display:"flex",
            flexDirection:"column",
            width:"100vw",
            justifyContent:"space-evenly"
        }}>
            <TableHead
            style={{
                flex:"1",
                height:"100px",
                width:"100%",
                 
            }}>
                <TableRow
                style={{
                    display:"flex",
                     justifyContent:"space-evenly",
                    height:"100px",
                    width:"100%",
                    fontSize:"40px",
                }}>
                    <TableCell><Typography style={{ color: "#333" }} variant="h6">S No.</Typography></TableCell>
                    <TableCell> <AddTask/> </TableCell>
                    <TableCell><Typography style={{ color: "#333" }} variant="h6">StartDate</Typography></TableCell>
                    <TableCell><Typography style={{ color: "#333" }} variant="h6">End Date</Typography></TableCell>
                    <TableCell><Typography style={{ color: "#333" }} variant="h6">TechUsed</Typography></TableCell>
                    <TableCell><Typography style={{ color: "#333" }} variant="h6">Actions</Typography></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                 
                    {
                        list.map((item,index)=>{
                            return (
                                    <TableRow  style={{
                                        display:"flex",
                                         justifyContent:"space-evenly",
                                         textAlign:"center", 
                                        height:"150px",
                                        width:"100%",
                                         
                                        margin:'1px',backgroundColor: index % 2 === 0 ? "white" : "#f0f0f0",
                                    }}>
                                        <TableCell style={{
                                            display:"flex",
                                            justifyContent:"space-evenly",
                                            alignItems:"center" 
                                        }}><Typography variant="h4">{index+1}.</Typography></TableCell>
                    <TableCell style={{
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems:"center"
                                        }}><Typography variant="h6">{item.Task}</Typography></TableCell>
                    <TableCell style={{
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems:"center"
                                        }}><Typography variant="h6">{item.start}</Typography></TableCell>
                    <TableCell style={{
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems:"center"
                                        }}><Typography variant="h6">{item.end}</Typography></TableCell>
                    <TableCell style={{
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems:"center"
                                        }}><Typography variant="h6">{item.status}</Typography></TableCell>
                    <TableCell style={{
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems:"center"
                                        }}><span><Delete idea={item.id}/></span></TableCell>
                
                                        </TableRow>
                            )
                        })
                    }
                 
            </TableBody>
            <TableFooter style={{
                flex:"1"
            }}>
                <Typography variant='h6'>Total number of tasks added are {list.length}</Typography>
                <div style={{
                    textAlign:'center'
                }}>
                <Typography variant='h5' >Design and edited by Vivek raj Srivastava</Typography>
                </div>
                </TableFooter>
        </TableContainer>
    </div>
  )
}

export default Table2