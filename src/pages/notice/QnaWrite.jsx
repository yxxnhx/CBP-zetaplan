import React from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import { useState, useRef } from 'react';
import './../../styles/qna/qnaWrite.scss'

const QnaWrite = () => {
  const subTitle = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'
  const [state, setState] = useState({
    title: '',
    author: '',
    content: '',
  })

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    });
  }

  const authorInput = useRef();
  const titleInput = useRef();
  const contentInput = useRef();
  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('cccc')
    setErrors(validation(state));
    if(state.title.length < 1 ) {
      titleInput.current.focus();
      return ;
    }

    if(state.author.length < 1 ) {
      authorInput.current.focus();
      return ;
    }
    
    if(state.content.length < 5 ) {
      contentInput.current.focus();
      return ;
    }
    
    const qnaList = JSON.parse(window.localStorage.getItem('newQnaList'));

    if (qnaList) {
      window.localStorage.setItem('newQnaList', JSON.stringify([...qnaList, { ...state, createdAt: new Date().toISOString().split('T')[0] }]));
    } else {
      window.localStorage.setItem('newQnaList', JSON.stringify([{ ...state, createdAt: new Date().toISOString().split('T')[0] }]));
    }

    
    alert('질문 등록 완료되었습니다')
  }

  const validation = (state) => {
    let errors = {};
  
    if (!state.title) {
      errors.title = '제목을 입력해주세요';
    }
    if (!state.author) {
      errors.author = '작성자를 입력해주세요';
    }
    if (!state.content) {
      errors.content = '질문을 입력해주세요';
    }
    return errors;

  }


  return (
    <div>
      <SubBanner title={subTitle} img={subBg} />

      <div className="qnaWriteInner">
        <div className="qnaWriteArea">
          <form>
            <fieldset>
              <legend>Q&A</legend>
              <div className="qnaBox">
                <div className="qnaTitle qnaCategory">
                  <label htmlFor="title" className='title'>제목</label>
                  <input 
                    name='title' 
                    type="text" 
                    className='title' 
                    id='title' 
                    placeholder='제목을 입력해주세요' 
                    value={state.title} 
                    ref={titleInput}
                    onChange={handleChangeState}/>
                </div>
                <div className='errorBox'>
                  {errors.title || <p className='error'>{errors.title}</p>}
                </div>
              </div>
              <div className="qnaBox">
                <div className="qnaAuthor qnaCategory">
                  <label htmlFor="author" className='author'>작성자</label>
                  <input 
                    name='author' 
                    type="text" 
                    className='author' 
                    id='author' 
                    placeholder='작성자를 입력해주세요' 
                    value={state.author} 
                    ref={authorInput}
                    onChange={handleChangeState}/>
                </div>
                <div className='errorBox'>
                  {errors.author || <p className='error'>{errors.author}</p>}
                </div>
              </div>
              <div className="qnaBox">
                <div className="qnaContentBox">
                  <label htmlFor="content" className='qnaContent'>내용</label>
                  <textarea 
                    name='content' 
                    type="text" 
                    className='qnaContent' 
                    id='qnaContent'
                    placeholder='질문을 입력헤주세요'  
                    value={state.content} 
                    ref={contentInput}
                    onChange={handleChangeState}/>
                </div>
                <div className='errorBox'>
                  {errors.content || <p className='error'>{errors.content}</p>}
                </div>
              </div>

              <div className="qnaBtnArea">
                <button type='button' className="createBtn" onClick={handleSubmit}>등록하기</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QnaWrite;