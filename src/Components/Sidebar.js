import React from 'react'
import { Nav, NavItem, NavLink, Card } from 'reactstrap';

export default function Sidebar() {

    return (
        <div>
            <Card style={{ width: 300, height: 700, border: "2px solid black", marginTop: "3px" }}>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">Preliminary</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">NYC Project</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Homeowner</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Permitting</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">PV System</NavLink>
                    </NavItem>

                </Nav>
            </Card>
        </div>
    )
}
