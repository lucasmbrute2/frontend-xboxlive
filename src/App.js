import './App.css';
import { Switch, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';

function App() {
  return (
    
    <div className="App">
      <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
