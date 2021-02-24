import { Provider } from "react-redux";
import { store } from "../store";
import React from "react";
import RepositoriesList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
