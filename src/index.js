import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Server } from "miragejs";

new Server({
  routes() {
    this.get(
      "http://localhost:3333/events",
      () => [{"id":1,"artist":"Container Enthusiasm","name":"Talk Docker to Me Tour","date":"2021-10-01T19:00:00","price":49.99,"imgUrl":"logos/Container-Enthusiasm-TalkDocker-To-Me.png"},{"id":2,"artist":"Digital Cowboys","name":"Binary Bovine Tour","date":"2021-11-01T19:30:00","price":59.99,"imgUrl":"logos/DigitalCowboys_BinaryBovine.png"}]
    );
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

