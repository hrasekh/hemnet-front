import React from 'react';
import ImageWrapper from 'components/Image/ImageWrapper';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    NavbarText
} from 'reactstrap';

import { BsPerson } from "react-icons/bs";


function Menu() {
  
    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
        <Navbar light expand="md" style={{backgroundColor: "#e4e8da !important"}}>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <NavbarBrand href="/" style={{paddingLeft: "12px"}}>
                <ImageWrapper />
            </NavbarBrand>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Search for a place to live</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Selling a home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Build house</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Abroud</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">New production</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <NavbarText>
                <BsPerson style={{fontSize: "1.5em"}} /> Sign in
            </NavbarText>
        </Navbar>
    );
}
  
export default Menu;