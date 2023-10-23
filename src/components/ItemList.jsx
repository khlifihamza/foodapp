import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item, id) => (
          <Item key={id} item={item} />
        ))
      )}
    </div>
  );
}
