import './App.css';
import Button from './components/button';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      {/*@ts-ignore */}
      <Input
        placeholder='Enter your name'
      />
    </div>
  );
};

export default App;
