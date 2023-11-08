import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './pages/Products';
import CreateProduct from './pages/Products/create-product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Product />} />
          <Route path="/new-product" exact element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
