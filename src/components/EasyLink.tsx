import * as React from 'react';

export interface IEasyLinkProps { name: string; }

class EasyLink extends React.Component<IEasyLinkProps> {
  public render() {
    return (
      <div className="EasyLink">
        Hello, {this.props.name}
      </div>
    );
  }
}

export default EasyLink;
