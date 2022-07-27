import React from 'react';
import '../../styles/qna/qnaTable.scss';
import QnaTableList from './QnaTableList';

const QnaTable = ({qnaJsonList}) => {
  console.log(qnaJsonList)
  return (
    <>
      <table className='qnaTable'>
        <thead className='qnaThead'>
          <tr className='qnaThTr'>
            <th>번호</th>
            <th colSpan="2">제목</th>
            <th>작성자</th>
            <th>등록일</th>
            <th>조회수</th>
            <th>답변</th>
          </tr>
        </thead>
        <tbody className='qnaTbody'>
          {qnaJsonList.map((data) => {
            return (
              <QnaTableList key={data.id}  {...data} />
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default QnaTable;