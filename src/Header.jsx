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
            margin:"10px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           
        }}>
            <Typography
  style={{
    color: "#2196F3", // Blue color
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Text shadow
    fontWeight: "bold", // Font weight
    letterSpacing: "1px", // Letter spacing
    fontFamily: "Arial, sans-serif", // Font family
  }}
  variant="h4"
>
  Task Scheduler
</Typography>
        </div>
        <div
  style={{
    flex: 1,
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px", // Rounded corners
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
    background: "#f9f9f9", // Light background color
    padding: "8px", // Padding for inner content
    border: "1px solid #ccc", // Border
    maxWidth: "300px", // Set a maximum width
  }}
>
  <Search
    style={{
      width: "100%", // Make sure the search input takes up the entire width
      padding: "8px", // Padding for the input
      border: "none", // Remove input border
      outline: "none", // Remove input outline on focus
      fontSize: "16px", // Adjust font size
      color: "#333", // Text color
      background: "transparent", // Transparent background
    }}
  />
</div>

    </div>
  )
}

export default Header