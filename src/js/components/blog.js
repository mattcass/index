import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = { contents: ''  };
  }
 
  componentDidMount() {
    const contents = require('html!markdown!../../md/markdown.md');
    this.setState({ contents })
  }


  render() {
    return (
      <div className="mt4 mb4">
        <ReactMarkdown source={ this.state.contents } />
      </div>
    )
  }
}
