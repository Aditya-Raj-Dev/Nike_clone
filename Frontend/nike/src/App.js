import logo from './logo.svg';
import './App.css';
import { Container, Spinner } from "@chakra-ui/react";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Allroutes from './Routes/Allroutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Allroutes/>
     <Footer/>
    </div>
  );
}

export default App;
