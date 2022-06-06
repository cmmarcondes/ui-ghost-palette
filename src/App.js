import React from "react";
import AuthenticationContextProvider from "./context/AuthenticationContext";
import Routes from "./routes";

function App() {
  return (
    <AuthenticationContextProvider>
      <Routes />
    </AuthenticationContextProvider>
  );
}

export default App;
