import React, {Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import typographyStyle from '../assests/components/typographyStyle';

class Quote extends Component {
  render(){
    const {
      classes,
      text,
      author
    } = this.props;
    return (
      <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
        <p className={classes.quoteText}>{text}</p>
        <small className={classes.quoteAuthor}>{author}</small>
      </blockquote>
    );
  }
}

export default withStyles(typographyStyle)(Quote);
