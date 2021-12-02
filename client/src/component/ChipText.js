import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import {Grid,Chip} from '@material-ui/core';
import languages from './Options/Languages';

const level =  (props) => {
  return (
    <Grid container  style={{width:"34px"}}>
      <StarIcon  style={{color:"#ffab00",paddingBottom:'.3rem'}}/>
      {props}
    </Grid>
  )
}

const ChipText = (props)=>{
  return(
  <Chip 
    label={languages[props.value.language].name}
    color="primary"
    deleteIcon={level(props.value.level)}
    style={{margin:"10px",padding:"12px"}}
    clickable={Boolean(false)}
    onDelete={()=>Boolean(true)}
  />
  )
}

export default ChipText
