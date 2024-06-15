import React from "react";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";
import QuizHeader from "./Shared/QuizHeader";
import QuizBody from "./Components/QuizBody";

const App = () => {
    return (
        <>
            <QuizHeader />
            <QuizBody />
        </>
    );
};

export default App;
