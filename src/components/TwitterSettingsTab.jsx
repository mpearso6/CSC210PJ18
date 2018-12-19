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
    return (

        <div>
          {type === 'stream' ?
            (
            <GridContainer>
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
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <TwitterInput
                labelText="Change length of stream"
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
              <p>
                What is this ?!? aifbejksbfvbrifv bfv rvbv ejkrvurebv erv
                fshjvbskgvrkjgvf vfbvk fkvb ib bkfbvae
                fbrkfg veargbvjrkgvjerbv
                vbraevkjareivkreiv kaerbvkjrebv kejavjavle
                vhjerbvkaev vlknavlkafngvlaofvas
              </p>
            </GridItem>
          </GridContainer>
          )
          :
          (
            <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
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
              <p>
                What is this ?!? aifbejksbfvbrifv bfv rvbv ejkrvurebv erv
                fshjvbskgvrkjgvf vfbvk fkvb ib bkfbvae
                fbrkfg veargbvjrkgvjerbv
                vbraevkjareivkreiv kaerbvkjrebv kejavjavle
                vhjerbvkaev vlknavlkafngvlaofvas
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
