import { useState, useCallback, useMemo } from "react";
import { FcApproval } from "react-icons/fc"; 

const FruitPurchase = () => {
  // state
  const [fruitList, setFruitList] = useState([
    { no: 1, fruitName: "사과", price: 1000, quantity: 2 },
    { no: 2, fruitName: "바나나", price: 2000, quantity: 1 },
    { no: 3, fruitName: "딸기", price: 3000, quantity: 3 },
  ]);

  const [input, setInput] = useState({
    fruitName: "",
    price: "",
    quantity: "",
  });

  // 입력값을 변경하는 함수
  const changeInput = useCallback(
    (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    },
    [input]
  );

  // 데이터를 추가하는 함수
  const addFruit = useCallback(() => {
    const no = fruitList.length === 0 ? 1 : fruitList[fruitList.length - 1].no + 1;

    setFruitList([
      ...fruitList,
      {
        ...input,
        no: no,
        price: parseInt(input.price, 10),
        quantity: parseInt(input.quantity, 10),
      },
    ]);

    // input 초기화
    setInput({
      fruitName: "",
      price: "",
      quantity: "",
    });
  }, [input, fruitList]);

  // 과일 삭제하는 함수
  const deleteFruit = useCallback((no) => {//필터를 통해서 no 가 다른 함수만을 걸러내어 배열한다 즉 번호가 맞는다면 제거되는것
    setFruitList((prevFruitList) => prevFruitList.filter((fruit) => fruit.no !== no));
  }, []);

  // 총 구매 금액 계산 (useMemo로 최적화)
  const totalPrice = useMemo(() => {//reduse 함수는 배열 순회 함수 반복문과 비슷한 맥락, 초기값은 0
    return fruitList.reduce((total, fruit) => total + (fruit.price * fruit.quantity), 0);
  }, [fruitList]);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>과일 이름</th>
                <th>가격 (원)</th>
                <th>갯수</th>
                <th>총 금액</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {fruitList.map((fruit) => (
                <tr key={fruit.no}>
                  <td>{fruit.no}</td>
                  <td>{fruit.fruitName}</td>
                  <td>{fruit.price} 원</td>
                  <td>{fruit.quantity}</td>
                  <td>{fruit.price * fruit.quantity} 원</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteFruit(fruit.no)}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="과일 이름 입력"
                    value={input.fruitName}
                    name="fruitName"
                    onChange={changeInput}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="가격 입력"
                    value={input.price}
                    name="price"
                    onChange={changeInput}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="갯수 입력"
                    value={input.quantity}
                    name="quantity"
                    onChange={changeInput}
                  />
                </td>
                <td>
                  <button className="btn btn-success" onClick={addFruit}>
                    추가
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <h4>총 구매 금액: {totalPrice} 원</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FruitPurchase;
