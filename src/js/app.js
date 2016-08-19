// Import CSS
import '../css/master.scss';

// Import React & jQuery
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';


// JS
import Nav from './components/navigation.js';
import Header from './components/header.js';
import Writing from './components/writing.js';

class App extends React.Component {

  render() {
    return (
        <div className="page">

          <Nav />
          <Header />

          <main>
            {this.props.children}
          </main>

          <footer>
            <small>&copy; 2050</small>
          </footer>

        </div>
    )
  }
}

class Blog extends React.Component {
  render() {
    return (
      <div className="mt4 mb4">
        this is where the blog post would go right....!
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Writing} />
      <Route path="/blog" component={Blog} />
    </Route>
  </Router>
), document.getElementById('app'))
