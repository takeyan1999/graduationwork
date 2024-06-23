import React from "react";

type MarubatuProps = {
    Answer_Check: Boolean;
};

const MaruBatu = (props: MarubatuProps) => {
    console.log(props.Answer_Check);

    if (props.Answer_Check) {
        return (
            <div className="z-1 position-absolute top-50 start-50 translate-middle answer_hantei">
                <i className="bi bi-circle text-danger"></i>
            </div>
        );
    } else {
        return (
            <div className="z-1 position-absolute top-50 start-50 translate-middle answer_hantei">
                <i className="bi bi-x-lg text-primary"></i>
            </div>
        );
    }
};

export default MaruBatu;
