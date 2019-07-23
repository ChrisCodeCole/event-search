import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MapPage from '../components/MapPage';
import LandingPage from "../components/LandingPage";
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';


function AppRouter() {
    return (
        <Router>
            {/*<div>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/maps">First Product</Link>
                        </li>
                    </ul>
                </nav> */}
                <Route path="/" exact component={LandingPage} />
                <Route path="/maps" component={MapPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
            {/* </div> */}
        </Router>
    );
}
 
export default AppRouter;