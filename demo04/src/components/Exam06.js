import { useState, useMemo, useCallback } from "react";

const Exam06 = () => {
  // state
  const [dataList, setDataList] = useState([
    { no: 1, name: "한국", capital: "서울" },
    { no: 2, name: "일본", capital: "도쿄" },
    { no: 3, name: "스웨덴", capital: "스톡홀름" },
  ]);

  const [input, setInput] = useState({
    name: "",
    capital: "",
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
  const addData = useCallback(() => {
    const no = dataList.length === 0 ? 1 : dataList[dataList.length - 1].no + 1;

    setDataList([
      ...dataList,
      {
        ...input,
        no: no,
      },
    ]);

    // input 초기화
    setInput({
      name: "",
      capital: "",
    });
  }, [input, dataList]);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>나라</th>
                <th>수도</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((data, index) => (
                <tr key={data.no}>
                  <td>{data.no}</td>
                  <td>{data.name}</td>
                  <td>{data.capital}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="나라명 입력"
                    value={input.name}
                    name="name"
                    onChange={changeInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="수도명 입력"
                    value={input.capital}
                    name="capital"
                    onChange={changeInput}
                  />
                </td>
                <td>
                  <button className="btn btn-success" onClick={addData}>
                    추가
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Exam06;
