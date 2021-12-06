import React, { Component } from 'react';
import axios from 'axios';


    
class Shop extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number: ''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    

    const obj = {
      crossdomain: true,
      "_contract": {
        "CustAccount": "US-001",
        "SalesLineList":
          [{
            "ItemId": "D0111",
            "SalesQty": "1",
            "SalesPrice": 10.00,
            "DCI_LastUpdatedStatus": 1
          }]
      }
    }

    var token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2RldmJjczAwMTUzNmE2OWIyNTQyZDRkMTBkZXZhb3MuYXhjbG91ZC5keW5hbWljcy5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zOTk3N2IzYS1iYThiLTQ2MTctOGZiMy1kMTUwNGRmZDBkNzcvIiwiaWF0IjoxNjM4NzgyNzM2LCJuYmYiOjE2Mzg3ODI3MzYsImV4cCI6MTYzODc4NjYzNiwiYWlvIjoiRTJaZ1lOQk1uT2ZFTGw0aXBOa1VjL3ZXOGYvUEFRPT0iLCJhcHBpZCI6IjUxMGJmODAwLTcxNjEtNGM4Ny1hMzYwLWRiYjg2YTdhMDg4YiIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzM5OTc3YjNhLWJhOGItNDYxNy04ZmIzLWQxNTA0ZGZkMGQ3Ny8iLCJvaWQiOiIwMjEzOGMwOC04MDVkLTQ2NzAtYTQxYi0zNjljMjhkMjdjMTgiLCJyaCI6IjAuQVZzQU9udVhPWXU2RjBhUHM5RlFUZjBOZHdENEMxRmhjWWRNbzJEYnVHcDZDSXRiQUFBLiIsInN1YiI6IjAyMTM4YzA4LTgwNWQtNDY3MC1hNDFiLTM2OWMyOGQyN2MxOCIsInRpZCI6IjM5OTc3YjNhLWJhOGItNDYxNy04ZmIzLWQxNTA0ZGZkMGQ3NyIsInV0aSI6IlRvSXNTLTZDSWtXeU5SYWdyY2FEQUEiLCJ2ZXIiOiIxLjAifQ.MTNsQa043qAEzod2dwYkMrgjJO-pAU94PAy70eCsgcDIfpLXwMtNL_AiXjTIBSQZMDmxRTKplQd8dtR7PYzEIiQ7aJojw5rXbq6RsHZWaMU5uWhxM1sfgWPv8XuQWt90YpDwG4E-gd7GwoN6qk9q6f2nT8ANrS3dZTfJfx8XywAc1xzWrAruW0UTqIg686RK3IH9JhhOkgIdNP8pqpsLKUneq6N3lznpaiAlqF2d62iUJbbcEJQFz9o1JTrVjymjjampM6ikh2OKIPZ4wClF9-_PvafTs5lHkMMHBoWkuSS81C-B6_CIO4LHXlAEWkxUjE-wK3brE_8bCYO3puNkQA'

    var URL = 'https://devbcs001536a69b2542d4d10devaos.axcloud.dynamics.com/api/services/createSalesOrderSG/runSalesOrder/createSO';


    var headerConfig = {
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`
      }
    }



    axios.post(URL, obj, {
      headers: headerConfig
    })
      .then(res => console.log(res.data));

    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Add New Sales order</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>CustAccount:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Business Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.business_name}
              onChange={this.onChangeBusinessName}
            />
          </div>
          <div className="form-group">
            <label>GST Number: </label>
            <input type="text"
              className="form-control"
              value={this.state.business_gst_number}
              onChange={this.onChangeGstNumber}
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Register Business"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default Shop;
