import React, { useState, useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BackgroundImg from '../image/background.png';

const useStyles = makeStyles(theme => ({
  root: {

  },
  background: {
    border: '1px solid black',
    margin: '50px 0 0 50px',
    position: 'absolute'
  }
}))

function Background() {
  const classes = useStyles();  // css
  return (
    <div>
      <canvas width="1000px" height="500px" id="background" className={classes.background}>
      </canvas>
    </div>
  );
}

export default Background
