import React from 'react';
import { Component } from 'react';

import SearchBarDropdown from '../components/new/SearchBarDropdown'
import SearchBar from '../components/new/SearchBar';
import SalesOrder from '../components/new/SalesOrder'
import FileUpload from '../components/new/FileUpload';


import salesOrderData from '../Data.json'

class About extends Component {
    constructor(props) {
        super(props);
        const salesOrderdata = [
            {
                "jobName": "Metal Doors",
                "carrier": "Roadways",
                "terms": "Check",
                "salesOrderId": "USDM-004825",
                "checkReceived": true
            }, {
                "jobName": "Almunium Window",
                "carrier": "Ship",
                "terms": "Check",
                "salesOrderId": "USDM-004826",
                "checkReceived": false
            }, {
                "jobName": "Almunium Grill",
                "carrier": "Air",
                "terms": "UnCheck",
                "salesOrderId": "USDM-004827",
                "checkReceived": true
            }
        ]
    }

    fileSelectedHandler = event => {
        console.log(event.target.files[0])
    }
    fileUploadHandler = () => {

    }

    render() {
        return (

            <div className="App">
                <SearchBarDropdown />
                <SearchBar placeholder="Search by..." data={salesOrderData} />
                <SalesOrder jobName={salesOrderData[0].jobName} carrier={salesOrderData[0].carrier} terms={salesOrderData[0].terms} checkReceived={salesOrderData[0].checkReceived}></SalesOrder>
                <FileUpload />
                <div>
                    <button>Transfer Order</button>
                    <button onChange={this.fileUploadHandler}>Ship</button>
                </div>
            </div>

        );
    }
}

export default About;
