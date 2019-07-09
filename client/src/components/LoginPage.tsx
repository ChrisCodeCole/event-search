import React from 'react';
import { EventSearchConsumer } from '../context/context';
import '../styles/LoginPage.css';



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
            <div className="LoginPage-Container">
                <nav className="LoginPage-NavContainer">
                    <div className="LoginPage-NavLeftContainer">
                        <h1 className="LoginPage-NavAppTitle LoginPage-NavText">EventSearch</h1>
                        <input className="LoginPage-SearchBar" type="text" placeholder="Search.." />
                    </div>
                    <div className="LoginPage-NavRightContainer">
                        <h2 className="LoginPage-NavLogin LoginPage-NavText">Login</h2>
                        <h2 className="LoginPage-NavSignUp LoginPage-NavText">Sign Up</h2>
                    </div>
                </nav>

                {/* {playOrPause} */}
            </div>
        )}
        </EventSearchConsumer>
      )
    }
}