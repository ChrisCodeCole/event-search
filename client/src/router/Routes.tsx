import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from '../components/LoginPage';
import MapPage from '../components/MapPage';


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
                <Route path="/" exact component={LoginPage} />
                <Route path="/maps" component={MapPage} />
            {/* </div> */}
        </Router>
    );
}
 
export default AppRouter;