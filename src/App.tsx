import React from 'react';
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Patients from "./pages/Patients";

const App = () => {
	return (
    <div className="App">
      <React.Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="patients" element={<Patients />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
	);
};

export default App;
