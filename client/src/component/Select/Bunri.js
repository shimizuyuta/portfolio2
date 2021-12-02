import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Bunri = (props) => {
  return (
  <FormControl variant="outlined" fullWidth>
    <Select
      native
      name="bunri"
      value={props.bunri}
      onChange={props.handleChange}
    >
      <option value={"指定なし"}>指定なし</option>
      <option value={"文系"}>文系</option>
      <option value={"理系"}>理系</option>
    </Select>
  </FormControl>
  )
}

export default Bunri
