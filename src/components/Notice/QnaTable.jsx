import React from 'react';
import '../../styles/qna/qnaTable.scss';
import QnaTableList from './QnaTableList';

const QnaTable = ({qnaJsonList}) => {
  const reverseData = qnaJsonList.reverse();
  return (
    <>
      <table className='qnaTable'>
        <thead className='qnaThead'>
          <tr className='qnaThTr'>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
            <th>조회수</th>
            <th>답변</th>
          </tr>
        </thead>
        <tbody className='qnaTbody'>
          {reverseData.map((it) => {
            return (
              <QnaTableList key={`qnaList_${it.id}`} {...it} />
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default QnaTable;