import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/hotels" component={Hotels}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
