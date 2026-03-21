
import PropTypes from 'prop-types';
function List(props) {
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 45 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "cococnut", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 },
//   ];

    const category = props.category
    const itemList = props.items;

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order // lexicographic
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical order
  // fruits.sort((a,b) => a.calories - b.calories); // Numeric order
  // fruits.sort((a,b) => b.calories - a.calories); // Reverse Numeric order

//   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
//   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  )); 

  return (
  <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
  </>
  )
}
List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
List.defaultProps = {
  category: "Category",
  items: [],
}
export default List;
