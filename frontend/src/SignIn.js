import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, CardHeader } from "@material-ui/core";
import validate from "validate.js";
import Section from "./Section";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "40%",
  },
  formContainer: {
    height: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: `calc(40vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`,
    maxWidth: "40vh",
    margin: `0 auto`,
    alignSelf: "center",
    justifySelf: "center",
  },
}));

const schema = {
  userName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 300,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 5,
    },
  },
};

const SignIn = ({ location, history }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}> Sign In </h4>
            </CardHeader>
            <CardContent>
              <div className={classes.formContainer}>
                <LoginForm location={location} history={history} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
