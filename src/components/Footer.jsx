import '../index.css';

const hours = new Date().getHours();
const openHours = 8;
const closeHours = 22;
const isOpen = hours >= openHours && hours <= closeHours;

function Footer() {
  return (
    <footer className="footer">
      {/* Right now is{' '}
      <strong>
        {hours}:{minutes}
      </strong>{' '}
      and we are{' '}
      {isOpen
        ? 'Open! Come, and enjoy our pizza!'
        : 'closed. We are waiting for you tomorrow!'} */}

      {isOpen ? (
        <div className="order">
          <p>
            We are open untill {closeHours}:00. Come, visit us and enjoy our
            pizza!
          </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>
          We are closed. We are waiting for you tomorrow! from {openHours}:00
          until {closeHours}:00!
        </p>
      )}
    </footer>
  );
}

export default Footer;
