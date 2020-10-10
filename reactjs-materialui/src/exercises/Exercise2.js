import React from 'react'
import Button from '@material-ui/core/Button';

function Exercise2() {
  return (
    <div>
       <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  )
}

export default Exercise2


/* 
in this i learnt how to create buttons 
see how primary color refers to blue and secondary color refers to red..
these are defaults but can be overridden..by overridden i mean make primary
color to show pink instead of blue
*/