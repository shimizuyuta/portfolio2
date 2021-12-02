import React,{Fragment,useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import Cards from '../User/Cards';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
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
    margin:'1.3%',
    textAlign:'center',
    color:'#3f51b5',
    fontSize:'2rem',
    // marginBottom:0,
    fontFamily:'fantasy',
    border:'solid 3px #3f51b5',
    borderRadius:'1em',
    backgroundColor:'rgb(229 239 253)',
    maxWidth:'40%',
    marginLeft:'auto',
    marginRight:'auto',
    padding:'.5%'
  }
}));

const Root = () => {
  const classes = useStyles();
  const [users,setUsers] = useState([])

  useEffect(() => {
    console.log('root compo')
    
  }, [])

  return (
    <Fragment>
      <Box>
        <Grid className={classes.title}>検索結果：27件</Grid>
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
