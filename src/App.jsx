 import React from "react"
import Header from "./Header"
import Table from "./Table"
import Footer from "./Footer"

import { TaskProvider} from './Context'
import Table2 from "./Table2"
function App() {
 
   
   return (
    <>
       <TaskProvider>
       <Header/>
        <Table2/>
         
       </TaskProvider>
    </>
  )
}

export default App
