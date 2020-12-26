import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import _ from 'lodash';
import './styles/react-table.css';
import './Form.css';

class EventTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataReady: false,
      firstLoad: true,
    };
  }

  componentWillMount() {
    if (this.props.fetchedEventsResult) {
      this.setState({
        dataReady: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ firstLoad: false });
    if (nextProps.searchApplicant) {
      this.setState({
        dataReady: true,
      });
    }
  }


  columns() {
    return [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Geo Location',
        accessor: 'geoLocation',
        Cell: el => {
          var temp = this.props.fetchedEventsResult && this.props.fetchedEventsResult.map(el => el._embedded.venues);
          for (var i = 0; i < temp.length; i++) {
            for (var j = 0; j < temp.length; j++) {
              var geoLocation = temp[i][j] && temp[i][j].location ? temp[i][j].location.longitude + ", " + temp[i][j].location.latitude : 'N/A';
              return geoLocation;
            }
          }
        }
      },
      {
        Header: 'Country',
        accessor: 'country',
        Cell: el => {
          var temp = this.props.fetchedEventsResult && this.props.fetchedEventsResult.map(el => el._embedded.venues);
          for (var i = 0; i < temp.length; i++) {
            for (var j = 0; j < temp.length; j++) {
              var country = temp[i][j] && temp[i][j].country && temp[i][j].country.name ? temp[i][j].country.name : 'N/A';
              return country;
            }
          }
        }
      },
      {
        Header: 'Address',
        accessor: 'address',
        Cell: el => {
          var temp = this.props.fetchedEventsResult && this.props.fetchedEventsResult.map(el => el._embedded.venues);
          for (var i = 0; i < temp.length; i++) {
            for (var j = 0; j < temp.length; j++) {
              var address = temp[i][j] && temp[i][j].address && temp[i][j].address ? temp[i][j].address.line1 : 'N/A';
              return address;
            }
          }
        }
      }
    ];
  }

  tableContent() {
    return (
      <div>
        <strong>Showing search result for the entered postal code </strong>
        <ReactTable
          className="a -striped"
          defaultPageSize={10}
          data={this.props.fetchedEventsResult}
          columns={this.columns()}
          showPagination={this.props.fetchedEventsResult.length > 10}
          minRows={5}
          noDataText="No data found"
        />
      </div>
    );
  }
  noTableData() {
    if (!this.state.firstLoad && _.isEmpty(this.props.fetchedEventsResult)) {
      return (<span>We're sorry.We were not able to find a match! </span>);
    }
    return '';
  }

  table() {
    return (
      <div className="NoResult">
        {_.isEmpty(this.props.fetchedEventsResult) ? this.noTableData() : this.tableContent()}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.dataReady ? this.table() : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchedEventsResult: state.eventSearchState.fetchedEventsResult,
});

export default connect(mapStateToProps)(EventTable);
