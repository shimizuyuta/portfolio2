import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const LangStart = () => {
  const [state, setState] = React.useState({
    prefecture: '',
    name: 'hai',
  });
  const [value, setValue] = React.useState(2);

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
  const useStyles = makeStyles((theme) => ({
    langForm:{
      maxWidth:'400px',
      minWidth:'300px'
    },
    skillsForm:{
      marginBottom:'5%',
      marginTop:'1%'
    }
  }));

  const classes = useStyles();
  return (
  <Grid container direction="row"   justifyContent="space-between"  className={classes.skillsForm}>
    <Grid item xs={5}  >
      <FormControl variant="outlined" className={classes.langForm}>
        <Select
          native
          value={state.langStart}
          onChange={handleChange}
          inputProps={{
            name: 'langStart',
            id: 'outlined-langStart-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>ActionScript</option>
	    	  <option value={2}>AIR</option>
	    	  <option value={3}>Androidアプリ</option>
	    	  <option value={4}>ASP.net</option>
	    	  <option value={5}>C#</option>
	    	  <option value={6}>COBOL</option>
	    	  <option value={7}>CSS</option>
	    	  <option value={8}>C／C++</option>
	    	  <option value={9}>Delphi</option>
	    	  <option value={10}>Facebookアプリ</option>
	    	  <option value={11}>Fortran</option>
	    	  <option value={12}>Go</option>
	    	  <option value={13}>HTML</option>
	    	  <option value={14}>iPhoneアプリ</option>
	    	  <option value={15}>Java</option>
	    	  <option value={16}>JavaScript</option>
	    	  <option value={17}>MATLAB</option>
	    	  <option value={18}>MySQL</option>
	    	  <option value={19}>Objective-C</option>
	    	  <option value={20}>Open CV</option>
	    	  <option value={21}>OpenGL</option>
	    	  <option value={22}>Oracle</option>
	    	  <option value={23}>Pascal</option>
	    	  <option value={24}>Perl</option>
	    	  <option value={25}>PHP</option>
	    	  <option value={26}>Postgres</option>
	    	  <option value={27}>Python</option>
	    	  <option value={28}>Ruby</option>
	    	  <option value={29}>R言語</option>
	    	  <option value={30}>Scala</option>
	    	  <option value={31}>SQL</option>
	    	  <option value={32}>Swift</option>
	    	  <option value={33}>Unity</option>
	    	  <option value={34}>VB</option>
	    	  <option value={35}>VB .net</option>
	    	  <option value={36}>VBA</option>
	    	  <option value={37}>VC</option>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={5} >
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue,'value start')
            setValue(newValue);
          }}
        />
      </Box>
    </Grid>
  </Grid>
  )
}

export default LangStart
