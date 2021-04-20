import React, { useState } from 'react'
import { Button, Col, Collapse, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import InformationService from '../Service/informationService';
import PropertyService from '../Service/propertyService';
import ServiceInfo from './ServiceInfo';

export default function PropertyForm(props) {

    const propertyData = {
        projectAddress: "",
        houseNumber: "",
        streetName: "",
        zipCode: "",
        state: "",
        city: "",
        nycProject: "",

    }
    const [propertyInfo, setPropertyInfo] = useState(propertyData);

    const handleChange = (e) => {

        console.log("fieldName :: " + e.target.name);
        console.log(e.target.value);
        setPropertyInfo({
            ...propertyInfo,
            //prilimanaryResarch: e.target.value
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>


            <Collapse isOpen={props.propertyToggle} >

                <Form>
                    <FormGroup row>
                        <Label sm={2}>ProjectAddress</Label>
                        <Col sm={10}>
                            <Input type="email" name="projectAddress"
                                value={propertyInfo.projectAddress}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>HouseNumber</Label>
                        <Col sm={10}>
                            <Input type="text" name="HouseNumber"
                                value={propertyInfo.houseNumber}
                                onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Street Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="streetName"
                                value={propertyInfo.streetName}
                                onChange={handleChange} >

                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Zip Code</Label>
                        <Col sm={10}>
                            <Input type="text" name="ZipCode"
                                value={propertyInfo.zipCode}
                                onChange={handleChange} >

                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>State</Label>
                        <Col sm={10}>
                            <Input type="text" name="state"
                                value={propertyInfo.state}
                                onChange={handleChange} >

                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>City</Label>
                        <Col sm={10}>
                            <Input type="text" name="city"
                                value={propertyInfo.city}
                                onChange={handleChange}>

                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>NYC Project</Label>
                        <Col sm={10}>
                            <Input type="text" name="NYcProject"
                                value={propertyInfo.nycProject}
                                onChange={handleChange}>

                            </Input>
                        </Col>
                    </FormGroup>
                    <Button type="button">Continue</Button>
                    <Button type="button" onClick={() => PropertyService.addPropertyInfo(propertyInfo)}>Save</Button>
                </Form>

            </Collapse>
        </div>
    );
}
