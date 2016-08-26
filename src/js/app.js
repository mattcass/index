// Import CSS
import '../css/master.scss';

// Import React & jQuery
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';

const app = document.getElementById('app');

// JS
import Index from './components/index.js';
import Blog from './components/blog.js';
import Writing from './components/writing.js';
import NotFound from './components/404.js';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Writing} />
      <Route path="/blog(/:article)" component={Blog} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
app);
