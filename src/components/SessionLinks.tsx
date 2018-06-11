import * as React from 'react';
import { Session } from '../services/Session';

class SessionLinks extends React.Component {
  public render() {

    const isLoggedIn = Session.Instance.IsLoggedIn();
    if (isLoggedIn) {
       console.log("User logged in");
       return (
        <div className="SessionLinks">
          Hello, {Session.Instance.firstName}
        </div>
      );
    }
    else {
      console.log("User NOT logged in");
      return (
        <div className="SessionLinks">
          <a href="/login" title="Click to login to the site">Login</a>
        </div>
      );
    }
  }
}

export default SessionLinks;
