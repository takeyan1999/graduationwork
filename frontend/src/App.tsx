import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

import QuizHeader from "./Shared/QuizHeader";
import Quiz from "./Pages/Quiz";
import Home from "./Pages/home";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <QuizHeader />

                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/quiz" element={<Quiz />} />
                    {}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
