import React from 'react';
import ReactDOM from 'react-dom/client';
import ChildComponent from './ChildComponent';

// ReactDOM.render(<ChildComponent />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChildComponent />
  </React.StrictMode>
);