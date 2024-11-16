import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";
import { fetchQuizList, addQuizList, deleteQuizList, checkQuizList } from "../utils/supabaseFunctions.ts";

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
        fetchQuiz();
        AllQuizNumber = QuizLi.length;
        console.log(AllQuizNumber);
    }, []);

    useEffect(() => {
        fetchQuizList();
    }, []);

    // SupabaseによるfetchTodo関数を定義
    const fetchQuiz = async () => {
        const quizList = (await fetchQuizList()) as QuizList[];
        setQuizLi(quizList);
    };

    // SupabaseによるaddTodo関数を定義
    const addQuiz = async (inputTitle: string) => {
        if (!inputTitle) return;

        await addQuizList(inputTitle);
        fetchQuizList();
    };

    // SupabaseによるdeleteTodo関数を定義
    const deleteEvent = async (id: number) => {
        await deleteQuizList(id);
        fetchQuizList();
    };

    // SupabaseによるcheckTodo関数を定義
    const editEvent = async (id: number, status: boolean) => {
        await checkQuizList(id, status);
        fetchQuiz();
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
