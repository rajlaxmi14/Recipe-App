import styles from "./FoodItem.module.css";
export default function FoodItem({ foodItem, setFoodId }) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={foodItem.image}></img>
      <h1 className={styles.item}>{foodItem.title}</h1>
      <button
        className={styles.btn}
        onClick={() => {
          console.log(foodItem.id);
          setFoodId(foodItem.id);
        }}
      >
        View Recipe
      </button>
    </div>
  );
}
