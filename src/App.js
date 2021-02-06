import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import get from './api';
import { Good, Bad } from './emoji'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  return (
    <CenteredGrid />
  )
}

const CenteredGrid = () => {
  const classes = useStyles();
  const [json, setJSON] = useState({})

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <LeftColumn data={json} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <RightColumn json={json} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const PrettyPrintJson = ({ data }) => <div><pre>{JSON.stringify(data, null, 2)}</pre></div>;

const LeftColumn = (data) => {
  return (
    <PrettyPrintJson data={data} />
  )
}

const RightColumn = (data) => {
  const todos = data.json;
  if (!todos.length) {
    return 'hello there!'
  }
  return (
    <div>
    </div>
  )
}


export default App;
