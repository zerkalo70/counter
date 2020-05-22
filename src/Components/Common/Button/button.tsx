import React from "react";

type PropsType = {
    text: string
    className: string
    callback: () => void
}

export const Button = (props: PropsType) => {
    return (
        <input type="button"
               value={props.text}
               className={props.className}
               onClick={props.callback}
        />
    )
}

