import React, { Component } from 'react';
import classNames from "classnames";

// Material-ui
import withStyles from "@material-ui/core/styles/withStyles";

// Components
import cardBodyStyle from '../assests/components/cardBodyStyle';

class CardBody extends Component {

  render() {
    const {
      classes,
      className,
      children,
      ...rest
  } = this.props;
    const cardBodyClasses = classNames({
      [classes.cardBody]: true,
      [className]: className !== undefined
    });
    return (
      <div className={cardBodyClasses} {...rest}>
        {children}
      </div>
    );
  }

}

export default withStyles(cardBodyStyle)(CardBody);
