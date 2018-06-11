import * as React from 'react';

class SiteHeader extends React.Component {
  public render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Sample Site</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/orders">Orders</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SiteHeader;
