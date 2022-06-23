export interface NoteDescriptor {
    color: string
}

export type Notes = Note[]

export interface Note {
    color: string
    content: string
}

export function createNotesFromDescriptors(noteDescriptors: NoteDescriptor[]): Notes {
    return noteDescriptors.map(createNoteFromDescriptor);
}

export function createNoteFromDescriptor(noteDescriptor: NoteDescriptor): Note {
    return {
        color: noteDescriptor.color,
        content: ''
    };
}