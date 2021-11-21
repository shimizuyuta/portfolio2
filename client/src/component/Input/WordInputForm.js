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

const WordInputFrom = (props) => {  
  return (
    <Fragment>
      <TextField 
        id="outlined-basic"
        variant="outlined" 
        multiline
        rows={6}
        fullWidth
        name="word"
        value={props.word}
        onChange={props.handleChange}
      />
    </Fragment>
  )
}

export default WordInputFrom
