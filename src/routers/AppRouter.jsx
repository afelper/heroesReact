import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import DashBoardRouter from '../routers/DashboardRouter';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } />

                <Route path="/*" element={
                    <PrivateRoutes>
                        <DashBoardRouter />
                    </PrivateRoutes>   
                } />

    
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
