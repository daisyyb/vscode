import React, { useState } from "react";
import './App.css';

function App() {
  // 상태 설정
  const [formData, setFormData] = useState({
    memberId: '',
    password: ''
  });

  // 아이디와 비밀번호 상태에 대한 유효성 검사
  const [validation, setValidation] = useState({
    memberIdValid: false,
    passwordValid: false
  });

  // 입력 변화 처리 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // 유효성 검사
    if (name === "memberId") {
      setValidation({
        ...validation,
        memberIdValid: value.length >= 5  // 아이디가 5글자 이상인지 검사
      });
    } else if (name === "password") {
      setValidation({
        ...validation,
        passwordValid: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value)  // 비밀번호가 8자 이상, 문자+숫자 포함인지 검사
      });
    }
  };

  // 폼 제출 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation.memberIdValid && validation.passwordValid) {
      console.log("회원가입 정보:", formData);
      alert(`회원가입 완료: 아이디: ${formData.memberId}`);
    } else {
      alert("아이디 또는 비밀번호가 유효하지 않습니다.");
    }
  };

  return (
    <>
      <h1>회원 가입</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디: </label>
          <input 
            type="text" 
            name="memberId" 
            value={formData.memberId} 
            onChange={handleChange} 
            placeholder="아이디를 입력하세요"
            required
          />
          <p style={{color: validation.memberIdValid ? 'green' : 'red'}}>
            {validation.memberIdValid ? '사용 가능한 아이디입니다.' : '아이디는 최소 5글자 이상이어야 합니다.'}
          </p>
        </div>
        <div>
          <label>비밀번호: </label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="비밀번호를 입력하세요"
            required
          />
          <p style={{color: validation.passwordValid ? 'green' : 'red'}}>
            {validation.passwordValid ? '안전한 비밀번호입니다.' : '비밀번호는 최소 8자 이상, 문자와 숫자를 포함해야 합니다.'}
          </p>
        </div>
        <button type="submit" disabled={!(validation.memberIdValid && validation.passwordValid)}>회원 가입</button>
      </form>
    </>
  );
}

export default App;
