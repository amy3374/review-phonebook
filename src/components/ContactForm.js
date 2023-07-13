import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const contactId = useRef(0);
  const addContact = (e) => {
    const id = contactId.current;
    e.preventDefault();
    console.log("id", id);
    dispatch({ type: "ADD_CONTACT", payload: { name, number, id } });
    contactId.current += 1;
    setName("");
    setNumber("");
  };
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>연락처</Form.Label>
        <Form.Control
          type="number"
          placeholder="전화번호를 입력해주세요"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        create
      </Button>
    </Form>
  );
};

export default ContactForm;
