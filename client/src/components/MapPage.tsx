import React from 'react';

interface IState {
    value: number;
}
  
export default class MapPage extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
          value: 5,
        };
    }
  
    public render() {
      return <div>{this.state.value}</div>
    }
}