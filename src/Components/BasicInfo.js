import React, { useState } from 'react'
import { Button, Col, Collapse, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import InformationService from '../Service/informationService';


export default function BasicInfo(props) {
    const basicInfoData = {
        projectNumber: "",
        projectDate: "",
        client: ""
    }

    const [basicInfo, setBasicInfo] = useState(basicInfoData);
    // const [isOpen, setIsOpen] = useState(false);
    //    const toggle = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        console.log("basicInfo :: " + JSON.stringify(basicInfo));
        console.log("fieldName :: " + e.target.name);
        console.log(e.target.value);
        setBasicInfo({
            ...basicInfo,
            //prilimanaryResarch: e.target.value
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Collapse isOpen={props.basicToggle} >
                <Form>
                    <FormGroup row>
                        <Label sm={2}>Project Number</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="projectNumber"
                                value={basicInfo.projectNumber}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Project Date</Label>
                        <Col sm={10}>
                            <Input type="date" name="projectDate" value={basicInfo.projectDate}
                                onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Client</Label>
                        <Col sm={10}>
                            <Input type="select" name="client"
                                value={basicInfo.client}
                                onChange={handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Button type="button" onClick={() => console.log(JSON.stringify(basicInfo))}>Continue</Button>
                    <Button type="button" onClick={() => InformationService.addBasicInfo(basicInfo)}>Save</Button>
					<p>hello</p>	
                </Form>
            </Collapse>
        </div>
    )
}
