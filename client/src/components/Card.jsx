import React, { Component } from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

// Material-ui
import withStyles from "@material-ui/core/styles/withStyles";

// Assest
import cardStyle from '../assests/components/cardStyle';

class Card extends Component {

  render() {
    const {
      classes,
      className,
      children,
      plain,
      carousel,
      ...rest
    } = this.props;
    const cardClasses = classNames({
      [classes.card]: true,
      [classes.cardPlain]: plain,
      [classes.cardCarousel]: carousel,
      [className]: className !== undefined
    });
    return (
      <div className={cardClasses} {...rest}>
        {children}
      </div>
    );
  }

}

export default withStyles(cardStyle)(Card);
