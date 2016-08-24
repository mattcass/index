// Import CSS
import '../css/master.scss';

// Import React & jQuery
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

const app = document.getElementById('app');

// JS
import Index from './components/index.js';
import Blog from './components/blog.js';
import Writing from './components/writing.js';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Writing} />
      <Route path="/blog" component={Blog} />
    </Route>
  </Router>,
app);
