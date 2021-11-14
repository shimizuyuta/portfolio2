import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";
import Fade from '@material-ui/core/Fade';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Box } from '@material-ui/core';
import { logout } from '../redux/actions/auth';
import { connect } from "react-redux";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link:{
    color:'white',
    textDecoration:'none',
    "&:hover": {
      color: "#e9ecef"
    },
  },
  title: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      // width:"1rem"
      flexGrow: 1,
    },
    textDecoration:'none',
    color:"white",
    display:'inline'
  },
  button:{
    marginLeft:theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    color:'#fff',
    [theme.breakpoints.down('sm')]: {
      size:"small",
      display:'none',
    },
    "&:hover": {
      color: "#e9ecef",
      backgroundColor:'#448aff'
    },
    "&:active": {
      background:'black',
    },
    // margin:'0,auto',
    // padding:0,
    height:'50px'
  },

  icon:{
    display:'none',
    [theme.breakpoints.down('sm')]: {
      size:"small",
      display:'block',
    },
    color:"#fff"
  },
}));

const AuthNav = ({auth,logout}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{flexGrow: 1,}}>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.link}>がっちゃー</Link>
          </Typography>
          <Button  component={Link} to="/search" className={classes.button}><SearchIcon/>検索</Button>
          <Button  component={Link} to="/post" className={classes.button}><PostAddIcon/>投稿</Button>
          <Button  component={Link} to="/chat" className={classes.button}><ChatIcon/>メッセージ</Button>
          <Button  component={Link} to="/profile" className={classes.button}><PersonIcon/>プロフィール</Button>
        </Box>
        <Button  component={Link} to="/" onClick={logout} className={classes.button}><ExitToAppIcon/>ログアウト</Button>
        <IconButton className={classes.icon} onClick={handleClick}><SearchIcon/></IconButton>
        {/* <IconButton className={classes.icon} onClick={handleClick}><PostAddIcon/></IconButton> */}
        <IconButton className={classes.icon} component={Link} to="/search"><ChatIcon/></IconButton>
        <IconButton className={classes.icon} component={Link} to="/chat"><PersonIcon/></IconButton>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem component={Link} to='/profile'>プロフィール</MenuItem>
          <MenuItem component={Link} to='/' onClick={logout}>ログアウト</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
const mapStateToProps = state => ({
  auth: state.auth.isAuth
})
export default connect(mapStateToProps,{logout})(AuthNav)
