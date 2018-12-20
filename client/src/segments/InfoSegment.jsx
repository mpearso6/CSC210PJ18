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
                  <Quote
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra placerat nunc ac suscipit. Nam at leo quis risus euismod vestibulum. Aliquam id efficitur nisl, eu blandit nisi. Vestibulum porttitor felis ut dui faucibus, sagittis euismod nisl venenatis. Phasellus efficitur eu nibh at vestibulum. Duis purus urna, fermentum non aliquet eget, dignissim a mauris. Ut sodales, leo a luctus gravida, nulla ipsum commodo velit, eu mollis mauris ligula quis massa. Nulla vel consequat metus. Proin ut scelerisque enim. Fusce vulputate, turpis nec molestie venenatis, elit nulla placerat turpis, id sollicitudin justo odio eget velit. Quisque ac nunc et augue tristique tempor ac vitae massa. Vivamus fermentum dignissim ex vitae scelerisque. Morbi porttitor hendrerit velit, nec dapibus ligula vestibulum a.

                    Nulla placerat viverra tellus, ut accumsan elit condimentum at. Aenean viverra turpis eros, pharetra tincidunt arcu vulputate et. Cras in nulla sed turpis vestibulum posuere vitae sit amet metus. Suspendisse a iaculis urna. Sed suscipit elit vel metus volutpat, sit amet pretium nisl efficitur. Quisque auctor non mauris nec tempus. Mauris volutpat neque et nisi bibendum, ut aliquet lacus fermentum. Pellentesque tristique massa ac blandit efficitur. Phasellus et molestie dui, id placerat ex. Cras vel sapien nisl. Nam dapibus dolor vitae euismod commodo. Phasellus porta purus nulla, at dictum odio interdum id."
                    author=" Some random human"
                  />
                </div>
              )}
              {!isAuthenticated() && (
                <div className={classes.typo}>
                  <div className={classes.note}>Paragraph</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra placerat nunc ac suscipit. Nam at leo quis risus euismod vestibulum. Aliquam id efficitur nisl, eu blandit nisi. Vestibulum porttitor felis ut dui faucibus, sagittis euismod nisl venenatis. Phasellus efficitur eu nibh at vestibulum. Duis purus urna, fermentum non aliquet eget, dignissim a mauris. Ut sodales, leo a luctus gravida, nulla ipsum commodo velit, eu mollis mauris ligula quis massa. Nulla vel consequat metus. Proin ut scelerisque enim. Fusce vulputate, turpis nec molestie venenatis, elit nulla placerat turpis, id sollicitudin justo odio eget velit. Quisque ac nunc et augue tristique tempor ac vitae massa. Vivamus fermentum dignissim ex vitae scelerisque. Morbi porttitor hendrerit velit, nec dapibus ligula vestibulum a.
                  </p>
                  <p>
                    Nulla placerat viverra tellus, ut accumsan elit condimentum at. Aenean viverra turpis eros, pharetra tincidunt arcu vulputate et. Cras in nulla sed turpis vestibulum posuere vitae sit amet metus. Suspendisse a iaculis urna. Sed suscipit elit vel metus volutpat, sit amet pretium nisl efficitur. Quisque auctor non mauris nec tempus. Mauris volutpat neque et nisi bibendum, ut aliquet lacus fermentum. Pellentesque tristique massa ac blandit efficitur. Phasellus et molestie dui, id placerat ex. Cras vel sapien nisl. Nam dapibus dolor vitae euismod commodo. Phasellus porta purus nulla, at dictum odio interdum id.
                  </p>
                  <p>
                    Etiam efficitur, massa sit amet placerat luctus, risus urna volutpat est, ac fringilla tortor ex et magna. Etiam ex dolor, facilisis eget libero et, semper sagittis sapien. Aenean congue ligula tortor, ac tincidunt metus tincidunt ut. Curabitur porttitor porta ipsum at pretium. Nunc efficitur aliquet lacus, ac ultricies ex congue vitae. Praesent sagittis ante non urna varius tincidunt. Mauris eget sem at mi eleifend luctus sit amet eu eros. Nunc nec nisl ornare, lacinia felis id, facilisis dui. Aenean nec nunc ac nulla tristique mattis et ut lorem. Quisque nec rutrum ligula.
                  </p>
                  <p>
                    Praesent consectetur auctor eros. Praesent dignissim felis neque, eu pulvinar purus finibus eget. Maecenas tempor leo a vehicula ornare. Proin sit amet nibh dui. Nam ipsum velit, feugiat at fermentum vestibulum, ultrices vel purus. Praesent eget erat at urna efficitur scelerisque id faucibus sapien. Pellentesque et fringilla nibh, eu semper nisi. Praesent pretium metus eros, id fringilla odio consequat vel. Phasellus at dolor diam. Nam maximus placerat leo non fermentum.
                  </p>
                  <p>
                    Ut luctus metus sed viverra aliquet. Nam luctus vulputate orci id laoreet. Sed ac viverra massa. Ut pharetra nulla at ex viverra, sit amet porta ipsum hendrerit. Curabitur id auctor risus. Quisque dapibus sit amet eros sit amet mattis. Integer ac leo lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada iaculis justo eleifend ullamcorper. In condimentum, ex vel interdum laoreet, neque arcu sodales nulla, at sollicitudin ipsum ligula vel nisi. Ut in vehicula urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

export default withStyles(typographyStyle)(InfoSegment);
