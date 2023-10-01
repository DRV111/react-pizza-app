import '../index.css';

const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const openHours = 10;
const closeHours = 22;
const isOpen = hours >= openHours && hours <= closeHours;

function Footer() {
  return (
    <footer className="footer">
      Right now is{' '}
      <strong>
        {hours}:{minutes}
      </strong>{' '}
      and we are{' '}
      {isOpen
        ? 'open! Come, and enjoy our pizza!'
        : 'closed. We are waiting for you tomorrow!'}
    </footer>
  );
}

export default Footer;
