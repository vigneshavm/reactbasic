import React from "react";

function SearchBarDropdown() {
    return (
        <div>
            <select>
                <option value="salesorderId">Sales Order ID</option>
                <option value="cutumerId">Custumer ID</option>
                <option value="status">Status</option>
                <option value="SalesOrderCreatedDate">Created Date</option>
            </select>
            <input type="text" placeholder="Search by.."></input>
            {/* <div className="searchIcon"><SearchIcon /></div> */}
        </div>

    );
}

export default SearchBarDropdown;