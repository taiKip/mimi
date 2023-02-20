import { Button } from '@mui/material'
import React from 'react'
interface buttonProps{
  btnText:string
}

const StyledButton = ({btnText}:buttonProps) => {
  return (
    <Button>
      {btnText}
   </Button>
  )
}

export default StyledButton