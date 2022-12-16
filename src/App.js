import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';

function App() {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();




  return (
    <div className="App">
      <header className="App-header">

        <button onClick={()=>dispatch(decNumber())}>Decrease</button>
        <input value={myState}/>
        <button onClick={()=>dispatch(incNumber())}>Increase</button>
        
      </header>
    </div>
  );
}

export default App;
