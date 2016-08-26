// Import React
import React from 'react';
import { Link } from 'react-router';


export default class Writing extends React.Component {
  render() {
    var blogPosts = [
      { title: 'Work',              file: 'work',              meta: '2016' }, 
      { title: 'Reading List 2016', file: 'reading_list_2016', meta: '2016' }, 
      { title: 'Morning',           file: 'morning',           meta: '2015' }, 
      { title: 'Reading List 2015', file: 'reading_list_2015', meta: '2015' }, 
      { title: 'Reading List 2014', file: 'reading_list_2014', meta: '2014' }, 
    ];

    var posts = blogPosts.map( function(postDetail, i){
        
        var listItem = <li className="mb4" key={ i } >
                        <Link to={"blog/"+postDetail.file} className="h2 bold">{ postDetail.title }</Link>
                        <small className="block">{ postDetail.meta }</small>
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
