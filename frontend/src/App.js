import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextCraft" about="About Us" FAQ="FAQs"/>
      <div className='container my-3'>
        <TextForm heading="Enter your text to analyse"/>
        <About/>
      </div>
    </>
  );
}

export default App;
