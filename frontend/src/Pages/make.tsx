import React from "react";
import MakeQuiz from "../Components/MakeQuiz";

type appProps = {
    addQuiz: (
        Quiz: string,
        Choice1: string,
        Choice2: string,
        Choice3: string,
        Choice4: string,
        AnswerChoice: number
    ) => void;
};

const make = (props: appProps) => {
    return (
        <>
            <MakeQuiz addQuiz={props.addQuiz} />
        </>
    );
};

export default make;
