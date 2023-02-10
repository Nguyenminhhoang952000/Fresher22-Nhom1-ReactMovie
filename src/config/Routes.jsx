import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Search from 'pages/Search';
import Profile from 'pages/Profile';
const Routes = () => {
    return (
        <Router>
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/:category/:id/casts" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/" exact element={<Home />} />
        </Router>
    );
};

export default Routes;
