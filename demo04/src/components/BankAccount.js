import { useState, useCallback, useMemo } from "react";
import { FaTrash } from "react-icons/fa"; // FaTrash 아이콘 임포트


const AccountManagement = () => {
  // state
  const [transactionList, setTransactionList] = useState([
    { no: 1, type: "입금", amount: 5000, memo: "첫 입금" },
    { no: 2, type: "출금", amount: 2000, memo: "커피 구매" },
  ]);

  const [input, setInput] = useState({
    type: "입금",
    amount: "",
    memo: "",
  });

  // 입력값 변경 함수
  const changeInput = useCallback(
    (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    },
    [input]
  );

  // 데이터 추가 함수
  const addTransaction = useCallback(() => {
    const no = transactionList.length === 0 ? 1 : transactionList[transactionList.length - 1].no + 1;

    setTransactionList([
      ...transactionList,
      {
        ...input,
        no: no,
        amount: parseInt(input.amount, 10),
      },
    ]);

    // input 초기화
    setInput({
      type: "입금",
      amount: "",
      memo: "",
    });
  }, [input, transactionList]);

  // 기록 삭제 함수
  const deleteTransaction = useCallback((no) => {
    setTransactionList((prevTransactionList) => prevTransactionList.filter((transaction) => transaction.no !== no));
  }, []);

  // 총 잔액 계산 (useMemo로 최적화) //입금 출금 키워드로 함수를 훨씬 간단하게 작성! 캬
  const totalBalance = useMemo(() => {
    return transactionList.reduce((total, transaction) => {
      return transaction.type === "입금" ? total + transaction.amount : total - transaction.amount;
    }, 0);
  }, [transactionList]);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>구분</th>
                <th>금액 (원)</th>
                <th>메모</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {transactionList.map((transaction) => (
                <tr key={transaction.no}>
                  <td>{transaction.no}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount} 원</td>
                  <td>{transaction.memo}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteTransaction(transaction.no)}>
                      <FaTrash/>      삭제
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <select className="form-control" value={input.type} name="type" onChange={changeInput}>
                    <option value="입금">입금</option>
                    <option value="출금">출금</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="금액 입력"
                    value={input.amount}
                    name="amount"
                    onChange={changeInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="메모 입력"
                    value={input.memo}
                    name="memo"
                    onChange={changeInput}
                  />
                </td>
                <td>
                  <button className="btn btn-success" onClick={addTransaction}>
                    추가
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <h4>총 잔액: {totalBalance} 원</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManagement;
