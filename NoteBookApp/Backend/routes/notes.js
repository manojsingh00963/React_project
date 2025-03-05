const express = require("express")
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note")
const { body, validationResult } = require('express-validator')


// ROUTE 1: Get all the notes using : GET "/api/notes/fetchnotes". login required
router.get('/fetchnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.error(error.message)
        res.status(500).send(" Internal Server Error.")
    }

})


// ROUTE 2: add a new notes using : POST "/api/notes/addnote". login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid name.').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters.').isLength({ min: 5 }),], async (req, res) => {
        try {

            const { title, description, tag } = req.body;
            // If there are errors, return Bad request and the errors
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(400).json({ error: error.array() })
            }

            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()
            res.json(savedNote);

        } catch (error) {
            console.error(error.message)
            res.status(500).send(" Internal Server Error.")
        }
    })



// ROUTE 3: update an existing : put "/api/notes/update". login required

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        
    const {title, description, tag} = req.body;
    // create a new Note object
    const newNote = {}
    if (title){newNote.title = title}
    if (description){newNote.description = title}
    if (tag){newNote.tag = tag}

    // find the note to be updated and update it
    let note = await Note.findById(req.params.id)
    if(!note){res.status(404).send("Not Found!")}
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed!")
    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true})
    res.json({note});
} catch (error) {
    console.error(error.message)
    res.status(500).send(" Internal Server Error.")
}

})
// ROUTE 4: Delete an existing : put "/api/notes/deletenote". login required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {

    const {title, description, tag} = req.body;

    // find the note to be deleted and delete it
    let note = await Note.findById(req.params.id)
    if(!note){res.status(404).send("Not Found!")}

    // Allow deletion only if user owns this note
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed!")
    }
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({"Success":"Note has been deleted", note:note});
} catch (error) {
    console.error(error.message)
    res.status(500).send(" Internal Server Error.")
}
})






module.exports = router;