import React, { useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  return (
    <div>
      <p>{time.toLocaleString()}</p>
    </div>
  );
};
