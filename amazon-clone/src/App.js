import CarouselEffect from "./Components/Carousel/CarouselEffect";
import "./App.css";
// import Header from "./Components/Header/Header";
// import Category from "./Components/Category/Category";
import Routing from "../src/Router";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div className="App">
      <Routing />
      <Product />
    </div>
  );
}

export default App;
