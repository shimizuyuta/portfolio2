import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Experience = (props) => {

  return (
  <FormControl variant="outlined" fullWidth>
    <Select
      native
      value={props.experience}
      onChange={props.handleChange}
      inputProps={{
        name: 'experience',
        id: 'outlined-experience-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option value={1}>実務経験あり</option>
      <option value={2}>実務経験なし</option>
    </Select>
  </FormControl>
  )
}

export default Experience
