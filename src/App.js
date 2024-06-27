import './App.css';
import Navbar from './About'; 
import {ProductList} from './Products/hooks/ProductList';
import TopCategories from './Products/hooks/TopCategories';



const App = ()=>{
  return(
    <div>
       <Navbar/>
      <ProductList/>
      <TopCategories/>
    
      
    </div>
  );
};
export default App;

