import React,{ useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Background from './components/Background';
import Character from './components/Character';

const useStyles = makeStyles(theme => ({
  root: {},
}))

const App = () => {
  // state
  // const [isStart, setIsStart] = useState(false);

  return (
    <div>
      {
        // isStart ?
          <div>
            <Background />
            <Character />
          </div>
        // :
        //   <div>

        //   </div>
      }
    </div>
  );
}

export default App;
