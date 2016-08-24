// Import React
import React from 'react';
import { Link } from 'react-router';


export default class Writing extends React.Component {
  render() {
    var blogPosts = ['blog post Title', 'Blog post Title number 2', 'another title', 'yet another blog title'];

    var posts = blogPosts.map( function(title, i){
        
        var listItem = <li className="mb4" key={ i } >
                        <Link to="blog" className="h2 bold">{ title }</Link>
                        <small className="block">Meta data about blog post here</small>
                      </li> 

        return listItem;
    });

    return (
        <ul className="list-reset mt4" id="writing">
          { posts } 
        </ul>
    )
  }
}
