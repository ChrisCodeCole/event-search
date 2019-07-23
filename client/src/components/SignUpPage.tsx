import React from 'react';
import '../styles/SignUpPage.css';

interface IState {
    value: number;
}
  
export default class SignUp extends React.Component<{}, IState> {
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