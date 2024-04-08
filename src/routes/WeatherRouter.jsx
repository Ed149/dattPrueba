import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import { LoginPage } from '../auth/login/LoginPage';
import { RegisterPage } from '../auth/register/RegisterPage';
import { DashboardPage } from '../dashboard/DashboardPage';
export const WeatherRouter = () => {
  return (
    <Routes>

        <Route path='/auth/*' element={<LoginPage />} />
        <Route path='/auth/register' element={<RegisterPage />} />
        
        <Route path='/dashboard' element={<DashboardPage/>}/>

        <Route path='/*' element={<Navigate to='/auth/'/>}/>
    </Routes>
  )
}
