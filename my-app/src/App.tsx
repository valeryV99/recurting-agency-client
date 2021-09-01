import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from "./pages/auth";
import {logout, WhoAmI, whoAmI} from "./services/authService";

export default function App() {
  const [user, setUser] = useState<WhoAmI | null>(null);
  useEffect(() => {
    const login = async () => {
      const userResult = await whoAmI();
      setUser(userResult)
    };
    login();
  },[])
  console.log(user, 'user');
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li><Link to="/auth">Auth</Link></li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <div>
    <h2>Home</h2>
    <button onClick={logout}>
logout
    </button>
  </div>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
