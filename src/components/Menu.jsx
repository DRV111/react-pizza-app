import Pizza from './Pizza';
import '../index.css';
import data from '../data/data.js';
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu!</h2>
      <ul className="pizzas">
        {data.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
