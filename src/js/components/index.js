import React from 'react';

// Import Components
import Nav from './navigation.js';
import Header from './header.js';
import Writing from './writing.js';

export default class Index extends React.Component {
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
