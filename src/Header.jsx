import { Typography } from '@mui/material';
import React from 'react';
import Search from './components/search/Search';

const Header = () => {
  return (
    <div
    style={{
        display:'flex',
        border:"2px solid black",
        height:"150px",
        fontSize:"30px"
    }}>
        <div style={{
            flex:1,
            border:"2px solid black",
            textAlign:"center"
            
        }}>
            <Typography > Task Scheduler</Typography>
        </div>
        <div style={{
            flex:1,
            border:"2px solid black"
        }}>
            <Search/>
        </div>
    </div>
  )
}

export default Header