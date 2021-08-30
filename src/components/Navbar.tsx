import React from 'react'
import { User } from '../model/Model'
import { Link } from 'react-router-dom'

export class Navbar extends React.Component<{ user: User | undefined }> {

  render() {
    let loginLogout: any;
    if (this.props.user) {
      loginLogout = <Link to='/logout' style={{ float: 'right' }}>{this.props.user.userName}</Link>
    } else {
      loginLogout = <Link data-testid='login-link' to='/login' style={{ float: 'right' }}>Login</Link>;
    }

    return (
      <div className="navbar">
        <Link data-testid='home-link' to='/'> Home</Link>
        <Link data-testid='profile-link' to='/profile'> Profile</Link>
        <Link data-testid='spaces-link' to='/spaces'> Spaces</Link>
        {loginLogout}
      </div>
    )

  }
}
