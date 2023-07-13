import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactItem = ({ item, id }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    console.log("delete id", id);
    dispatch({ type: "DELETE_CONTACT", payload: { id } });
  };
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img
            width={60}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          />
        </Col>
        <Col lg={10} className="item-row">
          <div className="item-info">
            <div>{item.name}</div>
            <div>{item.number}</div>
          </div>
          <div className="item-delete" onClick={() => deleteItem(id)}>
            ❌
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
