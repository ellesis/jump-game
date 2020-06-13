import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CharacterImg from '../image/character.png';

const useStyles = makeStyles(theme => ({
  root: {},
  character: {
    position: 'absolute',
    width:'80px',
    height:'120px',
    left: '150px',
  }
}))

const Character = () => {
  // css
  const classes = useStyles();

  return(
    <div>
      <img id="character" src={CharacterImg} className={classes.character} />
    </div>
  )
}

export default Character