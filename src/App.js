import * as constants from './const'
import Authentication from './components/Authentication/Authentication'
import Home from './components/Home/Home' 

function App() {

  const userId = localStorage.getItem(constants.USERID_KEY);

  return (
    <>
      {userId ? <Home /> : <Authentication />}
    </>
  );
}

export default App;
