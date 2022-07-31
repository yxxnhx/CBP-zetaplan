import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import '../../styles/qna/qnaDetail.scss'
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import PageBase from '../../components/common/Darkmode/PageBase';


const QnaDetail = ({ setHdSubStyle }) => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const [qnaList, setQnaList] = useState(JSON.parse(window.localStorage.getItem('newQnaList')));

  useEffect(() => {
    const detailPageData = qnaList.find(element => element.id === parseInt(id));
    setData(detailPageData);
  
  }, []);

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

 

  const onDelete = useCallback((index) => {
    const newIndex = parseInt(index)-1
    qnaList.splice(newIndex, 1);
    window.localStorage.setItem('newQnaList', JSON.stringify(qnaList))
    setQnaList(qnaList);
    navigate('/qna');
  }, [])


  const handleDelete = () => {
    if(window.confirm('질문을 삭제하시겠습니까?')){
      onDelete(id)
    }
  }

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    onUpdate(id)
    setIsEdit(!isEdit)
  };

  const onUpdate = useCallback((index) => {
    navigate(`/qna-write/${index}`);
  }, [])

  const hasComments = data?.comments?.length;

  const title = 'ZETA PLAN만의\n다양하고 전문적인 정보를 제공해드립니다'
  const oneDepth='소식 · 자료';
  const oneDepthLink='/news';
  const twoDepth='Q&A';
  const twoDepthLink='/qna';
  const linkActive='twoDepth';

  if (!data) {
    return <div></div>;
  }

  return (
    <>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} linkActive={linkActive} />
      <PageBase>
        <div className='qnaDetailInner'>
          <div className='qnaTitleBox'>
            <h2 className='qnaTitle darkText'><Link to='/qna'>Q&A</Link></h2>
          </div>
          <p className='qnaSubTitle darkText'>{data.title}</p>
          <ul className='qnaDetailInfo darkText'>
            <li>작성자: {data.author}</li>
            <li>조회수: {data.hit}</li>
            <li>{data.createdAt}</li>
          </ul>
          <div className='qnaContent'>
            <p className='content' dangerouslySetInnerHTML={{ __html: data.content }}></p>
          </div>
          {
            hasComments ? (<>
              <div className='answerInfo'>
                <p className='answerInfoText'>답변</p>
                <p className='answerDate'>{data.comments[0].createdAt}</p>
              </div>
              <div className='answerContent'>
                <div className='content' dangerouslySetInnerHTML={{ __html: data.comments[0].content }}></div>
              </div>
            </>)
              : null
          }
          <div className="qnaContentBtnArea">
            <button type="button" 
              className='qnaContentUpdateBtn darkText'
              onClick={() => {
                if(window.confirm('게시글을 수정하시겠습니까?'))
                  toggleIsEdit()
              }}>수정하기</button>
            <button type="button" 
              className='qnaContentDeleteBtn darkText'
              onClick={handleDelete}>삭제하기</button>
          </div>
          <Link to="/qna" className='qnaListBtn'>목록</Link>
        </div>
      </PageBase>
    </>
  );
};

export default QnaDetail;