import './App.css';
import { Myform } from './component/form.js';
import { Mynavbar } from './component/navbar.js';
import { MyAlert } from './component/alert.js';

function App() {
  return (
    <div>
      <Mynavbar />
      <Myform />
    </div>
  );
}

export default App;
