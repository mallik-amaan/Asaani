import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  // State for progress percentage
  const [progress, setProgress] = useState(20);

  // Simulate progress update every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Increase progress by 10% every second until it reaches 100%
//       if (progress < 100) {
//         setProgress(progress + 10);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [progress]);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
