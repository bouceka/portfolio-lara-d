import './styles/App.scss';

import { useState } from 'react';

import { Checkbox } from './components/checkbox/checkbox.component';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="App">
      <Checkbox
        label="Checkbox"
        value="default"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default App;
