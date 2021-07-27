import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Logo from './components/Logo'
import RepresentativeSearch from './components/RepresentativeSearch'
import Header from './components/Header'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        {/* <Logo /> */}
        <Header />
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/search">
              <RepresentativeSearch />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
