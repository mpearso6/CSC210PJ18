import React, { Component } from 'react';

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import twitterInputStyle from '../assests/components/twitterInputStyle';

class TwitterInput extends Component {

  render() {
    const {
      classes,
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      error,
      white,
      inputRootCustomClasses,
      success,
      handleChangeTerm
    } = this.props;

    const labelClasses = classNames({
      [" " + classes.labelRootError]: error,
      [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
      [classes.underlineError]: error,
      [classes.underlineSuccess]: success && !error,
      [classes.underline]: true,
      [classes.whiteUnderline]: white
    });
    const marginTop = classNames({
      [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classNames({
      [classes.input]: true,
      [classes.whiteInput]: white
    });

    var formControlClasses;
    if (formControlProps !== undefined) {
      formControlClasses = classNames(
        formControlProps.className,
        classes.formControl
      );
    } else {
      formControlClasses = classes.formControl;
    }

    return (
      <FormControl {...formControlProps} className={formControlClasses}>
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + " " + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Input
          onChange={handleChangeTerm}
          classes={{
            input: inputClasses,
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses
          }}
          id={id}
          {...inputProps}
        />
      </FormControl>
    );
  }

}

export default withStyles(twitterInputStyle)(TwitterInput);
