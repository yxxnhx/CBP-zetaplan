import React from 'react';
import '../../styles/login/login.scss'
import { useState, useRef } from 'react';

const Login = () => {
  const adminRef = useRef();
  const passwordRef = useRef();

  const [inputs, setInputs] = useState({})

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = () => {

    if(inputs['admin-id'].length >=5 && inputs['admin-pwd'].length >= 5) {
      alert('관리자님 로그인 되었습니다.')
    } else {
      alert('5글자 이상인지 확인해주세요.')
    }
  };

  return (
    <div className='loginContainer'>
      <div className='logLeftContainer'>
        <div className='logText'>
          <p className='logTextFirst'>반갑습니다</p>
          <p className='logTextSecond'>ZETAPLAN입니다</p>
        </div>
        <a className="loginLogo" href="/">ZETAPLAN 홈페이지로</a>
      </div>
      <div className='logRightContainer'>
        <form className='loginForm'>
          <label htmlFor="admin-id">
            <input 
              className="logIdInput" 
              name="admin-id" 
              type="text" 
              placeholder='아이디' 
              ref={adminRef}
              onChange={onChange} />
          </label>
          <label htmlFor="admin-pwd">
            <input 
              className="logPwdInput" 
              type="password"
              name="admin-pwd" 
              placeholder='비밀번호' 
              ref={passwordRef} 
              onChange={onChange}/>
          </label>
          <button className="loginBtn"type="button" onClick={onSubmit}>로그인</button>
        </form>
      </div>
    </div>
  );
};
 

export default Login;