import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Grid,Divider,Box,Button,} from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";


const EllipsisText = (props) => {
  const { children } = props

  return (
    <Grid container  style={{width:"34px"}}>
      <StarIcon  style={{color:"#ffab00"}}/>
      {children}
    </Grid>
  )
}
const Profile = () => {
  const useStyles = makeStyles((theme) => ({
    root:{
      maxWidth:'1200px',
      margin:'auto'

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
      // marginBottom:'2px'
    },
    form:{
      backgroundColor:'#fff',
      border:"solid 2px yellow",
      borderRadius:'.4rem',
      margin:".3rem",
      padding:".3rem",
      textAlign:"center",
    },

    footer:{
      marginRight:theme.spacing(3),
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
    item:{
      fontWeight:'bold',
      fontSize:'1.1rem'
    },
    margin: {
      margin: theme.spacing(1),
      width: "250px"
    },
    profile: {
      padding:'3%',
      margin:'2%',
      flexWrap:'wrap',
      maxWidth:'800px',
      minHeight:'500px',
      marginLeft:'auto',
      marginRight:'auto',
      justifyContent:'center',
      backgroundColor:'rgb(229 239 253)',
      fontFamily:'fantasy',
      borderRadius:'1em',
      boxShadow: "0 4px 15px rgba(0,0,0,.2)"

    },
    box:{
      margin:'2vw',
      padding:'2vw',
      marginTop:'0',
      marginBottom:0,
      paddingBottom:0,
    },
    button:{
      marginRight:theme.spacing(1),
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
      marginLeft:'auto',
      marginRight:'auto',
      padding:'.5%',
      width:'30rem',
    },
    line:{
      padding:'1%',
      margin:'.5vh',
    },
    field:{
      marginLeft:'1vw'
    },
    subtitle:{
      marginBottom:'1vw'
    }

  }));
  const classes = useStyles();
  return (
    <Box >
     {/* <Grid className={classes.title}>プロフィール</Grid> */}
     <Grid className={classes.profile}>
       <Avatar alt="Remy Sharp" src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" className={classes.avatar} />
       <Box className={classes.box} sx={{paddingBottom:16}}>
         <Typography variant="h5" component="h5" xs={5} className={classes.subtitle}>基本情報</Typography>
         <Box className={classes.field}>
 
           <Grid item   direction="row" container className={classes.line}  xs={12}>
              <Grid item xs={6}  className={classes.subline}>
               <Typography variant="h6" component="h5" className={classes.item} >学年</Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography variant="h6" component="h5">あり</Typography>
              </Grid>
           </Grid>   
           <Divider/>

           <Grid item   direction="row" container className={classes.line}  xs={12}>
              <Grid item xs={6}  className={classes.subline}>
               <Typography variant="h6" component="h5" className={classes.item} >地域</Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography variant="h6" component="h5">東京都</Typography>
              </Grid>
           </Grid>  
           <Divider/>   

           <Grid item   direction="row" container className={classes.line}  xs={12}>
              <Grid item xs={6}  className={classes.subline}>
               <Typography variant="h6" component="h5" className={classes.item} >学部</Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography variant="h6" component="h5">医学部</Typography>
              </Grid>
           </Grid> 
           <Divider/>    

           <Grid item   direction="row" container className={classes.line}  xs={12}>
              <Grid item xs={6}  className={classes.subline}>
               <Typography variant="h6" component="h5" className={classes.item} >実務経験</Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography variant="h6" component="h5">あり</Typography>
              </Grid>
           </Grid>  
           <Divider/>

           <Grid item   direction="row" container className={classes.line}  xs={12}>
              <Grid item xs={6}  className={classes.subline}>
               <Typography variant="h6" component="h5" className={classes.item} >地域</Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography variant="h6" component="h5">東京都</Typography>
              </Grid>
           </Grid>  
           <Divider/>   
  
          </Box>
       </Box>
       <Box className={classes.box}>
         <Typography variant="h5" component="h5" xs={5} className={classes.subtitle}>スキル</Typography>
         <Typography variant="h6" component="h5" className={classes.field}>
           <Grid container direction="row"  justifyContent="space-between" spacing={2}>
             <Grid item xs={6} className={classes.item}>
             JavaScript
             </Grid>
             <Grid item xs={6}>
               <Rating name="read-only" value={3} readOnly />
             </Grid>
           </Grid>
           <Grid container direction="row"  justifyContent="space-between" spacing={2}>
             <Grid item xs={6} className={classes.item}>C++</Grid>
             <Grid item xs={6}>
             <Rating name="read-only" value={3} readOnly />
             </Grid>
           </Grid>
           <Grid container direction="row"  justifyContent="space-between" spacing={2}>
             <Grid item xs={6} className={classes.item}>Python</Grid>
             <Grid item xs={6}>
             <Rating name="read-only" value={3} readOnly />
             </Grid>
           </Grid>
         </Typography>
       </Box>
       <Box className={classes.box}>
       <Typography variant="h5" component="h5" xs={5} className={classes.subtitle}>希望スキル・レベル</Typography>   
       <Paper variant="outlined">
         {/* {chipData.map((data)=>{   
         })} */}
         <li style={{listStyle:'none'}}>
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
       </Box>

       <Box sx={{m:1,p:1,marginBottom:0,paddingBottom:16}} className={classes.box}>   
         {/* <Typography variant="body1" component="h5" xs={5} >基本情報</Typography> */}
         <Typography variant="h5" component="h5" xs={5} className={classes.subtitle}>コメント</Typography>
         <Grid item   direction="row" container  style={{padding:'.3rem'}}>
         プログラマーとしてさまざまなソフトウェア開発現場に7年間勤務してきました。現在はCやJava、PHP、Rubyなど数多くの開発言語に対応可能です。特にPHPでのWEBサイト構築に自信があり、
         昨年は大手クライアントからの依頼により、グルメサイト、求人サイト、不動産検索サイトを制作しました。検索サイト構築では、一流のDBエンジニアと関わることが多くあり、DB設計の善
         し悪しによってプログラミングの手間が大幅に省けることを発見しました。 今後は、様々な角度からプログラミングを見直し
         、より高機能でレスポンスのよいプログラミングができるよう技術を磨きたいと考えております。
         </Grid>
       </Box>
       
       <Grid
          container
          direction="row"
          justifyContent="flex-end"
          className={classes.footer}
        >
          <Button
              variant="contained"
              color="secondary"
              startIcon={<EditIcon/>}
              // onClick={handleClose}
              className={classes.button}
              component={Link} to="/profile/edit"
          >
            プロフィール編集
          </Button>   
        </Grid>
       </Grid>   
    </Box>
  )
}

export default Profile
