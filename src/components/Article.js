import React from 'react';

import Author from './Author';

class Article extends React.Component {
  render() {
    if (!this.props.title) {
      return <h3>Select an Article</h3>;
    }
    return (
      <div id="current-article">
        <h3>{this.props.title}</h3>
        <div className="article-date">
          {this.props.date}
        </div>
        <Author {...this.props.author} />
        <div className="article-body">
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default Article;
