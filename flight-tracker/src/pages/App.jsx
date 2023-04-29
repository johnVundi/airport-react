import {  Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Homepage from "./Homepage";
function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;

