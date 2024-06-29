import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface QuizList {
    id: number | null;
    Quiz: string;
    Choice1: string;
    Choice2: string;
    Choice3: string;
    Choice4: string;
    AnswerChoice: number | null;
}

type adminProps = {
    show: boolean;
    handleClose: () => void;
    deleteList: QuizList;
    Quizid: number;
    deleteEv: () => void;
};

const Deletemodal = (props: adminProps) => {
    console.log(props.deleteList);

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>この問題を削除しますか？</Modal.Title>
                </Modal.Header>
                {props.deleteList !== undefined && <Modal.Body>{props.deleteList.Quiz}</Modal.Body>}
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        キャンセル
                    </Button>
                    <Button variant="primary" onClick={props.deleteEv}>
                        削除
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Deletemodal;
