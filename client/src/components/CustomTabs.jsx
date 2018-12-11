import React, { Component } from 'react';
import classNames from "classnames";
// nodejs library to set properties for components

// Material-ui
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// core components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import withStyles from "@material-ui/core/styles/withStyles";

import tabStyle from '../assests/components/segments/tabStyle';


class CustomTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const {
      classes,
      headerColor,
      plainTabs,
      tabs,
      title,
      rtlActive
    } = this.props;
    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive
    });

    return (
      <Card>
        <CardContent>
          <Typography>
            {tabs.tabContent}
          </Typography>
        </CardContent>
      </Card>
    );
  }

}

export default withStyles(tabStyle)(CustomTabs);
