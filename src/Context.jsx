import React, { useState, useContext, useEffect } from "react";


const TaskContext =React.createContext();

const TaskProvider = ({children}) => {
    const [searchTerm,setSearchTerm]=useState();
    const [list,setList]=useState([
        { id: 1,  Task: 'first Task', start: '1/03/2024',end:'3/04/2024',status:"Pre-Requisites",  },
  { id: 2, Task: 'Second Task', start: '1/03/2024',end:'3/04/2024',status:"Pre-Requisites", },
  { id: 3,  Task: 'Third Task', start: '1/03/2024',end:'3/04/2024',status:"Pre-Requisites",  },
  { id: 4,  Task: 'fourth task', start: '1/03/2024',end:'3/04/2024',status:"completed",  },
  { id: 5,  Task: 'Fifth Task', start: '1/03/2024',end:'3/04/2024',status:"Pre-Requisites",},
   
    ]);
    const [tasks,setTasks]=useState();
    const [subtasks,setSubtasks]=useState();
    const [sdate,setSdate]=useState();
    const [edate,setEdate]=useState();
    const [status,setStatus]=useState();
    
     useEffect(()=>{
      
        const data={
          id:list.length+1,
          Task:tasks,
          start:sdate,
          end:edate,
          status:status

        }
      
       
      setList((list)=>[...list,data]);
     },[tasks,sdate,edate,status]);
     console.log(list);
  return (
     <TaskContext.Provider
     value={{
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
         setStatus

     }}
     >
{children}
     </TaskContext.Provider>
  )
};
 

export   {TaskContext,TaskProvider}