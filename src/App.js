import { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LinkItem from "./components/LinkItem";
import { AuthContext } from "./contexts/AuthProvider";

const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Home = lazy(() => import("./components/Home"));

function App() {
  const [user, setUser] = useContext(AuthContext);

  return (
    <AuthContext.Provider value={{ user }}>
      <div className="App">
        <Router>
          <Link to="/about">
            <LinkItem name={"About"} />
          </Link>
          <Link to="/home">
            <LinkItem name={"Home"} />
          </Link>
          <Link to="/contact-us">
            <LinkItem name={"Contact"} />
          </Link>
          <button
            onClick={() => {
              const userLocal = window.localStorage.getItem("user");
              setUser({ user: userLocal });
              console.log(user);
            }}
          >
            login
          </button>
          <Suspense fallback={<h1>...cargando</h1>}>
            <Routes>
              <Route path={"/"}>
                <Route path={"/contact-us"} element={<ContactUs />}>
                  <Route path={":method"} element={<ContactUs />} />
                </Route>
                <Route path={"/about"}>
                  <Route
                    path={"programs"}
                    element={user.user ? <About programs /> : <Home />}
                  />
                  <Route path={"aliances"} element={<About aliances />} />
                  <Route index element={<About />} />
                </Route>
                <Route path={"/home"} element={<Home />} />
                <Route index element={<h1>esta es la ruta padre</h1>} />
                <Route
                  path={"/*"}
                  element={<h1>Error 404 page not found</h1>}
                />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
