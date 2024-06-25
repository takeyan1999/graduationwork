import React, { useState } from "react";
import QuizBody from "../Components/QuizBody";
import Answer_results from "../Components/Answer_results";

interface QuizList {
    id: number | null;
    Quiz: string;
    Choice1: string;
    Choice2: string;
    Choice3: string;
    Choice4: string;
    AnswerChoice: number | null;
}

type AppProps = {
    QuizLi: QuizList[];
    setQuizLi: React.Dispatch<React.SetStateAction<QuizList[]>>;
};

const Quiz = (props: AppProps) => {
    const [Answer_result, SetAnswer_result] = useState<boolean>(false);
    const [CollectCount, setCollectCount] = useState<number>(0);
    const [WrongCount, setWrongCount] = useState<number>(0);

    return (
        <>
            {Answer_result ? (
                <Answer_results CollectCount={CollectCount} WrongCount={WrongCount} />
            ) : (
                <QuizBody
                    QuizList={props.QuizLi}
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
