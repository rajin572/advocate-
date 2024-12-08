import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 10); // Speed of increment
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCurrentValue(value); // Ensure the exact value is reached
      } else {
        setCurrentValue(Math.round(start)); // Round to avoid decimals
      }
    }, 10); // Delay in ms, adjust for smoothness

    return () => clearInterval(timer); // Cleanup the interval
  }, [value, duration]);

  return <span>{currentValue}</span>;
};

export default AnimatedNumber;
