import './styles/App.scss';
import FashiomImg from './assets/images/CB-LaraDrummond-Moodboard-25.jpg'

import { MyForm } from './components/form/form.component';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={FashiomImg}  alt='img'/>
        <div className='serviceLabel'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
