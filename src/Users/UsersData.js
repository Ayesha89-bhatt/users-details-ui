import React, { useState, useEffect } from 'react';

import InformationService from '../Service/informationService.js';

const BasicDetail = () => {
    const [basicInfo, setBasicInfo] = useState([]);

    useEffect(() => {
        console.log("use effect pe call aayi  ");
        async function getBasicInfoData() {
            let response = await InformationService.getBasicInfo();
            console.log("data from backend :: " + JSON.stringify(response));
            setBasicInfo(response.data);
        }
        getBasicInfoData();
    }, []);

    //first ltr capital
    //  function firstLtrCaps(name) {
    //name = "abc"
    //}

    /**
     * 
     * client: "tech compiler"
    createdAt: "2021-04-18T21:15:53.712Z"
    id: "607ca1897c38310c6c531bb8"
    projectDate: "18-04-2021"
    projectNumber: "project-1"
     */


    return (
        <div>
            <h1><center>Users Details</center></h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>projectNumber</th>
                        <th>projectDate</th>
                        <th>client</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basicInfo.map(info =>
                            <tr key={info.id}>
                                <td>{info.projectNumber}</td>
                                <td></td>
                                <td></td>
                                <td><button className="btn btn-warning">Update</button><button className="btn btn-danger">Delete</button></td>
                            </tr>



                        )
                    }











                </tbody>

            </table>
        </div>
    )
};

export default BasicDetail;