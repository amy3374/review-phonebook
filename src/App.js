import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있음
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있음
//3. 리스트에 아이템이 몇개있는지 보임
//4. 사용자가 유저를 이름검샘으로 찾을 수 있다.
function App() {
  return (
    <div>
      <h1 className="title">Phone Book</h1>
      <Container>
        <Row>
          <Col lg={6}>
            <ContactForm />
          </Col>
          <Col lg={6}>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
