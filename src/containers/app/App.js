import React, { Component } from 'react'
import './App.css'
import Header from '../../components/header/header'

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header title="Search Movie"></Header>
        <section>
          {this.props.children}
        </section>
      </main>
    );
  }
}

export default App;
