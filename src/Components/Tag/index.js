import React from 'react';

const Tag = props => {
  return (
    <div className="tag">
      <span>{props.title}</span>
      <i className="fas fa-times" onClick={() => props.remove(props.idx)} />
    </div>
  );
};

class TagPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [1, 2, 3],
      inputStr: ''
    };
  }

  handleChange = event => {
    this.setState({ inputStr: event.target.value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      if (!this.state.tags.includes(this.state.inputStr)) {
        this.setState(prevState => {
          return {
            tags: [...prevState.tags, this.state.inputStr],
            inputStr: ''
          };
        });
      } else {
        this.setState({ inputStr: '' });
      }
    }
    if (event.keyCode === 8 && this.state.inputStr === '') {
      let tags = this.state.tags;
      tags.pop();
      this.setState({ tags: tags });
    }
  };

  handleRemove = id => {
    this.setState(prevState => {
      return {
        tags: prevState.tags.filter((val, idx) => idx !== id)
      };
    });
  };

  render() {
    return (
      <div className="tag-component">
        <div className="tag-container">
          {this.state.tags.map((tag, idx) => (
            <Tag title={tag} idx={idx} key={idx} remove={this.handleRemove} />
          ))}
          <input
            className="tag-input"
            type="text"
            value={this.state.inputStr}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
      </div>
    );
  }
}

export default TagPage;
