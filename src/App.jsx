
import Navbar from "./Components/Navbar/Navbar";

import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="basis-3/5 h-max">
        <ProductDisplay />
      </div>
    </div>
  );
}

export default App;
