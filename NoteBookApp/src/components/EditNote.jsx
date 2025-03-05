import React,{useRef, useContext, useState} from 'react'
import noteContext from '../context/NoteContext';
noteContext

function EditNote() {
    
    const context = useContext(noteContext)
    const { notes, getNotes, editNote,up } = context;
   
    
    const ref = useRef(null)
    const refClose = useRef(null)
  
    const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });
  
    

      const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
        
      }
      
      const handleSubmit = () => {
        console.log('updateting note',note)
        editNote(note.id , note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Updated Successfully!","success");
    
        }
    
    
      const onChange = (e) => {
          setNote({ ...note, [e.target.name]: e.target.value })
      }
    


  return (
    <>
        {/* Hidden Button to Trigger Modal */}
 <button
        ref={ref}
        type="button"
        className="d-none btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={3} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    minLength={1} required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
              ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
              disabled={note.etitle.length<3 || note.edescription.length<5}
               type="button" className="btn btn-primary" onClick={handleSubmit}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditNote