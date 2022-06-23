import React, {ReactElement, useState} from "react";
import {createNotesFromDescriptors, NoteDescriptor, Notes} from "../logic/model";
import {Toolbar} from "./toolbar/Toolbar";

export interface KnotProps {
    noteDescriptors: NoteDescriptor[]
}

export function Knot(props: KnotProps): ReactElement {
    const [notes, setNotes] = useState<Notes>(createNotesFromDescriptors(props.noteDescriptors));
    const [selectedNote, setSelectedNote] = useState(0);
    return (
        <div className="flex flex-col">
            <Toolbar
                notes={notes}
                selectedNote={selectedNote}
                onSelect={setSelectedNote}
            />
        </div>
    );
}

