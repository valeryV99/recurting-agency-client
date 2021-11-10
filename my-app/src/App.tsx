import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import Auth from './pages/auth'
import { logout, WhoAmI, whoAmI } from './services/authService'
import Customers from './pages/customerList'
import Customer from './pages/customer/customer'
import NewPosition from './pages/position/newPosition'

export default function App() {
  const [user, setUser] = useState<WhoAmI | null>({
    id: 'asdawd',
    email: 'ver.valery99@gmail.com',
  })

  useEffect(() => {
    // const login = async () => {
    //   const userResult = await whoAmI()
    //   setUser(userResult)
    // }
    // login()
  }, [])

  return (
    <Router>
      <div>
        <nav>
          <ul className="tabs">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            {/*<li><Link to="/auth">Auth</Link></li>*/}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auth">
            <Auth user={user} />
          </Route>
          {user ? (
            <>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact strict path="/customers/:id/positions/new">
                <NewPosition />
              </Route>
              <Route exact strict path="/customers/:id">
                <Customer />
              </Route>
              <Route exact strict path="/customers">
                <Customers />
              </Route>
            </>
          ) : (
            <Redirect
              to={{
                pathname: '/auth',
              }}
            />
          )}
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <button
        onClick={() => {
          logout()
        }}
      >
        logout
      </button>
    </div>
  )
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
