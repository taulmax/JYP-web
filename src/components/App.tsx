import { Provider } from "react-redux";
import { store } from "../store";
import React from "react";
import GlobalStyles from "../assets/styles/global-style";
function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}></Provider>
    </>
  );
}

export default App;
