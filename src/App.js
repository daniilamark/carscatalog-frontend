import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "./cars/AddCar";
import EditCar from "./cars/EditCar";
import ViewCar from "./cars/ViewCar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addcar" element={<AddCar />} />
          <Route exact path="/editcar/:id" element={<EditCar />} />
          <Route exact path="/viewcar/:id" element={<ViewCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
