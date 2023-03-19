import './styles/App.scss';

import { MyForm } from './components/form/form.component';
import { Textarea } from './components/textarea/textarea.component';

function App() {
  return (
    <div className="App">
      <MyForm />
      <Textarea label="Input label" placeholder="Content" />
    </div>
  );
}

export default App;
