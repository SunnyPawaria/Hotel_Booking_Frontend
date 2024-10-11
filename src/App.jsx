// import AddRoom from "./components/room/AddRoom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExistingRooms from "./components/room/ExistingRooms";
// import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import EditRoom from "./components/room/EditRoom";

function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
