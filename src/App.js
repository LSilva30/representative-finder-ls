import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Logo from './components/Logo'
import Header from './components/Header'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import RepresentativeSearch from './components/RepresentativeSearch'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        {/* <Logo /> */}
        <Header />
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <RepresentativeSearch />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
