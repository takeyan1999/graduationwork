import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

import axios from "axios";

import QuizHeader from "./Shared/QuizHeader";
import Quiz from "./Pages/Quiz";
import Home from "./Pages/home";
import Make from "./Pages/make";
import Admin from "./Pages/Admin";

const App = () => {
    interface QuizList {
        id: number | null;
        Quiz: string;
        Choice1: string;
        Choice2: string;
        Choice3: string;
        Choice4: string;
        AnswerChoice: number | null;
    }

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
        (async () => {
            try {
                const response = await axios.get("http://localhost:3000/quizs");
                setQuizLi(response.data); // データをstateにセット
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        })();
        AllQuizNumber = QuizLi.length;
        console.log(AllQuizNumber);
    }, []);

    const addQuiz = (
        Quiz: string,
        Choice1: string,
        Choice2: String,
        Choice3: string,
        Choice4: string,
        AnswerChoice: number
    ) => {
        const url = axios
            //todoのところにリストが入る。
            .post("http://localhost:3000/quizs", {
                Quiz: Quiz,
                Choice1: Choice1,
                Choice2: Choice2,
                Choice3: Choice3,
                Choice4: Choice4,
                AnswerChoice: AnswerChoice,
            })

            //then=成功した場合の処理
            .then(() => {
                console.log(url);
                console.log("good");
                console.log({
                    Quiz: Quiz,
                    Choice1: Choice1,
                    Choice2: Choice2,
                    Choice3: Choice3,
                    Choice4: Choice4,
                    AnswerChoice: AnswerChoice,
                });
            })
            //catch=エラー時の処理
            .catch((err) => {
                console.log("err:", err);
            });
    };

    const deleteEvent = (deleteid: number | null) => {
        console.log("delete");
        if (deleteid !== null) {
            console.log(deleteid);
            const url = axios
                .delete("http://localhost:3000/quizs?id=" + deleteid)
                .then(() => {
                    console.log("削除ID:", url);
                })
                .catch((err) => {
                    console.log("err:", err);
                });
        }
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
        axios
            .put("http://localhost:3000/quizs?id=" + id, {
                Quiz: Quiz,
                Choice1: Choice1,
                Choice2: Choice2,
                Choice3: Choice3,
                Choice4: Choice4,
                AnswerChoice: AnswerChoice,
            })
            .then((response) => {
                setQuizLi(response.data);
            });
    };

    console.log(QuizLi);

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
