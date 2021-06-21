import { createMuiTheme } from "@material-ui/core/styles";

const nlDkBlue = "#0070AD";
const nlLtBlue = "#12ABDB";
const nlBlack = "#000000";

export default createMuiTheme({
  palette: {
    common: {
      blue: nlDkBlue,
      black: nlBlack,
    },
    primary: {
      main: nlDkBlue,
    },
    secondary: {
      main: nlLtBlue,
    },
  },
  layout: {
    contentWidth: 1236,
  },
  typography: {
    h2: {
      fontFamily: "Roboto",
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: "2.5rem",
      color: nlDkBlue,
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "2.0rem",
      color: nlDkBlue,
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "1.75rem",
      color: nlDkBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Roboto",
      color: nlDkBlue,
    },
    subtitle1: {
      fontSize: "0.80rem",
      fontWeight: 500,
      color: nlLtBlue,
      fontFamily: "Roboto",
    },
    productTitle: {
      fontSize: "0.80rem",
      fontWeight: 300,
      color: nlLtBlue,
      fontFamily: "Roboto",
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1rem",
      fontFamily: "Roboto",
    },
    body1: {
      fontSize: "0.85rem",
      color: nlBlack,
      fontWeight: 500,
      fontFamily: "Roboto",
      textTransform: "capitalize",
      textAlign: "left",
    },
    body2: {
      fontSize: "0.80rem",
      color: nlLtBlue,
      fontWeight: 300,
      fontFamily: "Roboto",
      textTransform: "capitalize",
      textAlign: "left",
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: nlLtBlue,
      fontFamily: "Roboto",
    },
    learnButton: {
      borderColor: nlDkBlue,
      borderWidth: 2,
      textTransform: "none",
      color: nlDkBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: nlDkBlue,
        fontSize: "1rem",
        fontFamily: "Roboto",
      },
    },
    MuiInput: {
      input: {
        "&::placeholder": {
          color: nlLtBlue,
          fontSize: "0.75rem",
          fontWeight: 400,
          fontFamily: "Roboto",
        },
        color: "gray",
        fontSize: "0.85rem",
        fontWeight: 500,
        fontFamily: "Roboto", // if you also want to change the color of the input, this is the prop you'd use
      },
      root: {
        color: nlDkBlue,
        fontWeight: 300,
        fontFamily: "Roboto",
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${nlDkBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${nlDkBlue}`,
        },
      },
    },
  },
});
