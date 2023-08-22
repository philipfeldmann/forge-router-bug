import React from "react";
import { router } from "@forge/bridge";

function App() {
  const onClickOpen = () => {
    router.open("mailto:philip@appanvil.net");
  };
  const onClickNavigate = () => {
    router.navigate("mailto:philip@appanvil.net");
  };
  return (
    <div>
      <button onClick={onClickOpen}>Router Open</button>
      <button onClick={onClickNavigate}>Router Navigate</button>
    </div>
  );
}

export default App;
