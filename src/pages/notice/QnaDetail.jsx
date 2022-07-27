import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate,useSearchParams} from 'react-router-dom';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import '../../styles/qna/qnaDetail.scss'
import qnaDataList from '../../db/qna.json';


const QnaDetail = ({ setHdSubStyle }) => {
  let { id } = useParams();
  id=parseInt(id);

  const navigate = useNavigate();

  const [data, setData] = useState(null);
  
  const qnaLocalStorage = JSON.parse(window.localStorage.getItem('newQnaList'));
  const qnaList = qnaDataList.concat(qnaLocalStorage).map((item, index) => {
    return { ...item, id: index, hit: 77 };
  })
  console.log('test', qnaList)

  useEffect(() => {
    const detailPageData = qnaList.filter((element,index) => {
      return index === parseInt(id)
    });
    console.log('DATA',detailPageData);
    setData(detailPageData);
    console.log('stateData',data)
  
  }, []);

  // useEffect(() => {
  //   const detailData = qnaDataList.find(element => element.id === parseInt(id));
  //   setData(detailData);
  // }, [])


  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const hasComments = data?.comments?.length;

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'

  if (!data) {
    return <div></div>;
  }

  const onDelete = (id) => {
    console.log(`${id}가 삭제되었습니다`);
    const newQnaList = [...qnaList].splice(id, 1);
    setData(newQnaList)
    navigate(`/qna?detailId=${id}`);
  }

  const updateId = (id) => {
    navigate('/qna');
  }


  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='qnaDetailInner'>
        <div className='qnaTitleBox'>
          <h2 className='qnaTitle'>Q&A</h2>
        </div>
        <p className='qnaSubTitle'>{data.title}</p>
        <ul className='qnaDetailInfo'>
          <li>작성자: {data.author}</li>
          <li>조회수: {data.hit}</li>
          <li>{data.createdAt}</li>
        </ul>
        <div className='qnaContent'>
          <p className='content' dangerouslySetInnerHTML={{ __html: data.content }}>
          </p>
        </div>
        <div className="qnaContentBtnArea">
          <button className='qnaContentUpdateBtn'>수정하기</button>
          <button className='qnaContentDeleteBtn' 
            onClick={() =>  onDelete(id) }
          >삭제하기</button>
        </div>
        {
          hasComments && (<>
            <div className='answerInfo'>
              <p className='answerInfoText'>답변</p>
              <p className='answerDate'>{data.comments[0].createdAt}</p>
            </div>
            <div className='answerContent'>
              <div className='content' dangerouslySetInnerHTML={{ __html: data.comments[0].content }}></div>
            </div>
          </>)
        }
        <button type="button" className='qnaListBtn' onClick={()=> {updateId(id)}}>목록</button>

      </div>
    </div>
  );
};

export default QnaDetail;