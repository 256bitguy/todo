 import React from "react"
import Header from "./Header"
import Table from "./Table"
import Footer from "./Footer"

import { TaskProvider} from './Context'
function App() {
 
   
   return (
    <>
       <TaskProvider>
       <Header/>
        <Table/>
        <Footer/>
       </TaskProvider>
    </>
  )
}

export default App
