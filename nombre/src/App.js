import './App.css';
import  Header from './compomentes/Header'; 
import  Navbar from './compomentes/navbar';
import Card from './compomentes/Card';
import Footer from './compomentes/Footer';
function App() {
  return (
    <div className="App">
          <Navbar/>
          <Header/>
          <Card />
          <Footer/>
          
    </div>
    
  );
}

export default App;
