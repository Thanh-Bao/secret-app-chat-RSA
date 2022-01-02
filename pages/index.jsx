import * as constants from './const'
import Login from './Login'
import Dashboard from './components/Home/Dashboard';

export default function index() {

  let isRememberMe = null;
  let username = null;

  if (typeof window !== "undefined") {
    isRememberMe = localStorage.getItem(constants.REMEMBER_PASSWORD);
    username = localStorage.getItem(constants.USERID);
  }
  return (
    <>
      {username && isRememberMe ? <Dashboard /> : <Login />}
    </>
  )
}
