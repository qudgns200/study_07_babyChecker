import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

function App() {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 17)
  );

  return (
    <Container>
      <Row>
        <Col>

          <div className="d-grid gap-1">
            <Button variant="primary" size="lg">수유</Button>{' '}
          </div>
        </Col>
        <Col><div className="d-grid gap-1">
          <Button variant="primary" size="lg">대변</Button>{' '}
        </div></Col>
        <Col>
          <div className="d-grid gap-1">
            <Button variant="primary" size="lg">소변</Button>{' '}
          </div></Col>
        <Col><div className="d-grid gap-1">
          <Button variant="primary" size="lg">취침</Button>{' '}
        </div>

        </Col>
      </Row>
      <br></br>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="kind">
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="inputTime">
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="amountML">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              minTime={setHours(setMinutes(new Date(), 0), 17)}
              maxTime={setHours(setMinutes(new Date(), 30), 20)}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="amountSleeping">
            <Form.Control disabled />
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
}

export default App;
