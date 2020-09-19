//import reac and react om libraries
import React from 'react';
import ReactDom from 'react-dom';

function getButtonText() {
  return 'Click on Me!'
}

// create a react component
const App = function() {
  const buttonText = 'Click Me!';
  return (
  <div>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white', marginLeft: '20px' }}>{getButtonText()}</button>
  </div>
  );
};

ReactDom.render(
  <App />,
  document.querySelector('#root')
);
