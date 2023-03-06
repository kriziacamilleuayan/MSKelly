import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/home/banner";
import MissionVision from "./components/home/missionVision";
import Contact from "./components/home/contact";
import Companies from "./components/home/companies";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MissionVision />
      <Contact />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
