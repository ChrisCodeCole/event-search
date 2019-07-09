import React from 'react';
import { EventSearchConsumer } from '../context/context';


interface IState {
    value: number;
}
  
export default class LoginPage extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
          value: 5,
        };
    }
  
    componentDidMount = () => {
        console.log(this.props);
    }
    public render() {
      return (
        <EventSearchConsumer>
        {({
            playOrPause 
        }) => (
            <div>{playOrPause}</div>
        )}
        </EventSearchConsumer>
      )
    }
}