import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PortfliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";
// import { init } from "emailjs-com";
// import emailjs from "emailjs-com";

// init("user_NITjmkLgyLOvo8wvCW52i");


// window.onload = emailjs.send("service_75vufgv", "template_d6e17ne", {
//   from_name: "App",
//   message: `Someone Visited @${(new Date()).toString()}`,
//   subject: "Someone Visited",
//   email: "singhsaurav1999@gmail.com",
//   to_name: "Saurav",
//   reply_to: "singhsaurav1999@gmail.com",
// });

function App() {
  const [navToggle, setNavToggle] = useState(false);

  window.addEventListener('click', function(e){   
    if (document.getElementById('sidebar').contains(e.target) || document.getElementById('nav-btn').contains(e.target)){
      // Clicked in box
    } else{
      setNavToggle(false);
    }
  });
  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div id="sidebar" className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar setNavToggle={setNavToggle} />
      </div>
      <div id = "nav-btn" className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/projects" exact>
              <PortfliosPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
