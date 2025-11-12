import { useState } from "react";

import "./App.css";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";

function App() {
  //creating  a global state
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <FoodList foodData={foodData}></FoodList>
      {/* {foodData.map((elem) => (
        <h1>{elem.title}</h1>
      ))} */}
    </div>
  );
}

export default App;
