import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import memories from './images/memories-brain.gif'

const App = () => { // functional component
  return (
    <Container maxwidth = "lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <center><img src={memories} alt="memories" height="300" width="400" /></center>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
