import React from 'react';

class ArticleRow extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.id);
  };
  render() {
    return (
      <div className="article-row link" onClick={this.handleClick}>
        <div className="article-title">{this.props.title}</div>
        <div className="article-date">{this.props.date}</div>
      </div>
    );
  }
}

export default ArticleRow;
