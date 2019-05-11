import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";

export class NotFound extends Component {
    render () {
        return (
            <div className="NotFound">
                <Header as="h1">Page not found</Header>
                <Container>
                    <p>Either the page does not exist or you do not have permission to view it.</p>
                </Container>
            </div>
        );
    }
}