import React from 'react';
import styled from 'styled-components';
import CardList from './components/CardList';
import useApp from './hooks/useApp';

const Div = styled.div`
  display:flex;
  margin-top: 10px;
  justify-content:space-around;
  `

function App() {
  const { changeCanvanboard, canvanboard } = useApp()

  return (
    <Div>
      <CardList title={"todo"} statusList={canvanboard.todo} canvanboard={canvanboard} changeCanvanboard={changeCanvanboard} />
      <CardList title={"doing"} statusList={canvanboard.doing} canvanboard={canvanboard} changeCanvanboard={changeCanvanboard} />
      <CardList title={"done"} statusList={canvanboard.done} canvanboard={canvanboard} changeCanvanboard={changeCanvanboard} />
    </Div>
  );
}

export default App;
