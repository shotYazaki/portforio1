import React, {  Component }from 'react'

import ReactYoutube from './ReactYoutube'

import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <ReactYoutube videoId = 'AOuo4q0xFNc' />
        <ReactYoutube videoId = 'LY6HHTx33JM' />
        <ReactYoutube videoId = '9GvTYd5hG_g' />
      </div>
    )
  }
}

export default App;
