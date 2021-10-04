import SideBar from "./components/SideBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main flex">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
