import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter
        initial={5}
        max_limit={10}
      />
      <Counter />
    </div>
  );
}

export default App;
