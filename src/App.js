import './App.css';
import Left from './components/left-section/Left';
import Navbar from './components/navbar/Navbar';
import Right from './components/right-section/Right';

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <div className='left_portion'>         <Left />
        </div>
        <div className='right_portion'>
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
