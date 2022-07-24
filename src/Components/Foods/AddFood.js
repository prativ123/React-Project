const AddFood = (props) => {
  const addFoodHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addFoodHandler}>
      <label htmlFor="food">Food</label>
      <input id="food" type="text" />
      <label htmlFor="price">Price (Rupee)</label>
      <input id="price" type="number" />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddFood;
