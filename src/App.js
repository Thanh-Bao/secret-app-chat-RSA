import * as constants from './const'
import Authentication from './components/Authentication/Authentication'
import Home from './components/Home/Home'

function App() {

  const rememberPassword = localStorage.getItem(constants.REMEMBER_PASSWORD);

  return (
    <>
      {rememberPassword==="true" ? <Home /> : <Authentication />}
    </>
  );
}

export default App;
