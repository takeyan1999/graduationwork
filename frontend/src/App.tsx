import React, { useState, useEffect } from "react";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

const API_URL = "http://localhost:3000/quizlist/";

import QuizHeader from "./Shared/QuizHeader";
import QuizBody from "./Components/QuizBody";

interface QuizList {
    id: number | null;
    Quiz: string;
    Choice1: string;
    Choice2: string;
    Choice3: string;
    Choice4: string;
    AnswerChoice: number | null;
}

const App = () => {
    const [Quiz, setQuiz] = useState<QuizList[]>([]);

    useEffect(() => {
        QuizList();
    }, []);

    const QuizList = () => {
        fetch(API_URL)
            .then((responseData) => {
                return responseData.json();
            })
            .then((results) => {
                console.log(results);

                const fetchData = results.map((result: QuizList) => {
                    return {
                        id: result.id,
                        Quiz: result.Quiz,
                        Choice1: result.Choice1,
                        Choice2: result.Choice2,
                        Choice3: result.Choice3,
                        Choice4: result.Choice4,
                        AnswerChoice: result.AnswerChoice,
                    };
                });

                console.log(fetchData);

                setQuiz(fetchData);
            });
    };

    return (
        <>
            <QuizHeader />
            <QuizBody QuizList={Quiz} />
        </>
    );
};

export default App;
