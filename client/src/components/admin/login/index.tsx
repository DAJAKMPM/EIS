import React from "react";
import {Avatar, Typography, Paper} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {useStyles} from "./styles";
import LoginForm from "./form";

const LoginComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginForm />
    </Paper>
  );
};

export default React.memo(LoginComponent);
