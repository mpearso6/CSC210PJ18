import { container, title } from '../../material-kit-react';

const typographyStyle = {
  defaultFont: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.5em'
  },
  section: {
    padding: "70px 0"
  },
  container,
  space50: {
    height: "50px",
    display: "block"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%",

    "@media (max-width: 600px)": {
      paddingLeft: "0%",
      width: "85%"
    },
    "@media (max-width: 700px)": {
      paddingLeft: "0%"
    }
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
    "@media (max-width: 600px)": {
      bottom: '-10px'
    }
  },
  marginLeft: {
    marginLeft: "auto !important"
  }
};

export default typographyStyle;
