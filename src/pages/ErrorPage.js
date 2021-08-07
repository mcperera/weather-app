import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function ErrorPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Alert severity="error">
        Aw, Snap! — Something went wrong. Try again.
      </Alert>
    </Container>
  );
}

export default ErrorPage;
