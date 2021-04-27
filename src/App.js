import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
