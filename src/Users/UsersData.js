import React, { useState, useEffect } from 'react';
//import BootstrapTable from 'react-bootstrap-table-next';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { TablePagination } from 'react-pagination-table';
import FakeData from '../Service/FakeData.js';


import InformationService from '../Service/informationService.js';
const Header = ["Project Number", "Project Date", "Client"];

const BasicDetail = () => {
    const [basicInfo, setBasicInfo] = useState([]);

    useEffect(() => {
        console.log("use effect pe call aayi  ");
        async function getBasicInfoData() {
            let response = await InformationService.getBasicInfo();
            console.log("data from backend :: " + JSON.stringify(response));
            setBasicInfo(response.data);
            //setBasicInfo(FakeData);
        }
        getBasicInfoData();
    }, []);

    return (
        <div>
            <h1><center>Users Details</center></h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>ProjectNumber</th>
                        <th>ProjectDate</th>
                        <th>Client</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basicInfo.map(info =>
                            <tr key={info.id}>
                                <td>{info.projectNumber}</td>
                                <td>{info.projectDate}</td>
                                <td>{info.client}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>

            */}

            <TablePagination


                headers={Header}
                data={basicInfo}
                columns="projectNumber.projectDate.client"
                perPageItemCount={1}
                totalCount={basicInfo.length - 5}
                arrayOption={[["size", 'all', ' ']]}
            />



        </div>
    )
};

export default BasicDetail;