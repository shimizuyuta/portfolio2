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
      inputProps={{
        name: 'bunri',
        id: 'outlined-bunri-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option value={1}>文系</option>
      <option value={2}>理系</option>
    </Select>
  </FormControl>
  )
}

export default Bunri
