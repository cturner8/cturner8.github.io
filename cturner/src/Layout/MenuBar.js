import React, { Component } from 'react'
import { Menu } from "semantic-ui-react";
import "./MenuBar.css";
import { Link } from "react-router-dom";

const currentPage = window.location.href
    .substring(window.location.href.lastIndexOf("/") + 1);

export class MenuBar extends Component {
    state = {
        activeItem: (currentPage ? currentPage : "home")
    };

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render () {
        const {activeItem} = this.state;

        return (
            <Menu pointing secondary fluid className="menuBar">
                <Link to="/home">
                    <Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick} />
                </Link>
                <Link to="/about">
                    <Menu.Item name="about" active={activeItem === "about"} onClick={this.handleItemClick} />
                </ Link>
                <Link to="/development">
                    <Menu.Item name="development" active={activeItem === "development"} onClick={this.handleItemClick} />
                </ Link>
                <Link to="/sport">
                    <Menu.Item name="sport" active={activeItem === "sport"} onClick={this.handleItemClick} />
                </ Link>
            </Menu >
        );
    }
}