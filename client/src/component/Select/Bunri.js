import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Bunri = () => {
  const [state, setState] = React.useState({
    prefecture: '',
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
      value={state.bunri}
      onChange={handleChange}
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
