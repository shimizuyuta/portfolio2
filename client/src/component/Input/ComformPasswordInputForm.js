

import React,{Fragment} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({

}))

const ComformPasswordInputForm = (props) => {

  const classes = useStyles();
  return (
    <FormControl  variant="outlined" fullWidth>
      <OutlinedInput
        id="outlined-adornment-password"
        type={props.form.showPassword2 ? 'text' : 'password'}
        value={props.form.comformPassword}
        name="comformPassword"
        onChange={props.handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={props.handleClickShowPassword2}
              onMouseDown={props.handleMouseDownPassword2}
              edge="end"
            >
              {props.form.showPassword2 ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
  
    </FormControl>
  )
}

export default ComformPasswordInputForm