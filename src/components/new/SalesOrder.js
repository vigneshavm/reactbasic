import React from "react";

function salesorder(props) {

    return (
        <form>
            <div>
                <label>Job Name</label>
                <label>{props.jobName}</label>
            </div>
            < div><label>Carrier</label>
                <label>{props.carrier}</label>
            </div>
            <div><label>Terms</label>
                <label>{props.terms}</label>
            </div>

            <div><label>Check Received</label>
                <input type="radio" value="Yes" name="checkReceived" />Yes
                <input type="radio" value="No" name="checkReceived" />No
            </div>
        </form>
    );
};

export default salesorder;