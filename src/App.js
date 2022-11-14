// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const API = process.env.REACT_APP_API;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={9}
                apiKey={API}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={9}
                apiKey={API}
                country={"in"}
                category={"entertainment"}
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={9}
                apiKey={API}
                country={"in"}
                category={"sports"}
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={9}
                apiKey={API}
                country={"in"}
                category={"business"}
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={9}
                apiKey={API}
                country={"in"}
                category={"health"}
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={9}
                apiKey={API}
                country={"in"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </Router>
      <LoadingBar color="#2192FF" progress={progress} />
      <Footer />
    </>
  );
}

export default App;
