import React, { useState } from "react";

const Counter = () => {
  // here 0 is the initial state
  // count is the state variable
  // setCount is similar to setState({count: ...})
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>You Clicked {count} times</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Counter;
