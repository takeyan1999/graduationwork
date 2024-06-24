import React, { useState, useEffect } from "react";
import QuizBody from "../Components/QuizBody";
import Answer_results from "../Components/Answer_results";

const API_URL = "http://localhost:3000/quizlist/";

interface QuizList {
    id: number | null;
    Quiz: string;
    Choice1: string;
    Choice2: string;
    Choice3: string;
    Choice4: string;
    AnswerChoice: number | null;
}

const Quiz = () => {
    const [Answer_result, SetAnswer_result] = useState<boolean>(false);
    const [CollectCount, setCollectCount] = useState<number>(0);
    const [WrongCount, setWrongCount] = useState<number>(0);

    let AllQuizNumber = 0;

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

    return (
        <>
            {Answer_result ? (
                <Answer_results AllQuizNumber={AllQuizNumber} CollectCount={CollectCount} WrongCount={WrongCount} />
            ) : (
                <QuizBody
                    QuizList={QuizLi}
                    setAnswer_result={SetAnswer_result}
                    Answer_result={Answer_result}
                    setCollectCount={setCollectCount}
                    setWrongCount={setWrongCount}
                    CollectCount={CollectCount}
                />
            )}
        </>
    );
};

export default Quiz;
