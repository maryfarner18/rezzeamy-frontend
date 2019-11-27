import React from 'react';

import './App.css';
import  {withRouter} from 'react-router-dom'
import Example from './components/Example'

function App() {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default withRouter(App); // higher order component
