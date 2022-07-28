import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import '../../styles/qna/qnaDetail.scss'

const QnaDetail = ({ setHdSubStyle }) => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const [theme, setTheme] = useState('');
  const [themeCss, setThemCss] = useState('');
  
  useEffect(() => {
    const qnaList = JSON.parse(window.localStorage.getItem('newQnaList'));
    const detailPageData = qnaList.find(element => element.id === parseInt(id));
    setData(detailPageData);

  }, []);

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  function handleTheme () {
    const value = theme;
    setTheme(!value);
    const cssValue = value ? 'dark' : 'light';
    setThemCss(cssValue);
  }

  const hasComments = data?.comments?.length;

  const oneDepth='소식 · 자료';
  const oneDepthLink='/news';
  const twoDepth='Q&A';
  const twoDepthLink='/qna';
  const linkActive='twoDepth';

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'

  if (!data) {
    return <div></div>;
  }

  return (
    <>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} linkActive={linkActive} />
      <div className={themeCss}>
        <div className='darkBackground'>
          <div className='qnaDetailInner'>
            <div className="themeBtnArea">
              <button className='themeBtn' onClick={()=>{handleTheme()}}>
                mode change
              </button>
            </div>
            <div className='qnaTitleBox'>
              <h2 className='qnaTitle darkText'>Q&A</h2>
            </div>
            <p className='qnaSubTitle darkText'>{data.title}</p>
            <ul className='qnaDetailInfo darkText'>
              <li className='darkText'>작성자: {data.author}</li>
              <li className='darkText'>조회수: {data.hit}</li>
              <li className='darkText'>{data.createdAt}</li>
            </ul>
            <div className='darkText qnaContent'>
              <p className='content darkText' dangerouslySetInnerHTML={{ __html: data.content }}>
              </p>
            </div>
            {
              hasComments && (<>
                <div className='answerInfo'>
                  <p className='answerInfoText darkText'>답변</p>
                  <p className='answerDate darkText'>{data.comments[0].createdAt}</p>
                </div>
                <div className='answerContent'>
                  <div className='content' dangerouslySetInnerHTML={{ __html: data.comments[0].content }}></div>
                </div>
              </>)
            }
            <Link to="/qna" className='qnaListBtn'>목록</Link>
            <button type="button">삭제</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QnaDetail;