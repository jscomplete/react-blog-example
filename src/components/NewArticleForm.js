import React from 'react';

class NewArticleForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle({
      title: this.titleInput.value,
      author: {
        firstName: this.authorFirstNameInput.value,
        lastName: this.authorLastNameInput.value,
        website: this.authorWebsiteInput.value,
      },
      body: this.bodyInput.value,
    });
  }
  render() {
    return (
      <div id="new-article-form">
        <h3>New Article</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            ref={(input) => this.titleInput = input}
            className="form-control"
            placeholder="Article Title" />
          <br />
          <input
            ref={(input) => this.authorFirstNameInput = input}
            className="form-control"
            placeholder="Author First Name" />
          <br />
          <input
            ref={(input) => this.authorLastNameInput = input}
            className="form-control"
            placeholder="Author Last Name" />
          <br />
          <input
            ref={(input) => this.authorWebsiteInput = input}
            className="form-control"
            placeholder="Author Website" />
          <br />
          <textarea
            ref={(input) => this.bodyInput = input}
            className="form-control"
            rows="20"
            placeholder="Article Body"></textarea>
          <br />
          <button type="submit" className="btn btn-secondary">
            Add Article
          </button>
        </form>
      </div>
    );
  }
}

export default NewArticleForm;
