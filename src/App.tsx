import React from "react";
import ReactDOM from "react-dom";
// import { store } from './CommonServices/store';
import { Provider } from 'react-redux';
import MContent from "./components/MContent";
import "./index.css";

const App = () => (
    <div className="container">
      <MContent />
    </div>
  
);
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
ReactDOM.render(<App />, document.getElementById("app"));
