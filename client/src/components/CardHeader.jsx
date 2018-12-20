import React, { Component } from 'react';
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// Components
import cardHeaderStyle from '../assests/components/cardHeaderStyle';

class CardHeader extends Component {

  render() {
    const {
      classes,
      className,
      children,
      color,
      plain,
      ...rest
    } = this.props;
    const cardHeaderClasses = classNames(
      {[classes.cardHeader]: true},
      {[classes.infoCardHeader]: color},
      {[classes.cardHeaderPlain]: plain},
      {[className]: className !== undefined}
    );
    return (
      <div className={cardHeaderClasses} {...rest}>
        {children}
      </div>
    );
  }

}

export default withStyles(cardHeaderStyle)(CardHeader);
