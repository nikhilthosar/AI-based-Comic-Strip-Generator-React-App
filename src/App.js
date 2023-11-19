import logo from './logo.svg';
import './App.css';
import { Myform } from './component/form.js';
import { Mynavbar } from './component/navbar.js';
import { Mygallery } from './component/gallery.js';
import {Mytitle} from './component/title.js';
 

function App() {
  return (
    <div className = 'homepage'>
    <Mynavbar />
    <Myform />
  </div>
  );
}

export default App;
