import '../index.css';
import PropTypes from 'prop-types';

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
      {/* <p className="soldOut">
        {props.pizzaObj.soldOut ? 'SOLD OUT' : 'AVAILABLE'}
      </p> */}
    </li>
  );
}
Pizza.propTypes = {
  pizzaObj: PropTypes.object.isRequired,
};

export default Pizza;
