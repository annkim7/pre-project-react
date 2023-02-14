import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const plusNum = () => {
    dispatch(increase());
  };
  const minusNum = () => {
    dispatch(decrease());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <h3>{`${state}`}</h3>
          <div>
            <button onClick={plusNum}>+</button>
            <button onClick={minusNum}>-</button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
