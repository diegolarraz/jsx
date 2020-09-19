//import reac and react om libraries
import React from 'react';
import ReactDom from 'react-dom';

// create a react component
const App = function() {
  return <div>Hi there!</div>;
};

ReactDom.render(
  <App />,
  document.querySelector('#root')
);
