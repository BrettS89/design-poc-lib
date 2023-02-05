import './App.css';
import Button from './components/button';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      {/*@ts-ignore */}

      <Input
        placeholder='Hello world!'
        error='this is an error'
      />

    </div>
  );
};

export default App;
