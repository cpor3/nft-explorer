import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderLayout from "./components/HeaderLayout";
import NftsContext from './context/NftsContext';
import Home from "./pages/Home";
import './styles/App.css';

export default function App() {

  return (
    <div className="app">
      <NftsContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeaderLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NftsContext>
    </div>
  )
}

