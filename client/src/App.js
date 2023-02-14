import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions';
import styled from 'styled-components';

const Title = styled.h3`
  color: #61dafb;
`;

const ButtonBox = styled.div`
  display: flex;
`;
const Button = styled.button`
  display: flex;
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 0;
  border-radius: 100%;
  background: #61dafb;
`;

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
          <Title>{`${state}`}</Title>
          <ButtonBox>
            <Button onClick={plusNum}>+</Button>
            <Button onClick={minusNum}>-</Button>
          </ButtonBox>
        </section>
      </header>
    </div>
  );
}

export default App;
