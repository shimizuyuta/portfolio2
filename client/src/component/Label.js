import React,{useEffect,useState,useRef} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';




const Label = (props) => {
  const useStyles = makeStyles((theme) => ({
    chip:{
      marginRight:'1rem',
      marginLeft:'1rem',
      color:'#fff',
      backgroundColor:'#3f51b5',
      fontSize:'.8rem',
      display:'inline',
      padding:'1.5%',
      borderRadius:'.5rem'
    }
  }));
  console.log(props,'pros')
  const content = props.value
  const classes = useStyles();
  return (
    <div className={classes.chip}>
      {content}
    </div>
  )
}

export default Label
