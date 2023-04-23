import React, { useState, useEffect } from "react";

function Countdown(props) {
  const [count, setCount] = useState(6);
  const initialCount = 6;

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
            props.cart()
          return initialCount;
        } else {
          return prevCount - 1;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [initialCount]);

  return <div>{count}</div>;
}

export default Countdown;
