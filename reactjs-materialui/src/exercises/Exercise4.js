import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import {Button,Typography} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
})


function Exercise4() {
  const classes = useStyles()     // regular function call..
  return (
    <div className = {classes.root}>
      <ThemeProvider theme={theme}>
        <Typography variant = 'h1' align = 'center'>hello world..</Typography>
        <Button variant="contained" color="primary">
         Secondary
        </Button>
      </ThemeProvider>
    </div>
  )
}

export default Exercise4


/* 
as useStyles is a regular func u can pass it parameters or props also
learnt how to use makestyles and than use them
learnt how to use themeprovider by using theme in the same class or in another
*/