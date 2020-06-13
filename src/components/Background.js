import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImg from '../image/background.png';

const useStyles = makeStyles(theme => ({
  root: {},
  background: {
    border: '1px solid black',
    margin: '50px 0 0 50px',
    position: 'absolute'
  }
}))


function Background() {
  // init
  const updateTime = 20 // setInterval updateTime
  const speed = 5   // move speed
  const interval = useRef()

  // State
  const [offSet, setOffSet] = useState(0)


  // useEffect
  useEffect(() => {
    return () => {
      clearInterval(interval.current)
    }
  }, []) // componentDidMount
  useEffect(() => {
    draw()
    setBackgroundMovement()
    return () => {
      clearInterval(interval.current)
    }
  }, [offSet])  // depend on offSet change

  // background move
  const setBackgroundMovement = () => {
    interval.current = setInterval(() => {
      if (offSet == 1000-speed) {
        setOffSet(0)
      } else {
        setOffSet(offSet + speed)
      }
    }, updateTime)
  }

  // background image dwaw
  const draw = () => {
    let canvas = document.querySelector('canvas#background') //background canvas
    let ctx = canvas.getContext('2d')
    let imageObj = new Image()
    imageObj.onload = function() {
      // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
      // left
      ctx.drawImage(imageObj, offSet, 0, 1000-offSet, 500, 0, 0, 1000-offSet, 500)
      // right
      ctx.drawImage(imageObj, 0, 0, offSet, 500, 1000-offSet, 0, offSet, 500)
    }
    
    imageObj.src = BackgroundImg  //Add image
  }

  const classes = useStyles();  // css
  // Canvas
  return (
    <div>
      <canvas id="background" width="1000px" height="500px" className={classes.background}>
      </canvas>
    </div>
  );
}

export default Background
