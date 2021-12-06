import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";

function CollapsiblePanel({ children, ...props }) {


  console.log(props, "props")

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((numbers) =>
    <li key={numbers} >{numbers}</li>
  );

  const { title, collapse } = props;

  const id = props.data.id
  const [isCollapse, setIsCollapse] = useState(collapse);
  const [icon, setIcon] = useState("fa fa-chevron-down");
  const toggle = () => {
    setIsCollapse(!isCollapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  const animate = collapse => {
    setIsCollapse(collapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  useEffect(() => {
    animate(!collapse);
  }, [collapse]);

  return (


    <div className="coll-panel">
      <button
        type="button"
        className="coll-panel-btn btn-primary btn-block text-left"
        onClick={() => toggle()}
      >
        <i className={icon} /> {title}
      </button>
      <Collapse key={id} className="border text-left p-2" isOpen={isCollapse}>
        <div>
          <ul>{listItems}</ul>
        </div>
      </Collapse>
    </div>
  );
}

CollapsiblePanel.defaultProps = {
  children: '',
  title: "Expand",
  collapse: true
};

export default CollapsiblePanel;
