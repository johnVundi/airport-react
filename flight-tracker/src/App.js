import { Route, Routes } from "react-router-dom";
import './App.css';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
