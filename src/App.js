import React, {useEffect} from 'react';
import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context';
import {useState} from 'react/cjs/react.development';
import Footer from './components/UI/footer/Footer';
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isPageRefresh, setIsPageRefresh] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsPageRefresh(false)
  },[])

  return (
      <AuthContext.Provider value={{
      isAuth,
      setIsAuth, 
      isPageRefresh
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App;
