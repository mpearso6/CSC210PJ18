import React, { Component } from 'react';
import classNames from "classnames";
// nodejs library to set properties for components

// Material-ui Icons
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";

// Components
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";


import withStyles from "@material-ui/core/styles/withStyles";

import customTabStyle from '../assests/components/customTabsStyle';


class CustomTabs extends Component {
  state = {
    value: 0,
    checkedA: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSwitchChange = name => event => {
    new Promise( (resolve, reject) => {
      this.setState({ [name]: event.target.checked });
      resolve(this.state.checkedA);
    }).then((bool) => {
      if (!bool) {
        this.props.loadTweetsAction();
      }else{
        this.props.clearTweetsAction();
      }
    });
    //this.setState({ [name]: event.target.checked });
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
      <Card
        plain={plainTabs}>
        <CardHeader
          color={headerColor}
          plain={plainTabs}>
          {title !== undefined ? (
            <div className={cardTitle}>{title}</div>
          ) : null}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.displayNone
            }}>
            {tabs.map((prop, key) => {
              var icon = {};
              if (prop.tabIcon) {
                icon = {
                  icon:
                    typeof prop.tabIcon === "string" ? (
                      <Icon>{prop.tabIcon}</Icon>
                    ) : (
                      <prop.tabIcon />
                    )
                };
              }
              return (
                <Tab
                  classes={{
                    root: classes.tabRootButton,
                    labelContainer: classes.tabLabelContainer,
                    label: classes.tabLabel,
                    selected: classes.tabSelected,
                    wrapper: classes.tabWrapper
                  }}
                  key={key}
                  label={prop.tabName}
                  {...icon}
                />
              );
            })}
          </Tabs>
        </CardHeader>
        <CardBody>
          {tabs.map((prop, key) => {
            if (key === this.state.value) {
              return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
          })}
        </CardBody>
      </Card>
    );
  }

}

export default (withStyles(customTabStyle)(CustomTabs));
