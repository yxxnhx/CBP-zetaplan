import React from 'react';
import '../../styles/login/login.scss'
import { useState, useRef, useEffect } from 'react';

const Login = ({ setHdSubStyle }) => {
  const adminIdRef = useRef();
  const passwordRef = useRef();

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  window.localStorage.setItem('adminInfo', JSON.stringify({id: 'zindex', password: 12345 }))

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(inputs));
    const idLength = inputs['admin-id']?.length
    const passwordLength = inputs['admin-pwd']?.length
    const admin = JSON.parse(window.localStorage.getItem('adminInfo'));

    if(!idLength) {
      adminIdRef.current.focus();
      return;
    }

    if(idLength < 5) {
      adminIdRef.current.focus();
      alert('5글자 이상인지 확인해주세요.')
      return;
    } else if (passwordLength < 5) {
      passwordRef.current.focus();
      alert('5글자 이상인지 확인해주세요.')
      return;
    }

    if(inputs['admin-pwd'] !== String(admin.password) || inputs['admin-id'] !== admin.id) {
      alert('로그인 정보가 일치하지 않습니다.');
      adminIdRef.current.focus();
      return;
    }
    window.location = '/main';
    alert('관리자님 로그인 되었습니다.');
    
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  const validation = (inputs) => {
    let errors = {};

    if (!inputs['admin-id']) {
      errors.id = 'id를 입력해주세요';
    }
    if (!inputs['admin-pwd']) {
      errors.pwd = '비밀번호를 입력해주세요';
    } 
    return errors;
  }

  return (
    <div className="loginBackGround">
      <div className='loginContainer'>
        <div className="loginFormContainer">
          <div className='leftContainer'>
            <div className='leftText'>
              <p>반갑습니다</p>
              <p>ZETAPLAN입니다</p>
            </div>
          </div>
          <form className='loginForm' onSubmit={onSubmit}>
            <div className="loginIdBox">
              <label htmlFor="admin-id">
                <input 
                  className="logIdInput" 
                  name="admin-id" 
                  type="text" 
                  placeholder='아이디' 
                  ref={adminIdRef}
                  onKeyDown={onKeyDown}
                  onChange={onChange}
                />
              </label>
              <div className='errorBox'>
                <span>
                  {errors.id || <p className='error'>{errors.id}</p>}
                </span>
              </div>
            </div>
            <div className='pwdBox'>
              <label htmlFor="admin-pwd">
                <input 
                  className="logPwdInput" 
                  type="password"
                  name="admin-pwd" 
                  placeholder='비밀번호' 
                  ref={passwordRef}
                  onKeyDown={onKeyDown}
                  onChange={onChange}
                />
              </label>
              <div className="errorBox">
                <span> 
                  {errors.pwd || <p className='error'>{errors.pwd}</p>}
                </span>
              </div>
            </div>
            <button className="loginBtn" type="submit">로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
};
 

export default Login;