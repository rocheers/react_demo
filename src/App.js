import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TagPage from './Components/Tag';
import EmailPage from './Components/Email';
import GithubPage from './Components/GitHub';
import VoterPage from './Components/VoterPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="home">
          <nav>
            <ul>
              <li>
                <Link to="/tag" className="link">
                  Tag
                </Link>
              </li>
              <li>
                <Link to="/github" className="link">
                  GitHub
                </Link>
              </li>
              <li>
                <Link to="/email" className="link">
                  Email
                </Link>
              </li>
              <li>
                <Link to="/voter" className="link">
                  Voter
                </Link>
              </li>
            </ul>
          </nav>
          <section>
            <Switch>
              <Route exact path="/tag" component={TagPage} />
              <Route exact path="/github" component={GithubPage} />
              <Route exact path="/email" component={EmailPage} />
              <Route exact path="/voter" component={VoterPage} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}
