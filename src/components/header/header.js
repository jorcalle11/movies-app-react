import React from 'react'
import './header.css'

const Header = (props) => (
  <header className="App-header">
    <h1>
      {props.title}
    </h1>
  </header>
)

export default Header