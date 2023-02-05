import './App.css';
import Button from './components/button';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      {/*@ts-ignore */}

      <Button disabled>
        Hello world!
      </Button>
    </div>
  );
};

export default App;
