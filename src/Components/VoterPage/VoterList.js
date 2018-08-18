import React, { Component } from 'react';

const VoterItem = (props) => {
  return (
    <div>
      <li className="voter-list-item">
        <div className="item-left">
          <i
            className="fas fa-plus"
            onClick={() => props.handleAdd(props.id)}
          />
          <span>{props.countPositive - props.countNegative}</span>
          <i
            className="fas fa-minus"
            onClick={() => props.handleMinus(props.id)}
          />
        </div>
        <div className="item-right">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </li>
      <hr />
    </div>
  );
};

class VoterList extends Component {
  render() {
    return (
      <ul className="voter-list">
        {this.props.items.map((item, idx) => (
          <VoterItem
            {...item}
            key={idx}
            id={idx}
            handleAdd={this.props.handleAdd}
            handleMinus={this.props.handleMinus}
          />
        ))}
      </ul>
    );
  }
}

export default VoterList;
