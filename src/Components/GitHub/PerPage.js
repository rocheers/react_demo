import React, { Component } from 'react';
import axios from 'axios';

class PerPage extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }
  componentDidMount() {
    console.log(this.props.match);
    axios
      .get(`https://api.github.com/users/${this.props.match.params.login}`)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { user } = { ...this.state };

    return (
      <div>
        <h1>Detail</h1>
        <ul>
          <li>name : {user.name}</li>
          <li>location : {user.location}</li>
          <li>following: {user.following}</li>
          <li>followers: {user.followers}</li>
          <li>createTime: {user.create_at}</li>
        </ul>
      </div>
    );
  }
}

export default PerPage;
