import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FormRecette from './components/FormRecettes';
import UserProvider, { UserContext } from './provider/userProvider';
import PasswordReset from './components/PasswordReset';
import { useContext } from 'react';
import Welcome from './components/Welcome';
import Profil from './components/Profil';
import Header from './components/Header';

function App() {
  const user = useContext(UserContext);
  console.log("App -> user", user)

  return (
    <Router>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {user &&
        <>
          <Header />
          <Route path='/welcome' component={Welcome} />
          <Route exact path='/profil' component={Profil} />
          <Route exact path='/recettes' component={FormRecette}/>
          <Route path='/resetPassword' component={PasswordReset} />
        </>
        }
      </Switch>
    </Router>
  );
}
const AppWrapper = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

export default AppWrapper;

