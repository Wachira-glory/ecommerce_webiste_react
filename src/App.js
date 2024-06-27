import './App.css';
import Navbar from './About'; 
import {ProductList} from './Products/hooks/ProductList';


const App = ()=>{
  return(
    <div>
      <ProductList/>
      <Navbar/>
      
    </div>
  )
}
export default App;

