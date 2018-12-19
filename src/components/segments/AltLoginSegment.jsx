import React, { Component } from 'react';

// Material-ui

import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from '../GridContainer';

import Quote from '../Quote';

import typographyStyle from '../../assests/components/views/typographyStyle';

class AltLoginSegment extends Component {

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
              <h2>Typography</h2>
            </div>
            <GridContainer>
              {isAuthenticated() && (
                <div className={classes.typo}>
                  <div className={classes.note}>Quote</div>
                  <Quote
                    text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                    author=" Kanye West, Musician"
                  />
                </div>
              )}
              {!isAuthenticated() && (
                <div className={classes.typo}>
                  <div className={classes.note}>Paragraph</div>
                  <p>
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at.
                  </p>
                </div>
              )}
            </GridContainer>
          </div>
        </div>
      </div>

    );
  }

}

export default withStyles(typographyStyle)(AltLoginSegment);
