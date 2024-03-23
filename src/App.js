import Header from "./components/Header/Header";
import ProductList from "./components/ProductCard/ProductList";
import "./App.scss";
import {products, categories} from "./helper/data";


function App() {
  return (
    <div className="App">
      
      <Header categories={categories} text="ProductList" />
      <ProductList products={products} />
        
      
    </div>
  );
}

export default App;
