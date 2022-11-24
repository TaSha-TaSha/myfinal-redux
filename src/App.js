import './App.css';
import Box from './Header/Box';
import Header from './Header/Header';
import Navbar from './Header/Navbar';
import Middle from './Header/Middle';
import Filters from './Components/Filters/Filters';
import Items from './Components/Items/Items';
import Form from './Footer/Form';
import Map from './Footer/Map';
import Footer from './Footer/Footer';


function App() {
  return(<div className="App">
  <Header />
  <Navbar />
  <Middle />
  <Box />
  <Filters />
  <Items />
  <Form />
  <Map />
  <Footer />
  </div>)
}

export default App;
