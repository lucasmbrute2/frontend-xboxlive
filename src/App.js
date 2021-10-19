import './App.css';
import { Switch, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import CreateUser from './components/pages/CreateUser/CreateUser';
import DeleteUser from './components/pages/DeleteUser/DeleteUser';
import UpdateUser from './components/pages/UpdateUser/UpdateUser';
import GameView from './components/pages/GameView/GameView';

function App() {
  return (
    
    <div className="App">
      <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/user/add' component={CreateUser}/>
          <Route path='/user/delete/:id' component={DeleteUser}/>
          <Route path='/user/update/:id'component={UpdateUser}/>         
          <Route path='/view/:id' component={GameView}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
