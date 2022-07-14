import React from 'react';

const QnaTableList = ({id, title, writerName, createdAt, hit}) => {
  // const [qnadata, setQnaData] = useState([]);

  return (
    <>
      <tr className="qnaTbTr">
        <td>{id}</td>
        <td className='qnaTbodyTitle'>{title}</td>
        <td>{writerName}</td>
        <td>{createdAt}</td>
        <td>{hit}</td>
        <td className='isAnswerBtn'><button>답변완료</button></td>
      </tr>
    </>
  );
};

export default QnaTableList;