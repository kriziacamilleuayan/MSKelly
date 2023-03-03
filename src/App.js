import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
