import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1); // এখানে count হচ্ছে পুরনো snapshot
//     setCount(count + 1); // আবার একই snapshot
//   };

// Updating the function when i want to create a newState
const handleClick = () => {
  setCount(prev => prev + 1);
};


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}


export default Counter;