import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.register();

// if (module.hot && !window.frameElement) {
//   console.log('HMR enabled');
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default;
//     ReactDOM.render(<NextApp />, document.getElementById('root'));
//   });
// }
