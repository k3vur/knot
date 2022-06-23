import React, {ReactElement} from "react";

export interface NoteDotProps {
    color: string
    selected: boolean
    onClick: () => void
}

export function NoteDot(props: NoteDotProps): ReactElement {
    return (
        <button
            className={`w-4 h-4 rounded-full ${props.selected ? 'ring-2' : ''}`}
            style={{backgroundColor: props.color}}
            onClick={props.onClick}>

        </button>
    )
}