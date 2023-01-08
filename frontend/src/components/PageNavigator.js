import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CDSS from './CDSS/CDSS';

export default function PageNavigator() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<CDSS />} />
            </Routes>
        </BrowserRouter>
    );
}