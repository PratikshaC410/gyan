import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Navbar from "./pages/components/navbar";
import Contact from "./pages/contact us";
import Dashboard from "./pages/dashboard";
import Logout from "./pages/logout";
import Posts from "./pages/posts";
import Myposts from "./pages/myposts";
import EditPost from "./pages/edit-posts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/myposts" element={<Myposts />} />
          <Route path="/posts/:postId" element={<Posts />} />
          <Route path="/edit-posts/:postId" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
