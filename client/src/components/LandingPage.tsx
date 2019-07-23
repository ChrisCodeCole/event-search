import React from 'react';
import { EventSearchConsumer } from '../context/context';
import '../styles/LandingPage.css';
import { Link } from "react-router-dom";




interface IState {
    value: number;
}
  
export default class LandingPage extends React.Component<{}, IState> {
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
            <div className="LandingPage-Container">
                <nav className="LandingPage-NavContainer">
                    <div className="LandingPage-NavLeftContainer">
                        <h1 className="LandingPage-NavAppTitle LandingPage-NavText">EventSearch</h1>
                        <div className="LandingPage-SearchContainer">
                            <input className="LandingPage-SearchBar" type="text" placeholder="Search.." />
                            <button type="submit" className="LandingPage-SearchBarButton">Click</button>
                        </div>
                    </div>
                    <div className="LandingPage-NavRightContainer">
                        <Link to="/login" className="LandingPage-NavLogin LandingPage-NavText">Login</Link>
                        <Link to="/signup" className="LandingPage-NavSignUp LandingPage-NavText">Sign Up</Link>
                    </div>
                </nav>

                {/* {playOrPause} */}
            </div>
        )}
        </EventSearchConsumer>
      )
    }
}