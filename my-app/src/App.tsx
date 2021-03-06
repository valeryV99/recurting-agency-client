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
import CustomerNew from './pages/customerNew'
import Candidates from './pages/candidates'
import CandidateForm from './pages/candidateForm'
import EditPosition from './pages/position/editPosition'
import Interviews from './pages/interviews'
import NewInterview from './pages/interview/newInterview'
import NewEmployee from './pages/employee/newEmployee/newEmployee'

export default function App() {
  const [user, setUser] = useState<WhoAmI | null>({
    id: '',
    email: '',
    admin: false,
  })

  useEffect(() => {
    const login = async () => {
      try {
        const userResult = await whoAmI()
        setUser(userResult)
      } catch (e) {
        setUser(null)
      }
    }
    login()
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
              <Link to="/interviews">Interviews</Link>
            </li>
            <li>
              <Link to="/candidates">Candidates</Link>
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
              <Route path="/interviews">
                <Interviews />
              </Route>
              <Route path="/interview/new">
                <NewInterview />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact strict sensitive path="/candidates/new">
                <CandidateForm />
              </Route>
              <Route exact strict sensitive path="/candidates">
                <Candidates />
              </Route>
              <Route
                exact
                strict
                sensitive
                path="/customers/:id/positions/:positionId"
                render={({ match }) => {
                  if (match.params.positionId === 'new') {
                    return null
                  }
                  return <EditPosition />
                }}
              />
              <Route exact strict sensitive path="/customers/:id/positions/new">
                <NewPosition />
              </Route>
              <Route exact strict sensitive path="/customers/:id/employee/new">
                <NewEmployee />
              </Route>
              <Route exact strict sensitive path="/customers/new/">
                <CustomerNew />
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
