import React, { useEffect } from 'react'; // useEffect will be the component we update
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux' // dispatch an action

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import memories from './images/memories-brain.gif'
import useStyles from './styles.js'

const App = () => { // functional component
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getPosts)
  }, [dispatch])
  return (
    <Container maxwidth = "lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <center><img className={classes.image} src={memories} alt="memories" height="100" width="120" /></center>
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
