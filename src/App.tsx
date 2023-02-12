import './App.css';
import Button from './components/button';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      {/*@ts-ignore */}

      <Button styles={{ base: { paddingTop: undefined } }}>
        Hello
      </Button>

    </div>
  );
};

export default App;
