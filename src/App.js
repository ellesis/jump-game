import React,{ useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';


import Background from './components/Background';
import Character from './components/Character';
import Enemy from './components/Enemy';

const useStyles = makeStyles(theme => ({
  button: {
    border: '1px solid black',
    margin: '50px 0 0 50px',
    position: 'absolute',
    width: '1000px',
    height: '500px',
    fontWeight: 'bold',
    fontSize: '50px',
    textTransform: 'initial'
  },
  timer: {
    position: 'absolute',
    display: 'flex',
    left: '50px',
    top: '570px',
    fontSize: "20px"
  }
}))

const App = () => {
  // css
  const classes = useStyles()
  // init
  const updateTime = 20
  const interval = useRef()
  // useState
  const [isStart, setIsStart] = useState(false) // start or not
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)   // Score
  const [isMove, setIsMove] = useState(false)
  // useEffect - update
  useEffect(() => {
    if (isStart) {
      interval.current = setInterval(() => {
        // 2초마다 한번씩 isMove 값 change
        if (Math.floor(time)%2 === 1) {
          setIsMove(true)
        } else {
          setIsMove(false)
        }
        setTime(time + updateTime * 0.001)
        checkConclict()
      }, updateTime)
    }

    return () => {
      clearInterval(interval.current)
    }
  }, [time, isStart])

  const checkConclict = () => { // collision
    let enemy = document.querySelector('img#enemy')
    let character = document.querySelector('img#character')

    if (enemy !== null && character !== null) {
      // console.log(enemy.x)
      // console.log(character.x)
      let dis = Math.pow(enemy.x - character.x, 2) + Math.pow(enemy.y - character.y, 2)
      if (dis < 3000) {
        alert("Game Over!")
        if (result < time) setResult(time) // update high score
        setIsStart(false)
        setTime(0)
      }
    }
  }

  const handleClickStartButton = () => {
    setIsStart(true) // game start
  }

  return (
    <div>
      {
        isStart ?
          <div>
            <Background />
            <Character />
            <Enemy isMove={isMove}/>
            <div className={classes.timer}>
              <div>Jump Game!</div>
              <div style={{margin:"0 0 0 50px"}}>Time:</div>
              <div style={{margin:"0 0 0 10px"}}>{Math.floor(time)} sconds</div>
            </div>
          </div>
        :
          <div>
            <Button onClick={handleClickStartButton} className={classes.button}>
              Your Highest Record : {Math.floor(result)} seconds<br/>
              Click to Start Game!
            </Button>
          </div>
      }
    </div>
  );
}

export default App;
