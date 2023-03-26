import Btn from './components/Btn'
import BtnTwo from './components/BtnTwo'
import BtnThree from './components/BtnThree'
import BtnFour from './components/BtnFour'
import './App.css';

function App() {
  return (
    <div className="firstButton">
      <Btn />
      <div>
      <BtnTwo />
      <div>
        <BtnThree />
        <div>
          <BtnFour />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
