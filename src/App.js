import {OperationRoulette, ActionsRoulette, EmotionsRoulette} from './Roulette'
import './App.css';

function App() {
  return (
    <div className="App">

      <div class="wrapper">
        <div class="element"><OperationRoulette></OperationRoulette></div>
        <div class="element"><ActionsRoulette></ActionsRoulette></div>
        <div class="element"><EmotionsRoulette></EmotionsRoulette></div>
      </div>
    </div>
  );
}

export default App;
