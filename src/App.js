import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
     <div>

     <NavBar/>
     <ItemListContainer greeting="Hola Mundo!"/>

     </div>
  )

}

export default App;
