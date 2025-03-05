import React, { useContext } from 'react'
import noteContext from '../context/NoteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote} = props;
    return (
        <div className="col-md-3" >
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between ">
                        <h5 className="card-title">{note.title}.</h5>
                        <div className="right">
                            <i className="fa-solid fa-trash-can mx-2 " onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Note Successfully","success")}} />
                            <i className="fa-solid fa-pen-to-square mx-2 " onClick={()=>(updateNote(note))} />
                        </div>
                    </div>
                    <p className="card-text">{note.description}.</p>
                    <cite>{note.tag}</cite>
                    <p className=" card-subtitle float-end fs-6 fw-ligh text-body-secondary">
                        {new Date(note.time).toISOString().split('T')[0]}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
