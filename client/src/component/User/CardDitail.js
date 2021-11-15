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

const EllipsisText = (props) => {
  const { children } = props

  return (
    <Grid container alignItems="center" style={{width:"34px"}}>
      <StarIcon  style={{color:"#ffab00"}}/>
      {children}
    </Grid>
  )
}

export default function DetailModal(props) {

  const [open,setOpen] = useState(props.open)
  const ref = useRef(null);

  useEffect(() => {
    setOpen(props.open)
  }, [props])

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'blue',
      padding:'3%',
      // justifyContent:'space-between',
      display: "flex",
      flexWrap: "wrap",
    },
  　chip:{
    textAlign: 'left',
    },
    avatar:{
      textAlign: 'center',
      margin:'auto',
      width: theme.spacing(15),
      height: theme.spacing(15),
      border: '2px solid lightgray',
      marginBottom:'20px'
    },
    form:{
      backgroundColor:'#fff',
      border:"solid 2px yellow",
      borderRadius:'.4rem',
      margin:".3rem",
      padding:".3rem",
      textAlign:"center",
    },
    formLeft:{
      textAlign: 'center',
      fontWeight:'bold'
    },
    profile:{
      display:'flex',
      flexDirection:'column',
      padding:theme.spacing(1),
      margin:theme.spacing(1),
      paddingTop:0,
      marginTop:0,
      overflow:"scroll",
      '&::-webkit-scrollbar': {
        display:'none'
      },
    },
    item:{

      backgroundColor:'red',
      display: "flex",
      flexWrap: 'wrap',

    },
    paper: {
      padding: theme.spacing(2),
      margin:theme.spacing(2),
      marginBottom:theme.spacing(3),
      maxWidth:'330px',
      minWidth:'300px',
      borderRadius: "8px",
      background: "rgb(238,174,202)",
      boxShadow: "0 4px 15px rgba(0,0,0,.2)"
    },
  }));
  const classes = useStyles();

  return (
<Dialog
open={open}
onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
ref={ref}
fullWidth
>
<DialogTitle id="alert-dialog-title" style={{textAlign: 'center',padding:'.7rem',paddingBottom:'0'}}>{"プロフィール"}</DialogTitle>
<DialogContent className={classes.profile}>
<Box sx={{m:1,p:1,marginBottom:0,paddingBottom:16}}>
<Avatar alt="Remy Sharp" src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" className={classes.avatar} />

  {/* <Typography variant="body1" component="h5" xs={5} >基本情報</Typography> */}
  <Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem'}}>基本情報</Typography>
  <Grid item   direction="row" container spacing={4} >
    <Grid item xs={6} >
     <Typography variant="body2" component="h5" xs={5}>ニックネーム</Typography>
    </Grid>
    <Grid item xs={6} >
      <Typography variant="subtitle2" component="h5"xs={7}>田中太郎</Typography>
    </Grid>
  </Grid>
  <Grid item   direction="row" container spacing={4} >
    <Grid item xs={6}>
     <Typography variant="body2" component="h5" xs={5}>地域</Typography>
    </Grid>
    <Grid item xs={6} >
      <Typography variant="subtitle2" component="h5"xs={7}>東京都</Typography>
    </Grid>
  </Grid>
  <Grid item   direction="row" container spacing={4} >
    <Grid item xs={6}>
     <Typography variant="body2" component="h5" xs={5}>学部</Typography>
    </Grid>
    <Grid item xs={6} >
      <Typography variant="subtitle2" component="h5"xs={7}>医学部</Typography>
    </Grid>
  </Grid>
  <Grid item   direction="row" container spacing={4} >
    <Grid item xs={6}>
     <Typography variant="body2" component="h5" xs={5}>学年</Typography>
    </Grid>
    <Grid item xs={6} >
      <Typography variant="subtitle2" component="h5"xs={7}>1年</Typography>
    </Grid>
  </Grid>
  <Grid item   direction="row" container spacing={4} >
    <Grid item xs={6}>
     <Typography variant="body2" component="h5" xs={5}>実務経験</Typography>
    </Grid>
    <Grid item xs={6} >
      <Typography variant="subtitle2" component="h5"xs={7}>あり</Typography>
    </Grid>
  </Grid>
</Box>
<Divider />

<Box sx={{m:1,p:1,marginTop:0,paddingTop:0}}>
  <Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem'}}>スキル</Typography>
  <Grid container direction="row"  justifyContent="space-between" spacing={2}>
    <Grid item xs={6} >
    JavaScript
    </Grid>
    <Grid item xs={6}>
      <Rating name="read-only" value={3} readOnly />
    </Grid>
  </Grid>
  <Grid container direction="row"  justifyContent="space-between" spacing={2}>
    <Grid item xs={6} >C++</Grid>
    <Grid item xs={6}>
    <Rating name="read-only" value={3} readOnly />
    </Grid>
  </Grid>
  <Grid container direction="row"  justifyContent="space-between" spacing={2}>
    <Grid item xs={6} >Python</Grid>
    <Grid item xs={6}>
    <Rating name="read-only" value={3} readOnly />
    </Grid>
  </Grid>
</Box>
<Divider />
<Typography variant="body1" component="h5" xs={5} style={{margin:'.6rem'}}>希望スキル・レベル</Typography>

<Paper variant="outlined">
  {/* {chipData.map((data)=>{

  })} */}
  <li style={{listStyle:'none'}}>
    <Chip 
      label={"Java"} 
      style={{margin:"10px",padding:"5px"}}
     icon={<StarIcon>5</StarIcon>}
    />
    <Chip 
      label="PHP"
      deleteIcon={<EllipsisText>3</EllipsisText>}
      style={{margin:"10px",padding:"12px"}}
     clickable={false}
     onDelete={true}
    />
    <Chip 
      label="python"
      deleteIcon={<EllipsisText>1</EllipsisText>}
      style={{margin:"10px",padding:"12px"}}
     clickable={false}
     onDelete={true}
    />
    <Chip 
      label="C++"
      deleteIcon={<EllipsisText>5</EllipsisText>}
      style={{margin:"10px",padding:"12px"}}
     clickable={false}
     onDelete={true}
    />
    <Chip 
      label="C++"
      deleteIcon={<EllipsisText>1</EllipsisText>}
      style={{margin:"10px",padding:"12px"}}
     clickable={false}
     onDelete={true}
    />
    <Chip 
      label="C++"
      deleteIcon={<EllipsisText>5</EllipsisText>}
      style={{margin:"10px",padding:"12px"}}
     clickable={false}
     onDelete={true}
    />

  </li>
</Paper>
<Box sx={{m:1,p:1,marginBottom:0,paddingBottom:16}}>

  {/* <Typography variant="body1" component="h5" xs={5} >基本情報</Typography> */}
  <Typography variant="body1" component="h5" xs={5} style={{margin:'.3rem'}}>コメント</Typography>
  <Grid item   direction="row" container  style={{padding:'.3rem'}}>
    田中ゆうせいと申します。
    はじめまして。趣味はプログラミングです。親友は後閑君とカー君、菅ちゃんです。特技は逆切れです！！！！！！！！！よろしくです～(*｀艸´)ｳｼｼｼ
  </Grid>
</Box>
<Divider />

</DialogContent>
<DialogActions>
<Button
   variant="contained"
   color="secondary"
   startIcon={<ArrowBackIcon/>}
   onClick={handleClose}
 >
   戻る
 </Button>   
<Button
   variant="contained"
   color="secondary"
   startIcon={<FavoriteIcon/>}
   onClick={handleClose}
 >
   いいね！
 </Button>   
</DialogActions>
</Dialog>
  );
}