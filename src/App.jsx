import './App.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
// import pizzaData from './data/data';
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
