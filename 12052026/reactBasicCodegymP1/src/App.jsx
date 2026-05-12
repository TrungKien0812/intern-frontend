import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
function App() {
  const cities = React.createElement(
    "ul",
    { style: { color: "tomato", listStyleType: "none", fontWeight: "bold" } },
    React.createElement("li", { style: { color: "tomato" } }, "Ha Noi"),
    React.createElement("li", null, "Da Nang"),
    React.createElement("li", null, "TPHCM"),
    React.createElement("li", null, "Hai Phong"),
    React.createElement("li", null, "Can Tho"),
  );

  return (
    <>
      <h1 style={{ color: "red" }}>List of cities:</h1>
      {cities}
    </>
  );
}

export default App;
