import React, { useState, useContext, useEffect } from "react";


const TaskContext =React.createContext();
const dataList=[
  { id: 1,  Task: 'first Task', start: '1/03/2024',end:'3/04/2024',status:"Pre-Requisites", subtaskss:["one","two"] },
  { id: 2, Task: 'Second Task', start: '1/03/2024',end:'3/04/2024',status:"Pre-Requisites",subtaskss:["three","two"] },
  { id: 3,  Task: 'Third Task', start: '1/03/2024',end:'3/04/2024',status:"Pre-Requisites", subtaskss:["four","two"] },
  { id: 4,  Task: 'fourth task', start: '1/03/2024',end:'3/04/2024',status:"completed",  subtaskss:["one","five"]},
  { id: 5,  Task: 'Fifth Task', start: '1/03/2024',end:'3/04/2024',status:"Pre-Requisites",subtaskss:["six","two"]},
   
]
const initial=[{text:"first task"}]
const TaskProvider = ({children}) => {
    const [searchTerm,setSearchTerm]=useState();
    const [list,setList]=useState(dataList);
    const [tasks,setTasks]=useState();
    const [subtasks,setSubtasks]=useState(initial);
    const [sdate,setSdate]=useState();
    const [edate,setEdate]=useState();
    const [status,setStatus]=useState();
    const [id,setId]=useState(list.length)
    
      
     console.log(list);
  return (
     <TaskContext.Provider
     value={{
      id,
         list,
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
         setStatus,
         setList,
         setId
     }}
     >
{children}
     </TaskContext.Provider>
  )
};
 

export   {TaskContext,TaskProvider}