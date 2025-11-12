import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <>
      {foodData.map((elem) => (
        <FoodItem key={elem.id} foodItem={elem}></FoodItem>
      ))}
    </>
  );
}
