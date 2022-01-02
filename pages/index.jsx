import * as constants from './const'
import Login from './Login'
import Dashboard from './components/Home/Dashboard';

export default function index() {

  const isRememberMe = null;
  const isLogined = null;

  if (typeof window !== "undefined") {
    isRememberMe = localStorage.getItem(constants.REMEMBER_PASSWORD);
    isLogined = localStorage.getItem(constants.USERID);
  }
  return (
    <>
      {isLogined && isRememberMe ? <Dashboard /> : <Login />}
    </>
  )
}
