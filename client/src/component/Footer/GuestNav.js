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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';

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
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      width:"1rem"
    },
    textDecoration:'none',
    color:"white"
  },
  button:{
    marginLeft:theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('xs')]: {
      size:"small",
      display:'none',
    },
  },

  icon:{
    display:'none',
    [theme.breakpoints.down('xs')]: {
      size:"small",
      display:'block',
    },
    color:"#fff"
  },
}));

const GuestNav = () => {
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
        <Typography variant="h6" className={classes.title}>
          <Link to='/' className={classes.link}>がっちゃー</Link>
        </Typography>
        <Button  variant="contained" component={Link} to="/login" className={classes.button}>ログイン</Button>
        <Button variant="contained"  component={Link} to="/register" className={classes.button}>新規登録</Button>
        <IconButton className={classes.icon} onClick={handleClick}><MoreVertIcon/></IconButton>
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
          <MenuItem component={Link} to='/login'>ログイン</MenuItem>
          <MenuItem component={Link} to='/register'>新規登録</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default GuestNav
