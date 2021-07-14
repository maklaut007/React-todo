import React from 'react';
import styled from 'styled-components';
import './App.css';
import Todo from './Components/Todo';

const AppWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

function App() {
  return (
    <AppWrap>
      <Todo />
    </AppWrap>
  );
}

export default App;
