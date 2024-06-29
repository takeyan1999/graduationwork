import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import DeleteModal from "../Components/deletemodal";
import EditModal from "../Components/editmodal";

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
    deleteEvent: (id: number | null) => void;
    editEvent: (
        id: number | null,
        Quiz: string,
        Choice1: string,
        Choice2: string,
        Choice3: string,
        Choice4: string,
        AnswerChoice: number
    ) => void;
};

const admin = (props: AppProps) => {
    const [Quizid, setQuizid] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);
    const [deleteList, setdeleteList] = useState<QuizList | undefined>({
        id: 0,
        Quiz: "テストクイズです",
        Choice1: "選択肢１",
        Choice2: "選択肢２",
        Choice3: "選択肢３",
        Choice4: "選択肢４",
        AnswerChoice: 1,
    });
    const [del_edi, setdel_edi] = useState<boolean>(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        setdeleteList(props.QuizLi.find((List) => List.id === Quizid));
    }, [Quizid]);

    const handleShow = (id: number | null, del: boolean) => {
        setdel_edi(del);
        if (id === null) {
        } else {
            setQuizid(id);
        }
        setdeleteList(props.QuizLi.find((List) => List.id === Quizid));
        console.log(Quizid);
        setShow(true);
    };
    const deleteEv = () => {
        handleClose();
        if (deleteList !== undefined) {
            props.deleteEvent(deleteList.id);
        }
    };

    if (typeof props.QuizLi[0] !== "undefined") {
        return (
            <>
                <Container className="pt-5 ">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>問題</th>
                                <th>選択肢１</th>
                                <th>選択肢２</th>
                                <th>選択肢３</th>
                                <th>選択肢４</th>
                                <th>答え</th>
                                <th>編集</th>
                                <th>削除</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.QuizLi[0] &&
                                props.QuizLi.map((QuizList) => {
                                    return (
                                        <tr>
                                            <td>{QuizList.id}</td>
                                            <td>{QuizList.Quiz}</td>
                                            <td>{QuizList.Choice1}</td>
                                            <td>{QuizList.Choice2}</td>
                                            <td>{QuizList.Choice3}</td>
                                            <td>{QuizList.Choice4}</td>
                                            <td>{QuizList.AnswerChoice}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="bg-transparent"
                                                    onClick={() => handleShow(QuizList.id, false)}
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="bg-transparent"
                                                    onClick={() => handleShow(QuizList.id, true)}
                                                >
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </Container>
                {deleteList !== undefined && del_edi && (
                    <DeleteModal
                        show={show}
                        handleClose={handleClose}
                        deleteList={deleteList}
                        Quizid={Quizid}
                        deleteEv={deleteEv}
                    />
                )}
                {deleteList !== undefined && !del_edi && (
                    <EditModal
                        show={show}
                        handleClose={handleClose}
                        editList={deleteList}
                        Quizid={Quizid}
                        deleteEv={deleteEv}
                        editEvent={props.editEvent}
                    />
                )}
            </>
        );
    } else {
        return <></>;
    }
};

export default admin;
