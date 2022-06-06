import { Box, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        return oldProgress + 3.4;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "50%" }}>
      <LinearProgress variant="determinate" value={progress} />;
    </Box>
  );
};

export default ProgressBar;
