import './App.css';
import DigitalComponentSection from './Components/DigitalComponentSection';
import ExpandCard from './Components/ExpandCard';
import FivePart from './Components/FivePart';
import Footer from './Components/Footer';
import MainSection from './Components/MainSection';
import NavbarSection from './Components/NavbarSection';
import PaymentSection from './Components/PaymentSection';

function App() {
  return (
    <div className="App">
      <NavbarSection/>
      <MainSection/>
      <DigitalComponentSection/>
      <ExpandCard/>
      <PaymentSection/>
      <FivePart/>
      <Footer/>

    </div>
  );
}

export default App;
