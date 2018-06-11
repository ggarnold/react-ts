import * as React from 'react';

class HomeView extends React.Component {
  public render() {
    return (
        <div className="Home-container">
            <h1 className="mt-5">My Home</h1>
            <p className="lead">Welcome to my website.</p>
            <p>This site is a React-Typescript site for testing purposes.</p>
        </div>
    );
  }
}

export default HomeView;
