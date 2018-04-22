import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Homepage from './components/Homepage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
