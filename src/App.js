// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextFrom';

function App() {
  return (
    <>
      <Navbar title="React App" />
      {/* <Navbar /> */}
      <div className='container mp-3'>
        <TextForm heading="Enter Text" />
      </div>
    </>
  );
}

export default App;
