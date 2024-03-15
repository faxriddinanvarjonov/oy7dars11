import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let dispatch = useDispatch();
  let input = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    input.current.value && dispatch({ type: "ADD", todo: input.current.value });
  }

  function handleDelete(e) {
    dispatch({ type: "REMOVE", todo: e });
  }

  let customers = useSelector((state) => state.todos);
  console.log(customers.todos);

  return (
    <div className="flex flex-col w-[600px] bg-slate-200 rounded-lg container mx-auto p-[30px] gap-4">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-center font-bold">TO DO List</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            ref={input}
            type="text"
            placeholder="Enter a text"
            className="bg-inherit input w-full border border-gray-500 rounded"
          />
          <button className="btn">Add Task</button>
        </form>
      </div>
      <div className="flex flex-col gap-2">
        {customers.todos.length > 0 &&
          customers.todos.map((el, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center bg-slate-300 p-2 rounded-xl"
              >
                <h2 className="text-2xl font-bold">{el}</h2>
                <button
                  onClick={() => {
                    handleDelete(input.current.value);
                    console.log(index);
                  }}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
