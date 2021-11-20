


import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Box,DialogContent,Avatar,Grid,Divider,Paper,Chip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Bunri from '../Select/Bunri';
import Experience from '../Select/Experience';
import Faculty from '../Select/Faculty';
import Prefecture from '../Select/Prefecture';
import Year from '../Select/Year';
import NickName from '../Select/NickName';
import LangStart from '../Select/LangStar';
import { useSelector } from "react-redux";



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    maxWidth:'1200px',
    margin:'auto',
    

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  box:{
    margin: "1vw",
    paddingLeft: "1vw",
    marginTop:'0'
  },

  button:{
    margin:theme.spacing(2)
  },
  avatar:{
    textAlign: 'center',
    padding:'center',
    margin:'auto',
    marginTop:'10%',
    marginBottom:'10%',
    width: 200,
    height: 200,
    border: '2px solid lightgray',
    [theme.breakpoints.between('sm','md')]: {
      width:150,
      height:150,
    },
  skillBox:{
    margin:'20px'
  },
  subtitle:{
    fontWeight:'bold',
  },
  

  },
}));

const ProfileEdit = () => {
  const classes = useStyles();
  const state = useSelector((state)=>state)
  console.log('state',state)
  useEffect(() => {
    console.log('effect')
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    
<Grid className={classes.root}>
  <Grid container>
    <Grid item xs={12} sm={3}>
      <Avatar alt="Remy Sharp" src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"  className={classes.avatar} />    
    </Grid>
    <Grid className={classes.box}  item xs={12} sm={8} >
      <Typography variant="h6" component="h5" xs={5} style={{margin:'.6rem',marginTop:0,marginLeft:0,paddingLeft:0}} className={classes.subtitle}>基本情報</Typography>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6} >
         <Typography variant="h6" component="h5" xs={5}>ニックネーム</Typography>
        </Grid>
        <Grid item xs={6} >
          <NickName/>
        </Grid>
      </Grid>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6}>
         <Typography variant="h6" component="h5" xs={5}>地域</Typography>
        </Grid>
        <Grid item xs={6} >
          <Prefecture/>
        </Grid>
      </Grid>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6}>
         <Typography variant="h6" component="h5" xs={5}>学部</Typography>
        </Grid>
        <Grid item xs={6} >
          <Faculty/>
        </Grid>
      </Grid>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6}>
         <Typography variant="h6" component="h5" xs={5}>学年</Typography>
        </Grid>
        <Grid item xs={6} >
          <Year/>
        </Grid>
      </Grid>
      <Grid item   direction="row" container spacing={4} >
        <Grid item xs={6}>
         <Typography variant="h6" component="h5" xs={5}>実務経験</Typography>
        </Grid>
        <Grid item xs={6} >
          <Experience/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Divider />
  <Grid  container justifyContent="center">
    <Grid item className={classes.box} xs={10} >
      <Typography variant="h6" component="h5" xs={5} style={{paddingBottom:'.6rem'}}>スキル</Typography>     
      <Box className={classes.box}  style={{marginBottom:'0',paddingBottom:'0'}}>  
        <LangStart/>
        <LangStart/>
        <LangStart/>
      </Box>
    </Grid>
    <Divider />
  </Grid>

    <Grid  container justifyContent="center">
      <Grid item className={classes.box} xs={10}>
      <Typography variant="h6" component="h5" xs={5} style={{paddingBottom:'.6rem'}}>希望スキル・レベル</Typography>
      <Box className={classes.box}  style={{marginBottom:'0',paddingBottom:'0'}}>  
        <LangStart/>
        <LangStart/>
        <LangStart/>
      </Box>
      </Grid>
    </Grid>

    <Grid  container justifyContent="center">
      <Grid item className={classes.box} xs={10} sx={{m:1,p:1,paddingBottom:16,marginBottom:16}}>
        <Typography variant="h6" component="h5" xs={5} style={{paddingBottom:'.3rem'}}>コメント</Typography>
        <Grid item   direction="row" container  style={{padding:'.3rem'}}>
        <TextField
            id="outlined-multiline-static"
            multiline
            rows={6}
            defaultValue="Default Value"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>

  <Box sx={{marginRight:"10%"}}>
  <Grid
    container
    direction="row"
    justifyContent="flex-end"
    className={classes.footer}
    
  >
    <Button
       variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon/>}
        // onClick={handleClose}
        className={classes.button}
        component={Link} 
        to="/profile"
    >
        戻る
    </Button>   
    <Button
       variant="contained"
        color="primary"
        startIcon={<EditIcon/>}
        // onClick={handleClose}
        className={classes.button}
        component={Link} 
        to="/"
    >
        編集完了
    </Button>   
  </Grid>
  </Box>
</Grid>

  )
}

export default ProfileEdit
