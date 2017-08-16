import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Home from './Home';
import Docs from './Docs';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <main>
        <Route exact path='/snapfoo/' component={Home} />
        <Route exact path='/snapfoo/docs' component={Docs} />
      </main>
      <Footer />
    </div>
  </Router>
, document.getElementById('root'));
