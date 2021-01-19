import React, {  Component }from 'react'

import ReactYoutube from './ReactYoutube'

import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <ReactYoutube videoId = 'AOuo4q0xFNc' />
      </div>
    )
  }
}

export default App;
