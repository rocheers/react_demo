import React, { Component } from 'react';

const ToDoItem = props => {
  return (
    <li>
      <span>{props.name}</span>
      <input
        type="checkbox"
        checked={props.checked}
        onClick={() => props.click(props.id)}
      />
    </li>
  );
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { textInput: '', authenticated: 'all', checkInfo: [] };
  }
  handleInputChange = e => {
    this.setState({
      textInput: e.target.value,
    });

    console.log(e.target.value);
  };

  handleSubmit = e => {
    let pendingItem = {
      name: this.state.textInput,
      checked: false,
    };
    this.setState({
      checkInfo: [...this.state.checkInfo, pendingItem],
      textInput: '',
    });
  };

  allBtn = () => {
    this.setState({ authenticated: 'all' });
  };

  activeBtn = () => {
    this.setState({ authenticated: 'active' });
  };

  completeBtn = () => {
    this.setState({ authenticated: 'complete' });
  };

  clickedFunc = id => {
    let clickable = this.state.checkInfo.map((record, index) => {
      if (id === index) {
        return { ...record, checked: !record.checked };
      } else {
        return record;
      }
    });

    this.setState({ checkInfo: clickable });
  };

  render() {
    return (
      <div className="border">
        <input
          type="text"
          placeholder="Add new one"
          value={this.state.textInput}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>

        <div>
          <ul>
            {this.state.authenticated === 'complete'
              ? this.state.checkInfo
                  .filter(record => record.checked === true)
                  .map((record, index) => {
                    return (
                      <ToDoItem
                        {...record}
                        key={index}
                        click={this.clickedFunc}
                        id={index}
                      />
                    );
                  })
              : this.state.authenticated === 'active'
                ? this.state.checkInfo
                    .filter(record => record.checked === false)
                    .map((record, index) => {
                      return (
                        <ToDoItem
                          {...record}
                          key={index}
                          click={this.clickedFunc}
                          id={index}
                        />
                      );
                    })
                : this.state.checkInfo.map((record, index) => {
                    return (
                      <ToDoItem
                        {...record}
                        key={index}
                        click={this.clickedFunc}
                        id={index}
                      />
                    );
                  })}
          </ul>
        </div>
        <button onClick={this.allBtn}>All</button>
        <button onClick={this.activeBtn}>Active</button>
        <button onClick={this.completeBtn}>Complete</button>
      </div>
    );
  }
}

export default App;
