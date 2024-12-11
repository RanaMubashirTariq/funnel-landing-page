import './App.css';
import DigitalComponentSection from './Components/DigitalComponentSection';
import MainSection from './Components/MainSection';
import NavbarSection from './Components/NavbarSection';

function App() {
  return (
    <div className="App">
      <NavbarSection/>
      <MainSection/>
      <DigitalComponentSection/>
    </div>
  );
}

export default App;
