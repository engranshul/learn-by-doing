import React from 'react'
import theme from './Exercise3theme'
import { ThemeProvider } from '@material-ui/core/styles';
import {Button,Typography} from '@material-ui/core';

function Exercise3() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant = 'h1' align = 'center'>hello world..</Typography>
        <Button variant="contained" color="primary">
         Secondary
        </Button>
      </ThemeProvider>
    </div>
  )
}

export default Exercise3


/* 
in this we will learn how to override default theme..

default theme :
https://material-ui.com/customization/default-theme/#default-theme
generally we customize palette and typography in default theme

see how in this with the help of theme provider we have overridden
primary to point to purple color instead of blue color

learnt how to use Typography with props..
*/