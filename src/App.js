import React, { useState } from 'react';
import BasicInfo from './Components/BasicInfo.js';


import { Container, Row, Col, Card } from 'reactstrap';

import CreateHeader from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import ServiceInfo from './Components/ServiceInfo.js';
import PropertyForm from './Components/PropertyForm..js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasicDetail from './Users/UsersData.js';

//import Data from './Data/Data.js';
function App() {
  const [basicToggle, setBasicToggle] = useState(true);
  const [serviceToggle, setServiceToggle] = useState(false);
  const [propertyToggle, setPropertyToggle] = useState(false);
  return (
    <div>
      <CreateHeader />
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>

          <Card style={{ border: '2px solid blue', marginTop: '8px', backgroundColor: "skyblue" }}>

            <h5 style={{ marginLeft: "15px" }}
              onClick={() => {
                setBasicToggle(!basicToggle);
                setServiceToggle(false);
                setPropertyToggle(false);

              }} >Basic Informaation
                <span><i className={basicToggle ? "fa fa-caret-down" : "fa fa-caret-right"}></i></span>
            </h5>

          </Card>
          <BasicInfo basicToggle={basicToggle} />

          <Card style={{ border: "2px solid black", marginTop: "4px", backgroundColor: "skyblue" }}>
            <h5 style={{ marginLeft: "15px" }}
              onClick={() => {
                setServiceToggle(!serviceToggle);
                setBasicToggle(false);
                setPropertyToggle(false);

              }}>Services Requested
            <span><i className={serviceToggle ? "fa fa-caret-down" : "fa fa-caret-right"}></i></span></h5>
          </Card>
          <ServiceInfo serviceToggle={serviceToggle} />

          <Card style={{ border: "2px solid green", marginTop: "4px", backgroundColor: "skyblue" }}>
            <h5 style={{ marginLeft: "15px" }}
              onClick={() => {
                setPropertyToggle(!propertyToggle);
                setBasicToggle(false);
                setServiceToggle(false);
              }}>Property Location Informaation
          <span><i className={propertyToggle ? "fa fa-caret-down" : "fa fa-caret-right"}>
              </i></span>
            </h5>
          </Card >
          <PropertyForm propertyToggle={propertyToggle} />
        </Col>

      </Row>

      <Router>
        <Switch>
          <Route exact path='/table' component={BasicDetail} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
