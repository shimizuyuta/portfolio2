
import React,{useEffect,useState,useRef} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Grid,Divider,Box,ListItem,ListItemText,ButtonGroup,Button,Dialog,Modal} from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import StarIcon from '@material-ui/icons/Star';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Label from '../Label';
import TextField from '@material-ui/core/TextField';
import SelectYear from '../Select/Year';
import SelectPrefecture from '../Select/Prefecture';
import SelectFaculty from '../Select/Faculty';
import SelectExperience from '../Select/Experience';
import SelectBunri from '../Select/Bunri';
import LangStart from '../Select/LangStar';



export default function SearchUser(props) {

  const useStyles = makeStyles((theme) => ({

    profile:{
      maxWidth:'1000px',
      minHeight:'500px',
      flexDirection:'column',
      marginTop:'3%',
      marginBottom:'3%',
      overflow:"scroll",
      '&::-webkit-scrollbar': {
        display:'none'
      },
      marginRight:'auto',
      marginLeft:'auto',
      minWidth:'50%',
      minHeight:'500px',
      padding:'3%',
      borderRadius: "8px",
      background: "rgb(229 239 253)",
      boxShadow: "0 4px 15px rgba(0,0,0,.2)",
      justifyContent:'center',
    },
    title:{
      margin:'1.3%',
      textAlign:'center',
      color:'#3f51b5',
      fontSize:'2rem',
      fontFamily:'fantasy',
      border:'solid 3px #3f51b5',
      borderRadius:'1em',
      backgroundColor:'rgb(229 239 253)',
      maxWidth:'40%',
      marginLeft:'auto',
      marginRight:'auto',
      padding:'.5%',
    },
    item:{
      fontWeight:'bold',
      fontSize:'1.1rem'
    },
    chip:{
      marginRight:'1rem',
      marginLeft:'1rem',
      color:'#fff',
      backgroundColor:'#3f51b5',
      fontSize:'.8rem',
      display:'inline',
      padding:'1.5%',
      borderRadius:'.5rem'
    },
    line:{
      margin:'1%',
      padding:'1%',
      marginRight:'3.2%',
      marginLeft:'3.2%',
    },
    subtitle:{
      fontSize:'1.6rem',
      paddingBottom:'.5rem',
      fontWeight:'bold',
    },
    subline:{
      marginBottom:'.7rem',
    },
    skillsForm:{
      marginBottom:'20px',
      marginTop:'10px'
    },
    button:{
      margin:'1%',
      padding:'.8rem',
      fontSize:'1rem',
      width:'calc(30% - 3px)',
      [theme.breakpoints.down('sm')]: {
        width:'80%',
      },
    },
  }));
  const classes = useStyles();
  const [search,setSearch] = useState({
    year:0,
    bunri:0,
    experience:0,
    faculty:0,
    prefecture:0,
  })
  const handleChange = (e) =>{
    setSearch((prevState)=>{
      return{
        ...prevState,
        [e.target.name]:e.target.value,
      }
    })
  }
  useEffect(() => {
    console.log('search',search)
  }, [search])

  return (
<Grid>
  <Grid className={classes.title}>検索条件</Grid>
  <Grid className={classes.profile} >
    <Box sx={{m:1,p:1,marginBottom:0,paddingBottom:16}}>
      <Typography variant="h5" component="h6"  className={classes.subtitle}>基本情報</Typography>
      <Grid container  justifyContent="flex-start">
        <Grid item   direction="row" container className={classes.line} sm={5} xs={12}>
          <Grid item xs={12}   className={classes.subline}>
           <Typography variant="h6" component="h5" className={classes.item} >学年<Label value={'任意'}/></Typography>
          </Grid>
          <Grid item xs={12} >
          <SelectYear handleChange={handleChange}  year={search.year}/>
          </Grid>
        </Grid>
        <Grid item   direction="row" container className={classes.line} sm={5} xs={12}>
          <Grid item xs={12}   className={classes.subline}>
           <Typography variant="h6" component="h5" className={classes.item} >学部種別<Label value={'任意'}/></Typography>
          </Grid>
          <Grid item xs={12} >
            <SelectFaculty handleChange={handleChange}  faculty={search.faculty}/>
          </Grid>
        </Grid>
        <Grid item   direction="row" container className={classes.line} sm={5} xs={12}>
          <Grid item xs={12}   className={classes.subline}>
           <Typography variant="h6" component="h5" className={classes.item} >文理選択<Label value={'任意'}/></Typography>
          </Grid>
          <Grid item xs={12} >
            <SelectBunri handleChange={handleChange}  bunri={search.bunri}/>
          </Grid>
        </Grid>
        <Grid item   direction="row" container className={classes.line} sm={5} xs={12}>
          <Grid item xs={12}   className={classes.subline}>
           <Typography variant="h6" component="h5" className={classes.item} >実務経験<Label value={'任意'}/></Typography>
          </Grid>
          <Grid item xs={12} >
            <SelectExperience handleChange={handleChange}  experience={search.experience}/>
          </Grid>
        </Grid>
        <Grid item   direction="row" container className={classes.line} sm={5} xs={12}>
          <Grid item xs={12}   className={classes.subline}>
           <Typography variant="h6" component="h5" className={classes.item} >地域<Label value={'任意'}/></Typography>
          </Grid>
          <Grid item xs={12} >
            <SelectPrefecture handleChange={handleChange}  prefecture={search.prefecture}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{m:1,p:1,marginTop:0,paddingTop:0}}>
      <Typography variant="body1" component="h5"   className={classes.subtitle}>スキル<Label value={'任意'}/></Typography>
      {/* <LangStart />
      <LangStart />
      <LangStart /> */}
    </Box>

    <Grid  container direction="row" justifyContent="space-evenly">
      <Button
         variant="contained"
         color="primary"
         className={classes.button}
      >
         検索する
      </Button>   
      <Button
         variant="contained"
         color="primary"
         className={classes.button}
      >
         条件をリセットする
      </Button>   
    </Grid>

  </Grid>
</Grid>
  );
}

