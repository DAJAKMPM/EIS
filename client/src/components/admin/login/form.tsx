import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Button,
} from '@material-ui/core';
import {useStyles} from './styles';

const LoginForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <TextField
        style={{background: 'white'}}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="default" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        href="/admin"
      >
        Login
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default React.memo(LoginForm);
