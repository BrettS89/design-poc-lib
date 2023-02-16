import './App.css';
import Button from './components/button';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      {/*@ts-ignore */}

      <Input
        placeholder='Email'
      />

      {/* <Button styles={{ base: { fontWeight: 'bold' } }}>
        Hello
      </Button> */}

    </div>
  );
};

export default App;
