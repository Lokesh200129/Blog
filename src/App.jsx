import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import './App.css'
import authService from './Auth/Auth'
import  { login, logout } from './feature/auth_slice'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then(user => {
      if(user){
        dispatch(login({user}))
      }else{
        dispatch(logout())
      }  

    })
    .finally(() => setLoading(false));

  }, [])
  return (
    <>
       
      <h1 className='bg-red-500'>Vite + React</h1>
      <Header />
      <Footer />
    </>
  )
}

export default App
