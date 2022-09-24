import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import CDSS from './CDSS/CDSS';

export default function PageNavigator() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/CDSS' element={<CDSS />} />
            </Routes>
        </BrowserRouter>
    );
}