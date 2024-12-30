import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Hubnexform from "./pages/form/Hubnexform";
import ErrorSection7 from "./pages/Errorpage/ErrorPage";
function App() {
  const [formVisible, setFormVisible] = useState(false);
  return (
    <>
      {formVisible && (
        <Hubnexform formVisible={formVisible} setFormVisible={setFormVisible} />
      )}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Header
                formVisible={formVisible}
                setFormVisible={setFormVisible}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  formVisible={formVisible}
                  setFormVisible={setFormVisible}
                />
              }
            />
            <Route path="/error" element={<ErrorSection7 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
