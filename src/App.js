import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Header from './components/common/header/Header';

class App extends Component {
  render() {
    return (
      <Grid className="App" >
        <Row>
          <Header main="JUSTIN KAHRS" sub="Software Engineer" />
        </Row>
      </Grid>
    );
  }
}

export default App;
