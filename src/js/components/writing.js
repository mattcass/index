// Import React
import React from 'react';
import { Link } from 'react-router';


export default class Writing extends React.Component {
  render() {
    return (
        <ul className="list-reset mt4" id="writing">
          <li className="mb4">
            <Link to="blog" className="h2 bold">Reading List: 2016</Link>
            <p className="mt0">meta data here</p>
          </li>
          <li className="mb4">
            <Link to="blog" className="h2 bold">Reading List: 2015</Link>
            <p className="mt0">meta data here</p>
          </li>
        </ul>
    )
  }
}
