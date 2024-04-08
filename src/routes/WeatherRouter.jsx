import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import { LoginPage } from '../auth/login/LoginPage';
import { RegisterPage } from '../auth/register/RegisterPage';
import { DashboardPage } from '../dashboard/DashboardPage';
export const WeatherRouter = () => {
  return (
    <Routes>

        <Route path='/dattPrueba/auth' element={<LoginPage />} />
        <Route path='/dattPrueba/auth/register' element={<RegisterPage />} />
        
        <Route path='/dattPrueba/dashboard' element={<DashboardPage/>}/>

        <Route path='/*' element={<Navigate to='/dattPrueba/auth/'/>}/>
    </Routes>
  )
}
