import React, { Component } from 'react';

// Material-ui

import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from '../components/GridContainer';

import Quote from '../components/Quote';

import typographyStyle from '../assests/components/views/typographyStyle';

class InfoSegment extends Component {


  render() {
    const {
      isAuthenticated,
      classes
    } = this.props;

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h2>{isAuthenticated() ? 'Your In!': 'Dont you want to come in?'}</h2>
            </div>
            <GridContainer>
              {isAuthenticated() && (
                <div className={classes.typo}>
                  <div className={classes.note}>Quote</div>
                    <p className={classes.defaultFont}>
                      Welcom to Twit!
                    </p>
                    <p className={classes.defaultFont}>
                      We have stuff and more stuff! If you look hard enough, you may even find some
                      bacon wrapped in a twenty somewhere in this app! (...hint hint, *cough* for the TA's *couch*)
                    </p>
                    <Quote
                      text="A wise csc210 student once said...*Ahem* You are logged in! "
                      author=" Some random human - no idea who"
                    />
                </div>
              )}
              {!isAuthenticated() && (
                <div className={classes.typo}>
                  <div className={classes.note}>Welcome!</div>
                  <p className={classes.defaultFont}>
                    Welcom to Twit!
                  </p>
                  <p className={classes.defaultFont}>
                    We have stuff and more stuff! If you look hard enough, you may even find some
                    bacon wrapped in a twenty somewhere in this app! (...hint hint, *cough* for the TA's *couch*)
                  </p>

                  <p className={classes.defaultFont}>
                    Now here are some fun qoutes!
                  </p>

                  <Quote
                    text="Technology is anything that wasn’t around when you were born"
                    author="Alan Kay"
                  />

                  <Quote
                    text="Any sufficiently advanced technology is equivalent to magic"
                    author="Arthur C. Clarke"
                  />

                  <Quote
                    text="All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness"
                    author="Mark Kennedy "
                  />

                  <Quote
                    text="Just because something doesn’t do what you planned it to do doesn’t mean it’s useless"
                    author="Thomas Edison"
                  />

                  <Quote
                    text="It has become appallingly obvious that our technology has exceeded our humanity"
                    author="Albert Einstein "
                  />
                </div>
              )}
            </GridContainer>
          </div>
        </div>
      </div>

    );
  }

}

export default withStyles(typographyStyle)(InfoSegment);
