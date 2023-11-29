import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import './Mobile.css'
import { Top } from './topwear/Top';
import { Bottom } from './Bottomwear/Bottom';
import { More } from './more/More';
import { More1 } from './more/More1';
import {Shopcontextprovider} from './Shop/Shopcontext';
import { Cart } from './cart/Cart';
import { Foot } from './Footwear/Foot';

function App() {
  return (
    <div className="App">
   <Shopcontextprovider>      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='/top' element={<Top/>}/>
      <Route path='/bottom' element={<Bottom/>}/>
      <Route path='/foot' element={<Foot/>}/>
      <Route path='/mor' element={<More/>}/>
      <Route path='/mir' element={<More1/>}/>
      <Route path='/car' element={<Cart/>}/>
    
      </Routes>
      </BrowserRouter>
      </Shopcontextprovider>

  
    </div>
  );
}

export default App;
