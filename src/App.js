import React from 'react';
import  {withRouter} from 'react-router-dom'

//import './App.css';
import Main from './containers/Main'
import Nav from './containers/Nav'

function App() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}

export default withRouter(App); // higher order component
