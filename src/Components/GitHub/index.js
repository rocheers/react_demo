import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const List = props => {
  const imageStyle = { width: 50, height: 50 };
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <a onClick={props.showOneUser(props.idx)}>{props.login}</a>
      </td>

      <td>
        <img style={imageStyle} src={props.avatar_url} alt={props.avatar_url} />
      </td>
    </tr>
  );
};

const PerPage = props => {
  if ('name' in props.user) {
    return (
      <div className="one">
        <img src={props.user.avatar_url} alt={props.user.lgoin} />
        <p>Name: {props.user.name}</p>
        <p>Location: {props.user.location}</p>
        <p>Repositories:</p>
        <ul>
          {props.repos.slice(0, 10).map(repo => {
            return (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
                <p>{repo.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

class GithubPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUser: [],
      user: {},
      repos: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users?per_page=100')
      .then(response => {
        this.setState({ allUser: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showOneUser = id => () => {
    axios
      .get(this.state.allUser[id].url)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
    axios
      .get(this.state.allUser[id].repos_url)
      .then(res => this.setState({ repos: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>username</th>
                <th>image</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allUser.map((item, index) => (
                <List
                  key={item.id}
                  {...item}
                  idx={index}
                  showOneUser={this.showOneUser}
                />
              ))}
            </tbody>
          </table>
        </div>
        <PerPage user={this.state.user} repos={this.state.repos} />
      </div>
    );
  }
}

export default GithubPage;
