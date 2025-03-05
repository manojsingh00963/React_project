import React, { useContext, useState } from 'react'
import noteContext from '../context/NoteContext';

const AddNote = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Your Note Added Successfully","success");

    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onchange} minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"  >Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onchange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"  >Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange} minLength={1} required />
                </div>
                <button disabled={note.title.length<3 || note.description.length<5 || note.tag.length<2} type="submit" className="btn btn-dark" onClick={handleSubmit} >Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
