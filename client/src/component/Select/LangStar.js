import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Languages from '../Options/Languages';

const LangStart = (props) => {
  console.log(props.skill,'props')
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
    <Grid item xs={12} sm={5} >
      <FormControl variant="outlined" className={classes.langForm}>
        <Select
          native
          value={props.skill.language}
          onChange={props.handleArrayChange}
          name="language"
        >
          {Languages.map(language=>(
            <option value={language.value}
                    name={language.name} 
                    key={language.value}
            >
              {language.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} sm={5}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name={`level${props.num}`}
          value={props.skill.level}
          onChange={props.handleArrayChange}

        />
      </Box>
    </Grid>
  </Grid>
  )
}

export default LangStart
