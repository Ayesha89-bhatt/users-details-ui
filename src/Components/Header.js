import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const CreateHeader = () => {
    const history = useHistory();

    return (
        <div>
            <Navbar color="primary" light>
                <NavbarBrand href="/" className="mr-auto">CRM</NavbarBrand>
                <button type="button" onClick={() => history.push("/table")}>Create Project</button>
            </Navbar>
        </div>

    );
}
export default CreateHeader;