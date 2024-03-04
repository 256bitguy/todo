import { Typography } from '@mui/material';
import React from 'react';
import Search from './components/search/Search';

const Header = () => {
  return (
    <div
    style={{
        display:'flex',
        
        height:"150px",
        fontSize:"30px"
    }}>
        <div style={{
            flex:1,
             justifyContent:"flex-start"
             
            
        }}>
            <Typography variant='h3'> Task Scheduler</Typography>
        </div>
        <div style={{
            flex:1,
            
        }}>
            <Search/>
        </div>
    </div>
  )
}

export default Header