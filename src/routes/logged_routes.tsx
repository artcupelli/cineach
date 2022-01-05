import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { FilmsScreen, HomeScreen, PeopleScreen, ProductsScreen, SalesScreen, SessionsScreen } from '../screens';


const LoggedRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="products" element={<ProductsScreen/>} />
            <Route path="films" element={<FilmsScreen/>} />
            <Route path="sessions" element={<SessionsScreen/>} />
            <Route path="sales" element={<SalesScreen/>} />
            <Route path="people" element={<PeopleScreen/>} />
            <Route path="*" element={<h1>Nada por aqui...</h1>} />
        </Routes>
    );

}

export default LoggedRoutes;