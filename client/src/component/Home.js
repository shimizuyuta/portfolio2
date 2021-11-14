import React,{useState,Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'blue',
    padding:'3%',
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    display:'flex',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
  },
}));


const Home = () => {
  const [users,setUsers] = useState([])
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.paper} >
        <p>login 後</p>
      </Grid>
    </Fragment>
  )
}

export default Home




