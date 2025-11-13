import { useState } from "react";

import "./App.css";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import Container from "./component/Container";
import InnerContainer from "./component/InnerContainer";
import FoodDetails from "./component/FoodDetails";

function App() {
  //creating  a global state
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("716300");
  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}></FoodList>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}></FoodDetails>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
