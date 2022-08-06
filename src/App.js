// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextFrom';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar title="React App" />

      {/* <Navbar /> */}
      
      <div className='container mp-3'>
        <TextForm heading="Enter Text" />
      </div>

      <div className='container mp-3'>
        <About/>
      </div>
    </>
  );
}

export default App;
