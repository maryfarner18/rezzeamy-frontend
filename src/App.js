import React from 'react';
import  {withRouter} from 'react-router-dom'
import './App.css';

import Main from './containers/Nav'
import Nav from './containers/Main'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default withRouter(App); // higher order component
