import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import VideosComponent from "./VideosComponent";

const MainComponent = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={["/videos", "/"]} exact component={VideosComponent}></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default MainComponent;