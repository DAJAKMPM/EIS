import React from "react";
import {
  TextField,
  Link,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import {useStyles} from "./styles";

const LoginForm = () => {
  const classes = useStyles();

  const [company, setCompany] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setCompany(event.target.value as string);
  };

  return (
    <form className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
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
      <FormControl
        fullWidth
        required
        variant="outlined"
        className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-outlined-label">
          Company/Site
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={company}
          onChange={handleChange}
          label="Company/Site"
        >
          <MenuItem value={10}>Fujitsu</MenuItem>
          <MenuItem value={20}>Weserv</MenuItem>
          <MenuItem value={30}>Google</MenuItem>
        </Select>
      </FormControl>

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
