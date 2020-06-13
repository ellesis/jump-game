import React, { useState, useEffect } from 'react';
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

  // init
  const updateTime = 20
  const speed = 10
  const jumpHeight = 200
  var isJump = false
  var timeOutList = []

  const initTop = 375
  const [top, setTop] = useState(initTop)

  // useEffect mount and unMount
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown) //add keydown event
    
    return () => {
      // unMount - clearTimeout
      for (let i=0; i < timeOutList.length; i++){
        clearTimeout(timeOutList[i])
      }
      // unMount - remove keydown event
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleKeyDown = (e) => {
    // press space key
    if (e.keyCode === 32) {
      if (!isJump) {
        isJump = true
        jump()
      }
    }
  }

  const jump = () => {  // Character Jump
    for (let i=0; i<2*jumpHeight/speed+1; i++) {
      let timeOut = setTimeout(() => {
        if (i < jumpHeight/speed) {
          setTop(initTop - speed*i)
        } else {
          setTop(initTop - speed*(2*jumpHeight/speed-i))
        }
        if (i === 2*jumpHeight/speed) isJump = false // jump again - reset jump
      }, updateTime * i)
      timeOutList.push(timeOut)
    }
  }

  return(
    <div>
      <img id="character" src={CharacterImg} 
        className={classes.character}
        style={{top:top}}
      />
    </div>
  )
}

export default Character
