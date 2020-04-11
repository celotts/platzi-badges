import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css'

// App se encuentra las router
import App from './components/App';

const container = document.getElementById('app');

// ReactDOM.render(____qué__, ____donde__)
ReactDOM.render(<App />, container)