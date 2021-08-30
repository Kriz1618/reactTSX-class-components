import React from 'react';
import { User } from '../model/Model';
import { AuthService, DataService } from '../services/';
import { Login } from './Login';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import { Navbar, Home, Profile, Spaces } from './';

interface AppState {
  user: User | undefined
}

/* istanbul ignore file */
export class App extends React.Component<{}, AppState> {

  private authService: AuthService = new AuthService();

  private dataService: DataService = new DataService();

  constructor(props: any) {
    super(props);
    this.state = { user: undefined };
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    this.setState({ user: user });
  }

  render() {
    return <div className='wrapper'>
      <Router history={history}>
        <div>
          <Navbar user={this.state.user} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login'>
              <Login authService={this.authService} setUser={this.setUser} />
            </Route>
            <Route exact path='/profile'>
              <Profile user={this.state.user} authService={this.authService} />
            </Route>
            <Route exact path='/spaces'>
              <Spaces dataService={this.dataService} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  }
}
