import { Provider } from "react-redux";
import { store } from "../store";
import React from "react";

function App() {
  return <Provider store={store}></Provider>;
}

export default App;
