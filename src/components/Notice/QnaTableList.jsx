import React from 'react';
import { useNavigate } from 'react-router-dom';

const QnaTableList = ({id, title, author, createdAt, hit, comments}) => {
  const navigate = useNavigate();

  const hasComments = comments?.length;

  const commentClass = hasComments ? 'button active' : 'button';
  const commentBtnLabel = hasComments ? '답변완료' : '답변예정';

  return (
    <>
      <tr className="qnaTbTr" onClick={()=> navigate(`/qna/${id}`)}>
        <td className="qnaTbodyId">{id}</td>
        <td colspan="2" className='qnaTbodyTitle'>{title}</td>
        <td className="qnaTbodyWriter">{author}</td>
        <td className="qnaTbodyDate">{createdAt}</td>
        <td className="qnaTbodyHit">{hit}</td>
        <td className='isAnswerBtn'><button className={commentClass}>{commentBtnLabel}</button></td>
      </tr>
    </>
  );
};

export default QnaTableList;