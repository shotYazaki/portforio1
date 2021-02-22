import React from 'react';
import'./stylesheet/App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Header from './component/Header';


function App () {
    return(
      <div className='App'>
        <Header />
        <Home />
      </div>
    );
}

export default App;
