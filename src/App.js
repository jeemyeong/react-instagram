import React, { Component } from 'react';
import Instagram from './containers/Instagram'
import { Container } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <Container>
        <Instagram/>
      </Container>
    );
  }
}

export default App;
