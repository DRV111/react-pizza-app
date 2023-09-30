const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const openHours = 10;
const closeHours = 22;

function Footer() {
  return (
    <footer>
      Right now is{' '}
      <strong>
        {hours}:{minutes}
      </strong>{' '}
      and we are{' '}
      {hours >= openHours && hours < closeHours
        ? 'open! Come, and enjoy our pizza!'
        : 'closed. We are waiting for you tomorrow!'}
    </footer>
  );
}

export default Footer;
