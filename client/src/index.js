import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
