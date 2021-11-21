import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



export default function username(props) {

  return (
    <form noValidate autoComplete="off">
      <TextField 
      id="outlined-basic" 
      name="username"
      value={props.username}
      onChange={props.handleChange}
      variant="outlined"
      fullWidth
    />
    </form>
  );
}