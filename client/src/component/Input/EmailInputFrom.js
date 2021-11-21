








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

const EmailInputFrom = (props) => {
  // const [email,setEmail] = useState('')
  console.log('props',props.form.email)
  return (
    <Fragment>
      <TextField 
        id="outlined-basic"
        variant="outlined" 
        fullWidth 
        name="email"
        required
        value={props.form.email}
        onChange={props.handleChange}

      />    </Fragment>
  )
}

export default EmailInputFrom
