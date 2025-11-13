import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <>
      {foodData.map((elem) => (
        <FoodItem
          key={elem.id}
          foodItem={elem}
          setFoodId={setFoodId}
        ></FoodItem>
      ))}
    </>
  );
}
