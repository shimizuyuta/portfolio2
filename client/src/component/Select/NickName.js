import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
}));

export default function NickName() {
  const classes = useStyles();


  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField 
      id="outlined-basic" 
      value={name}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />
    </form>
  );
}