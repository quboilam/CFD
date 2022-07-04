import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Courses from "./pages/courses";
import Register from "./pages/register";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/project";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route index element={<Register />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
