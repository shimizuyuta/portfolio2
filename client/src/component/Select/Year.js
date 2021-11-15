import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Year = () => {
  const [state, setState] = React.useState({
    year: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    console.log('event',event.target)
    console.log('event value',event.target.value)
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  console.log(state,'state')
  };
  return (
  <FormControl variant="outlined" fullWidth>
    <Select
      native
      value={state.year}
      onChange={handleChange}
      inputProps={{
        name: 'year',
        id: 'outlined-year-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option value={0}>高校生</option>
      <option value={1}>専門・大学１年生</option>
      <option value={2}>専門・大学２年生</option>
      <option value={3}>専門・大学３年生</option>
      <option value={4}>専門・大学４年生</option>
    </Select>
  </FormControl>
  )
}

export default Year
