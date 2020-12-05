import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import signUp from "./signUp";
import User from "./user";
import Profile from "./prfile";
import Login from "./login";
import Dashboard from "./dashboard";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signUp" component={signUp}/>
                <Route path="/Users" component={User}/>
                <Route path="/editUserDetails/:id" component={signUp}/>
                <Route path="/dashBord" component={Dashboard} />
                <Route path="/profile" component={Profile}/>
            </Switch>

        </BrowserRouter>
    );
}
export default App;
