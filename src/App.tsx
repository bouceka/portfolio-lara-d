import './App.css';

import { Input } from './components/input/input.component';

function App() {
  return (
    <div className="App">
      <Input label="Test Label" hint="This is a hint" optionalText='optional' />
    </div>
  );
}

export default App;
