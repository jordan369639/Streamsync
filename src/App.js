import React, { Suspense, useEffect } from 'react'
import "./App.css"
import HomeScreen from './homescrreen/HomeScreen'
import { BrowserRouter } from "react-router-dom"
import { Navigate, Route, Routes } from 'react-router';
import { getAuth } from 'firebase/auth'
import { app } from './Firebase/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { adduser, logout, selectUser } from './app/LoginLogout'
import { ErrorBoundary } from 'react-error-boundary'
import fallBack from './Erroboundry/ErrorBoundry'
import Profile from './LoginPage/Profile';
const SignUp = React.lazy(() => import('./LoginPage/signUp'))
const LoginPage = React.lazy(()=> import('./LoginPage/LoginPage'))
const auth = getAuth(app)
const App = () => {


  const User = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user")
        dispatch(adduser({
          userId: user.uid,
          email: user.email,
        
        }))
      } else {
dispatch(logout())
      }
    });
  }, [])




  return (
    < >
      <div className="main">
     
     
     
     <BrowserRouter>
<ErrorBoundary FallbackComponent={fallBack}>
<Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={User ? <Suspense fallback={<div>loading...</div>}><HomeScreen/></Suspense>:<><Suspense fallback={<div>loading...</div>}><LoginPage/></Suspense></>}/>
          <Route path="/home" element={ <HomeScreen/> }/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/profile" element={<Profile/>}/>
        
        </Routes>
</Suspense>
</ErrorBoundary>

    </BrowserRouter>
 



      </div>

    </>
  )
}

export default App