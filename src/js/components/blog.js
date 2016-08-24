import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {name: 'Matt!'};
  }


  render() {

    var input = '# This is a header\n\nAnd this is a paragraph';

    return (
      <div className="mt4 mb4">
        {this.state.name}
        <br />
        <ReactMarkdown source={input} />
      </div>
    )
  }
}

