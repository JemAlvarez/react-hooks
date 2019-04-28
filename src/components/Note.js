import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext)
    const { x, y } = useMousePosition()

    const removeNote = (title) => {
        dispatch({ type: 'REMOVE_NOTE', title })
    }

    return (
        <li>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>X:{x} - Y:{y}</p>
            <button onClick={() => { removeNote(note.title) }}>X</button>
        </li>
    )
}

export default Note