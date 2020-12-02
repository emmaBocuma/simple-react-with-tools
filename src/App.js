import React from 'react';

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

const renderItems = () => {
  return randomListData.map(({ name, age }, index) => (
    <div key={index}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  ));
};

const App = () => {
  return (
    <>
      <h1>Hi this is my webpack testing project!</h1>
      {renderItems()}
    </>
  );
};

export default App;
