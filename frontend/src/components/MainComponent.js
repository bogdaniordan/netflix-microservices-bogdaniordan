import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import VideosComponent from "./VideosComponent";
import VideoDetailsComponent from "./VideoDetailsComponent";

const MainComponent = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={["/videos", "/"]} exact component={VideosComponent}></Route>
                    <Route path={"/video/:id"} component={VideoDetailsComponent}></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default MainComponent;