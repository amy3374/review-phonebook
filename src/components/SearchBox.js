import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const search = () => {
    // console.log("keyword", keyword);
    dispatch({ type: "SEARCH_NAME", payload: { keyword } });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit" onClick={search}>
              search
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBox;
