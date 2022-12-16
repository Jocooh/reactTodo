import React from "react";

export default function Lists({ todoData, setTodoData }) {
  console.log(todoData);
  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      console.log(data);
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id); //넘겨받는 id가 data.id와 같지 않은 친구들만 남겨준다는거
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map(
        (
          data //data는 map을 통해서 배열안의 데이터를 가져온다.
        ) => (
          <div key={data.id}>
            <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
              <input
                type="checkbox"
                onChange={() => handleCompleChange(data.id)}
                defaultChecked={false}
              />
              <span>{data.title}</span>
              <div className="items-center">
                <button onClick={() => handleClick(data.id)}>❌</button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
