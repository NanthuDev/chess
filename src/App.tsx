// import { useState } from 'react'

import "./App.css";
import ChessBoard from "./chess/index";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <h1>Haii</h1>
      <Provider store={store}>
        <ChessBoard></ChessBoard>
      </Provider>
    </>
  );
}

export default App;
