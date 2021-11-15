import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Experience = () => {
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
      value={state.experience}
      onChange={handleChange}
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
