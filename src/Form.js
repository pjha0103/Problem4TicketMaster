import React, { Component } from 'react';
import { Row, Form, Label, Input } from 'reactstrap';
import _ from 'lodash';
import { connect } from 'react-redux';
import { searchApplicant } from './action/Form_action';
import './Form.css';


class postalCodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postalCode: '',
      error: false,
      showErrorMsg: false,
      saveRecentSearches: [],
      disableBtn1: false
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      disableBtn1: false,
    });
    if (nextProps.disableBtn) {
      this.setState({
        disableBtn1: false,
      });
    }
  }


  showError() {
    if (this.state.showErrorMsg && !this.state.postalCode) {
      return <span id="error-msg">Please enter a valid postalCode</span>;
    }
    return '';
  }

  clickSearchResult() {
    if (_.isEmpty(this.state.postalCode)) {
      this.setState(
        {
          error: true,
          showErrorMsg: true,
        }
      );
    }
    else {
      let saveRecentSearches = this.state.saveRecentSearches;
      if (saveRecentSearches.length < 5) {
        saveRecentSearches.push(this.state.postalCode);
      }
      else {
        saveRecentSearches.shift();
        saveRecentSearches.push(this.state.postalCode);
      }
      console.log("Last 5 searches performed by user are", saveRecentSearches);
      this.props.searchApplicant({
        postalCode: this.state.postalCode,
      });
      this.setState({ disableBtn1: true });
    }
  }

  render() {
    return (
      <div>
        <Form className="postalCodeSearch">
          <Row form>
            <div className="col-md-6 col-lg-6 col-xs-6 col-sm-6 postalCodeField">
              <Label for="applicantName">Search Events by PostalCode :</Label>
              <span className="astrics">*</span>
              <Input
                maxLength="50"
                type="text"
                name="postalCode"
                placeholder="Enter postal code to search for events"
                id="name"
                value={this.state.postalCode}
                onChange={e => this.setState({ postalCode: e.target.value })}
              />
              {this.showError()} <br></br>
            </div>
          </Row>
          <Row form>
            <div className="col-md-6 col-lg-6 col-xs-6 col-sm-6">
              <button
                type="button"
                className="btn btn-primary btn-lg searchBtn"
                disabled={this.state.disableBtn1}
                onClick={() => this.clickSearchResult()}> Search
           </button>
            </div>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchedEventsResult: state.eventSearchState.fetchedEventsResult,
  noResult: state.eventSearchState.noResult,
  disableBtn: state.eventSearchState.disableBtn
});

const mapDispatchToProps = dispatch => ({
  searchApplicant: (obj) => dispatch(searchApplicant(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(postalCodeForm);
