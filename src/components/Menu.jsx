import Pizza from './Pizza';
import '../index.css';
import data from '../data/data.js';
function Menu() {
  const pizzaNumber = data.length;
  return (
    <main className="menu">
      <h2>Our Menu!</h2>

      {pizzaNumber > 0 ? (
        <>
          {' '}
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {data.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, No item found!</p>
      )}
    </main>
  );
}

export default Menu;
