import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default Loading;
