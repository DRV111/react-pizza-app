import '../index.css';

const hours = new Date().getHours();
const openHours = 10;
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

      {isOpen && (
        <div className="order">
          <p>We are open untill {closeHours}:00. Come, and enjoy our pizza!</p>
          <button className="btn">Order Now</button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
