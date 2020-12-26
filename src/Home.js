import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import EventTable from './EventTable';

class Home extends Component {
  render() {
    return (
      <div>
       <Form/>
       <EventTable/>
      </div>
    );
  }
}

export default Home;
