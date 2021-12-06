import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardText, Collapse, Button } from "reactstrap";
import CollapsiblePanel from './CollapsiblePanel'

export default class Customers extends Component {


    

    constructor(props) {
        super(props)
        
        this.state = {
            filter: "",
            data: [
                {
                    fname: "Jayne",
                    lname: "Washington",
                    email: "jaynewashington@exposa.com",
                    gender: "female"
                },
                {
                    fname: "Peterson",
                    lname: "Dalton",
                    email: "petersondalton@exposa.com",
                    gender: "male"
                },
                {
                    fname: "Velazquez",
                    lname: "Calderon",
                    email: "velazquezcalderon@exposa.com",
                    gender: "male"
                },
                {
                    fname: "Norman",
                    lname: "Reed",
                    email: "normanreed@exposa.com",
                    gender: "male"
                }
            ],
            collapse: false,
            selectedCustomer: 1,
            customerList: [{
                id: 1,
                productName: "Steel",
                quantity: 12,
                location: "Chennai",
                slots: "2"
            },
            {
                id: 2,
                productName: "Door",
                quantity: 2,
                location: "Delhi",
                slots: "5"
            },
            {
                id: 3,
                productName: "Metals",
                quantity: 20,
                location: "Mumbai",
                slots: "10"
            }
            ]
        }
    }


    //function which is called the first time the component loads
    componentDidMount() {
        this.setState({
            filtered: [{
                id: 1,
                productName: "Steel",
                quantity: 12,
                location: "Chennai",
                slots: "2"
            },
            {
                id: 2,
                productName: "Door",
                quantity: 2,
                location: "Delhi",
                slots: "5"
            },
            {
                id: 3,
                productName: "Metals",
                quantity: 20,
                location: "Mumbai",
                slots: "10"
            }
            ]
        });
        this.getCustomerData();
    }

    //Function to get the Customer Data from json
    getCustomerData() {
        this.setState({
            filtered: [{
                id: 1,
                productName: "Steel",
                quantity: 12,
                location: "Chennai",
                slots: "2"
            },
            {
                id: 2,
                productName: "Door",
                quantity: 2,
                location: "Delhi",
                slots: "5"
            },
            {
                id: 3,
                productName: "Metals",
                quantity: 20,
                location: "Mumbai",
                slots: "10"
            }
            ]
        });
    };

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };




    render() {
        return (
            <div className="addmargin" >
                <div className="col-md-6 col-md-offset-3" >
                    <h5>Sales Order Details</h5>
                    {
                        this.state.customerList.map(function (article, i) {
                            return (
                                <div className="article-preview" >
                                    <div className="article-meta" >
                                        <div className="info" >
                                            Product name - {article.productName}
                                        </div>
                                    </div >
                                    <div className="article-meta" >
                                        <div className="info" >
                                            Site Location - {article.location}
                                        </div>
                                    </div >
                                    <div className="article-meta" >
                                        <div className="info" >
                                            Quantity - {article.quantity}
                                        </div>
                                    </div >
                                    <div className="article-meta" >
                                        <div className="info" >
                                            Slots - {article.slots}
                                        </div>
                                    </div >
                                    <button className="btn btn-primary" >
                                        Transfer Order
                                    </button>
                                    <div className="article-meta" >
                                        <CollapsiblePanel data={article} />
                                    </div >
                                </div >
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}


