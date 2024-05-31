import { Routes, Route } from "react-router-dom";
import './App.css'
import LoginForm from "./Auth/LoginForm";
import Home from "./Home";

function App() {

  return (
    <div>
      <Routes>
      <Route
            path="/"
            element={<LoginForm />}
          />
          <Route
            path="/home"
            element={<Home/>}
          />
      </Routes>
    </div>
  )
}

export default App
