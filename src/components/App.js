import React from 'react';

import ArticleList from './ArticleList';
import Article from './Article';
import NewArticleForm from './NewArticleForm';

import * as api from '../api';

class App extends React.Component {

  state = {
    data: {
      articles: [],
      currentArticle: {}
    },
    newArticleForm: false
  };

  componentDidMount() {
    api.getArticleList().then(articleList => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          articles: articleList,
        },
      }));
    });
  }

  setCurrentArticle = (articleId) => {
    api.getArticle(articleId).then(article => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          currentArticle: article,
        },
        newArticleForm: false,
      }));
    });
  };

  showNewArticleForm = (event) => {
    event.preventDefault();
    this.setState({ newArticleForm: true });
  }

  addArticle = (articleInput) => {
    api.addArticle(articleInput).then(newArticle => {
      this.setState((prevState) => ({
        data: {
          articles: [...prevState.data.articles, newArticle],
          currentArticle: newArticle,
        },
        newArticleForm: false,
      }));
    });
  };

  render() {
    return (
      <div className="App">
        <h2 id="header">The Leading Edge Blog</h2>

        <div id="left">
          <h3>Article List</h3>
          <ArticleList
            articles={this.state.data.articles}
            onArticleClick={this.setCurrentArticle}
          />

          <button id="new-article" className="btn btn-secondary" type="button" onClick={this.showNewArticleForm}>
            New Article
          </button>
        </div>

        <div id="right">
          {
            this.state.newArticleForm ?
              <NewArticleForm addArticle={this.addArticle} /> :
              <Article {...this.state.data.currentArticle} />
          }
        </div>

      </div>
    );
  }
}

export default App;
