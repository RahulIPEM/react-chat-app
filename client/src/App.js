import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import 'antd/dist/antd.css';
import './assets/css/custom.css';

const App = () => (
  <Router>
    <Route exact path='/' component={Join}/>
    <Route path='/chat' component={Chat}/>
  </Router>
);

export default App;
