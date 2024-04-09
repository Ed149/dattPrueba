import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import { LoginPage } from '../auth/login/LoginPage';
import { RegisterPage } from '../auth/register/RegisterPage';
import { DashboardPage } from '../dashboard/DashboardPage';
export const WeatherRouter = () => {
  let actualUser = localStorage.getItem('actualUser');
  console.log("ActualUser",typeof(actualUser))
  return (
    <Routes>
        <Route path='/*' element={<Navigate to='/auth/*'/>}/>:
        <Route path='/dashboard' element={<DashboardPage/>}/> 
        <Route path='/auth/*' element={<LoginPage />} />
        <Route path='/auth/register' element={<RegisterPage />} />
        
    </Routes>
  )
}
