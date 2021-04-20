import React, { useState } from 'react'

import { Button, Col, Collapse, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function ServiceInfo(props) {
    const [isOpen, setIsOpen] = useState(false);

    const serviceData = {
        prelimimnaryResearch: false,
        preliminaryLayout: false,
        design: false,
        siteAssesment: false

    }

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>


            <Collapse isOpen={props.serviceToggle} >
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" md={2}>PrelimimnaryResearch</Label>
                        <Col md={10} >
                            <input type="radio"
                                name="prilimanaryLayout"
                                value="Yes"
                                onChange=""
                            />Yes
                 <input type="radio"
                                name="prilimanaryLayout"
                                value="No"

                                onChange=""
                            />No

                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>PreliminaryLayout</Label>
                        <Col>
                            <input type="radio"
                                name="prilimanaryLayout"
                                value="Yes"

                                onChange=""
                            />Yes
     <input type="radio"
                                name="prilimanaryLayout"
                                value="No"

                                onChange=""
                            />No
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Design</Label>
                        <Col>
                            <input type="radio"
                                name="prilimanaryLayout"
                                value="Yes"

                                onChange=""
                            />Yes
     <input type="radio"
                                name="prilimanaryLayout"
                                value="No"

                                onChange=""
                            />No
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Site Assesment</Label>
                        <Col>
                            <input type="radio"
                                name="prilimanaryLayout"
                                value="Yes"

                                onChange=""
                            />Yes
     <input type="radio"
                                name="prilimanaryLayout"
                                value="No"

                                onChange=""
                            />No
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>PreliminaryLayout</Label>
                        <Col>
                            <input type="radio"
                                name="prilimanaryLayout"
                                value="Yes"

                                onChange=""
                            />Yes
     <input type="radio"
                                name="prilimanaryLayout"
                                value="No"

                                onChange=""
                            />No
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>PreliminaryLayout</Label>
                        <Col>
                            <input type="radio"
                                name="prilimanaryLayout"
                                value="Yes"

                                onChange=""
                            />Yes
     <input type="radio"
                                name="prilimanaryLayout"
                                value="No"

                                onChange=""
                            />No
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Design</Label>
                        <Col >
                            <input type="radio"
                                name="prilimanaryLayout"
                                value="Yes"
                                onChange=""
                            />Yes
<input type="radio"
                                name="prilimanaryLayout"
                                value="No"
                                onChange=""
                            />No
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>SiteAssesment</Label>
                        <Col>
                            <input type="radio"

                                name="prilimanaryLayout"
                                value="Yes"

                                onChange=""
                            />Yes
     <input type="radio"
                                name="prilimanaryLayout"
                                value="No"

                                onChange=""
                            />No
                        </Col>
                    </FormGroup>
                    <Button type="button">Continue</Button>
                </Form>
            </Collapse>
        </div>
    )
}
