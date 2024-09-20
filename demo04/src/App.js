// App.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';


// Exam06 컴포넌트를 import
import Exam06 from './components/Exam06';  // 파일 경로에 맞게 수정하세요.
import BankAccount from './components/BankAccount';  // FruitPurchase 경로에 맞게 수정하세요.
import { FcEmptyTrash } from "react-icons/fc";

const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>TEST</h1>
            {/* 여기에 기존의 EmployeeForm 관련 컴포넌트가 있다고 가정 */}
          </Col>
        </Row>

        {/* 두 컴포넌트를 나란히 사용 */}
        <Row className="mt-4">
          <Col>
          </Col>
        </Row>

        <Row className="mt-4 mb-4">
          <Col>
            <h2>BankAccount</h2>
            <BankAccount />  {/* 두 번째 컴포넌트 */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;