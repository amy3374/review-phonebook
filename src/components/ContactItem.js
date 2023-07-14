import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactItem = ({ item, key }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    console.log("삭제", item);
    dispatch({ type: "DELETE_CONTACT", payload: { key } });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              width={60}
              src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            />
          </Col>
          <Col className="item-info">
            <div>
              <div>{item.name}</div>
              <div>{item.number}</div>
            </div>
            <div className="delete-btn" onClick={deleteItem}>
              ❌
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactItem;
