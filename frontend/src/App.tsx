import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

const API_URL = "http://localhost:3000/quizlist/";

import QuizHeader from "./Shared/QuizHeader";
import Quiz from "./Pages/Quiz";
import Home from "./Pages/home";
import Make from "./Pages/make";
import Admin from "./Pages/Admin";

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
    const [QuizLi, setQuizLi] = useState<QuizList[]>([
        {
            id: 0,
            Quiz: "テストクイズです",
            Choice1: "選択肢１",
            Choice2: "選択肢２",
            Choice3: "選択肢３",
            Choice4: "選択肢４",
            AnswerChoice: 1,
        },
    ]);

    let AllQuizNumber: number = 0;

    useEffect(() => {
        QuizList();
        AllQuizNumber = QuizLi.length;
        console.log(AllQuizNumber);
    }, []);

    const QuizList = () => {
        fetch(API_URL)
            .then((responseData) => {
                return responseData.json();
            })
            .then((results) => {
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
                setQuizLi(fetchData);
            });
    };
    const addQuiz = (
        Quiz: string,
        Choice1: string,
        Choice2: string,
        Choice3: string,
        Choice4: string,
        AnswerChoice: number
    ) => {
        const json = { Quiz, Choice1, Choice2, Choice3, Choice4, AnswerChoice };
        fetch(API_URL, {
            body: JSON.stringify(json),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(QuizList);
    };

    const deleteEvent = (id: number | null) => {
        console.log(id);
        const targetUrl = API_URL + id;
        fetch(targetUrl, {
            method: "DELETE",
        }).then(QuizList);
    };

    const editEvent = (
        id: number | null,
        Quiz: string,
        Choice1: string,
        Choice2: string,
        Choice3: string,
        Choice4: string,
        AnswerChoice: number
    ) => {
        const targetUrl = API_URL + id;
        const editData = { Quiz, Choice1, Choice2, Choice3, Choice4, AnswerChoice };
        fetch(targetUrl, {
            body: JSON.stringify(editData),
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(QuizList);
    };

    return (
        <>
            <BrowserRouter>
                <QuizHeader />

                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/quiz" element={<Quiz QuizLi={QuizLi} setQuizLi={setQuizLi} />} />
                    <Route path="/make" element={<Make addQuiz={addQuiz} />} />
                    <Route
                        path="/admin"
                        element={<Admin QuizLi={QuizLi} deleteEvent={deleteEvent} editEvent={editEvent} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
