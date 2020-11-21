import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles/Appstyles';
import './App.css';

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography>This is New TS App</Typography>
    </div>
  );
};

export default App;
