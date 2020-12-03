import { useState } from 'react';
import styled from 'styled-components';

const randomListData = [
  {
    name: 'Emma',
    age: '24',
    color: 'red',
  },
  {
    name: 'Jack',
    age: '34',
    color: 'aqua',
  },
  {
    name: 'Steve',
    age: '67',
    color: 'blue',
  },
  {
    name: 'Rachel',
    age: '8',
    color: 'coral',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 600px;
  padding: 20px;
  background: azure;
`;

const renderItems = (list) => {
  return list.map(({ name, age }, index) => (
    <div key={index}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  ));
};

const App = () => {
  const [list, setList] = useState([]);

  return (
    <Wrapper data-debug="App">
      <h1>Hi this is my webpack testing project!</h1>
      <button
        onClick={() => setList(list.length > 0 ? [] : randomListData)}
        data-testid="button"
      >
        {list.length > 0 ? 'Hide List' : 'Show List'}
      </button>
      {list.length > 0 && <div data-testid="list">{renderItems(list)}</div>}
    </Wrapper>
  );
};

export default App;
