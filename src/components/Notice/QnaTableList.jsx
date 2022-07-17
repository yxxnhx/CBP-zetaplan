import React from 'react';
import { useNavigate } from 'react-router-dom';

const QnaTableList = ({id, title, writerName, createdAt, hit, comments}) => {
  const navigate = useNavigate();

  const hasComments = comments.length;

  const commentClass = hasComments ? 'button active' : 'button';
  const commentBtnLabel = hasComments ? '답변완료' : '답변예정';

  return (
    <>
      <tr className="qnaTbTr" onClick={()=> navigate(`/qna/${id}`)}>
        <td>{id}</td>
        <td className='qnaTbodyTitle'>{title}</td>
        <td>{writerName}</td>
        <td>{createdAt}</td>
        <td>{hit}</td>
        <td className='isAnswerBtn'><button className={commentClass}>{commentBtnLabel}</button></td>
      </tr>
    </>
  );
};

export default QnaTableList;