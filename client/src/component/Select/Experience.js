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
      name="experience"
    >
      <option value={"指定なし"}>指定なし</option>
      <option value={"実務経験あり"}>実務経験あり</option>
      <option value={"実務経験なし"}>実務経験なし</option>
    </Select>
  </FormControl>
  )
}

export default Experience
