import React from "react";

export default function Form({ value, handleSubmit, setValue }) {
  const handleChange = (e) => {
    //state에 있는 value값을 setState를 사용해서 입력 값으로 바꿔주고 input이 새로운 value값을 가져갈 수 있도록한다 (value={this.state.value})
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex pt-2">
      <input
        type="text"
        name="value"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={handleChange}
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
      />
      <input
        type="submit"
        value="입력"
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
      />
    </form>
  );
}
