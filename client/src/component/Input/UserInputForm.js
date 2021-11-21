




import React,{Fragment,useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const UserInputForm = (props) => {  
  return (
    <Fragment>
      <TextField 
        id="outlined-basic"
        variant="outlined" 
        fullWidth 
        required
        name="username"
        value={props.username}
        onChange={props.handleChange}
      />
    </Fragment>
  )
}

export default UserInputForm
