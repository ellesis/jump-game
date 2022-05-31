import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import EnemyImg from '../image/enemy.png'

const useStyles = makeStyles((theme) => ({
  character: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    top: '410px'
  }
}))

const Enemy = (props) => {
  // css
  const classes = useStyles()
  // init
  const updateTime = 20
  const speed = 10
  const moveWidth = 1000 - 50 // canvas with = 1000
  var timeOutList = []

  const initLeft = 1000 - 20
  const [left, setLeft] = useState(initLeft)
  const [isMoving, setIsMoving] = useState(false)

  // useEffect - update Component
  useEffect(() => {
    if (props.isMove) {
      setIsMoving(true)
      setLeft(initLeft)
      move()
    }
  }, [props.isMove])

  // useEffect - unMount
  useEffect(() => {
    return () => {
      for (let i = 0; i < timeOutList.length; i++) {
        clearTimeout(timeOutList[i])
      }
    }
  }, [])

  const move = () => {
    // when reach left end, Enemy stop
    for (let i = 0; i < moveWidth / speed; i++) {
      let timeOut = setTimeout(() => {
        setLeft(initLeft - speed * i)
        if (i === moveWidth / speed - 1) setIsMoving(false)
      }, updateTime * i)
      timeOutList.push(timeOut)
    }
  }

  return (
    <div>
      {// isMoving == true : show Enemy
      isMoving ? (
        <img id="enemy" src={EnemyImg} className={classes.character} style={{left: left}} alt="enemy" />
      ) : null}
    </div>
  )
}

export default Enemy
