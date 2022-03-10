import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const alertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#303941";
      alertMsg("Dark mode has been enabled", "success");
      document.title = "TextCaseConvertor - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertMsg("Light mode has been enabled", "success");
      document.title = "TextCaseConvertor";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm
                alertMsg={alertMsg}
                heading="ENTER YOUR TEXT"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
