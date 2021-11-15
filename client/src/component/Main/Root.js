import React,{Fragment,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import Cards from '../User/Cards';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'blue',
    padding:'3%',
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    paddingBottom:'3%',
    marginBottom:'2%',
    display:'flex',
    flexWrap:'wrap',
    maxWidth:'1200px',
    minHeight:'500px',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'center',

  },
  title:{
    margin:'2%',
    textAlign:'center',
    color:'#3f51b5',
    fontSize:'2rem',
  }
}));

const Root = () => {
  const classes = useStyles();
  const [users,setUsers] = useState([])

  return (
    <Fragment>
      <Box>
        <Grid className={classes.title}>検索結果：807件</Grid>
        <Grid container className={classes.paper} >
          <Cards users={users}/>
          <Cards users={users}/>
          <Cards users={users}/>
          <Cards users={users}/>
          <Cards users={users}/>
          <Cards users={users}/>
          <Cards users={users}/>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default Root
