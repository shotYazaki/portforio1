import React from 'react';
import'./App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Header from './component/Header';

import './App.css';

function App () {
    return(
      <div className='App'>
        <Header />
        <Home />
      </div>
    );
}

export default App;
