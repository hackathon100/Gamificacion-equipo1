import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { MainLayout } from './layouts'
import { Login, Teacher, Experiment } from './pages'
import { ProvideAuth, useAuth, ProvideDialog, ProvideTeam } from './hooks'
import { Loader, ParticleBackground, Dialog } from './components'

export default function MainRouter () {
  return (
    <ProvideDialog>
      <ProvideAuth>
        <ProvideTeam>
          <Router>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            >
              <Dialog />
              <ParticleBackground />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <Switch>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <PrivateRoute path='/teacher'>
                    <Teacher />
                  </PrivateRoute>
                  <PrivateRoute path='/'>
                    {/* <Dashboard /> */}
                    <Experiment />
                  </PrivateRoute>
                  <Redirect from='*' to='/Login' />
                </Switch>
              </div>
            </div>
          </Router>
        </ProvideTeam>
      </ProvideAuth>
    </ProvideDialog>
  )
}

const PrivateRoute = ({ children, path, ...rest }) => {
  const { user, fetchingCacheUser } = useAuth()
  if (path === 'teacher') {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            <MainLayout>{children}</MainLayout>
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          )
        }
      />
    )
  }
  if (fetchingCacheUser) {
    return <Loader />
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            <MainLayout>{children}</MainLayout>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    )
  }
}
