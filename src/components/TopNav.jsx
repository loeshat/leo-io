import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';


const TopNav = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Button
          size="large"
          color="inherit"
          startIcon={<HomeIcon />}
          name='navbar-home'
          sx={{ mr: 2 }}
        >
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BigBrain
        </Typography>
        <Button
          color="inherit"
          name='log-out'
        />
      </Toolbar>
    </AppBar>

  )
}

export default TopNav;