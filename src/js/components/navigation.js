// Import React
import React from 'react';


export default class Nav extends React.Component {

  render() {
    return (
        <nav>
          <ul className="list-reset">
            <li><a href="#writing">Writing</a></li>
            <li><a href="https://twitter.com/mmaatter">Twitter</a></li>
            <li><a href="https://github.com/mattcass">Github</a></li>
          </ul>
        </nav>
    )
  }
}
