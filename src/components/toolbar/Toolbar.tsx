import React, {ReactElement} from "react";
import {Notes} from "../../logic/model";
import {NoteDot} from "./NoteDot";

export interface ToolbarProps {
    notes: Notes
    selectedNote: number
    onSelect: (id: number) => void
}

export function Toolbar(props: ToolbarProps): ReactElement {
    return (
        <div className="flex gap-4 justify-center py-4">
            { props.notes.map((note, id) => (
                <NoteDot
                    color={note.color}
                    selected={id === props.selectedNote}
                    onClick={() => props.onSelect(id)}
                />
            ))}
        </div>
    );
}