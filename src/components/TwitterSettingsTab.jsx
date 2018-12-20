import React, { Component } from 'react';

// Material-ui
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// Components
import TwitterInput from '../components/TwitterInput';
import GridContainer from './GridContainer';
import GridItem from './GridItem';

class TwitterSettingsTab extends Component {

  state = {
    streamTerm: '',
    searchTerm: ''
  };

  constructor(props) {
    super(props);
    (this: any).handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
    (this: any).handleChangeStreamTerm = this.handleChangeStreamTerm.bind(this);
    (this: any).handleSubmitSearchTerm = this.handleSubmitSearchTerm.bind(this);
    (this: any).handleSubmitStreamTerm = this.handleSubmitStreamTerm.bind(this);
  }

  handleChangeSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  handleChangeStreamTerm = (event) => {
    this.setState({streamTerm: event.target.value});
  }

  handleSubmitSearchTerm = (event) => {
    console.log(this.state);
    //console.log(this.props);
    this.props.changeTerm(this.state.searchTerm);
  }

  handleSubmitStreamTerm = (event) => {
    console.log(this.state);
    //console.log(this.props);
    this.props.changeTerm(this.state.streamTerm);
  }

  render() {
    const {
      type
    } = this.props;

    const style ={
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.5em',
      marginBottom: '1rem'
    }
    return (

        <div>
          {type === 'stream' ?
            (
            <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <TwitterInput
                labelText="Change stream term"
                id="float"
                handleChangeTerm={this.handleChangeStreamTerm}
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Submit change"
                        onClick={this.handleSubmitStreamTerm}>
                        <SearchIcon/>
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={12} lg={12}>
              <p style={style}>
                Analyze emotions and tones in what people write online, like tweets or reviews. Predict whether they are happy, sad, confident, and more. The IBM Watson™ Tone Analyzer service uses linguistic analysis to detect emotional and language tones in written text. The service can analyze tone at both the document and sentence levels. You can use the service to understand how your written communications are perceived and then to improve the tone of your communications. Businesses can use the service to learn the tone of their customers communications and to respond appropriately to each customer, or to understand and improve their customer conversations in general.
              </p>
              <p style={style}>
                Enter a search term and then run the analysis!
              </p>
            </GridItem>
          </GridContainer>
          )
          :
          (
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <TwitterInput
                  labelText="Change search term"
                  id="float"
                  handleChangeTerm={this.handleChangeSearchTerm}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment:(
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Submit change"
                          onClick={this.handleSubmitSearchTerm}>
                          <SearchIcon/>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <p style={style}>
                  Analyze emotions and tones in what people write online, like tweets or reviews. Predict whether they are happy, sad, confident, and more. The IBM Watson™ Tone Analyzer service uses linguistic analysis to detect emotional and language tones in written text. The service can analyze tone at both the document and sentence levels. You can use the service to understand how your written communications are perceived and then to improve the tone of your communications. Businesses can use the service to learn the tone of their customers communications and to respond appropriately to each customer, or to understand and improve their customer conversations in general.
                </p>
                <p style={style}>
                  Enter a search term and then run the analysis!
                </p>
              </GridItem>
            </GridContainer>
          )
        }
      </div>

    );
  }

}

export default TwitterSettingsTab;
