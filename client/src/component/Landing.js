import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box,Grid ,Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:'center',
    margin:'3%',
    padding:'1%'
  },


  paper: {
    padding: theme.spacing(2),
    textAlign:'center',
    maxWidth:'730px',
    minWidth:'300px',
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,.2)",
    margin:'auto',
    marginTop:'20%'
  },
  title: {

  },

  icon:{
    display:'none',
    [theme.breakpoints.down('sm')]: {
      size:"small",
      display:'block',
    },
    color:"#fff"
  },
  img:{
    height: 233,
    width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }
}));

const Landing = () => {
  const classes = useStyles();
    return (
       <Paper className={classes.paper} >
          <Typography variant="h4" component="h2" style={{textAlign: 'center',margin:'1%'}}>
          がっちゃーとは
          </Typography>

          <Box  style={{textAlign: 'center',margin:'5%'}}>
             <Typography variant="body2" component="h1">
               がっちゃーとは学生エンジニア同士がマッチングできるアプリ
             </Typography>

          </Box>
         　 </Paper>
    )
}


export default Landing