import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import years from '../Options/Years';

const Year = (props) => {

  return (
  <FormControl variant="outlined" fullWidth>
    <Select
      native
      name="year"
      value={props.year}
      onChange={props.handleChange}
    >
    {years.map(year=>(
        <option value={year.value}
                name={year.name} 
                key={year.value}
        >
          {year.name}
        </option>
      ))}
    </Select>
  </FormControl>
  )
}

export default Year
