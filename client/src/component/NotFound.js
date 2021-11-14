import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:"center",
    marginTop:theme.spacing(3),
    margin:"auto",
    padding:'auto',
    fontSize:"3vw",
  
  },
  title: {

  },

}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h1" className={classes.title}>404</Typography>
      <Typography variant="h3" className={classes.title}>File Not Found</Typography>
      <Typography variant="h4" className={classes.title}>アクセスしようとしたページは見つかりませんでした。</Typography>
    </Container>
  )
}

export default NotFound
