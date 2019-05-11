import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Development } from "../Development/Development";
import { Sport } from "../Sport/Sport";
import { NotFound } from "./NotFound";

export class Routes extends Component {
    render() {
        return (
            <div className="Routes">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/development" component={Development} />
                    <Route exact path="/sport" component={Sport} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}