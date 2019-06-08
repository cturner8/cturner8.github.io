import React, { Component } from "react";
import { Header, Image, Container, Grid } from "semantic-ui-react";
import picture from "../Images/landscape.jpg";

export class Home extends Component {
    render () {
        return (
            <div>
                <Header as="h1" >Home</Header>
                <Container>
                    <Image src={picture} fluid />
                </Container>
            </div>
        );
    }
}