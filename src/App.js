import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Lists from "./Components/Lists";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  // 할 일 리스트 css

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value, //handleChange로 인해 사용자가 적은 입력값이 들어가있음
      completed: false,
    };
    //원래있던 목록에 새로운 목록 추가해주기
    setTodoData((prev) => [...prev, newTodo]); //전개연산자로 안에 목록을 열어주고 새로운 목록을 넣는다고 생각하면 될듯 ,prev는 전 todoData의 값이다.
    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className=" w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <div>할 일 목록</div>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form setValue={setValue} handleSubmit={handleSubmit} value={value} />
      </div>
    </div>
  );
}
