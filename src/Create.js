import React, { useState } from 'react';
import Display from "./Display";
import Header from './Header';
import Footer from './Footer';
function CreateArea()
{
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [notesArray, setNotesArray] = useState([]);
    function addNotes()
    {
        const contents ={
            title:title,
            note:note
        }
        setNotesArray( oldArray => [...oldArray, contents]);
        setTitle("")
        setNote("")
    }
    return(
        <div>
            <Header/>
            <div className="noteDetail">
                <div className="notes">
                    <input id="title" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} ></input>
                    <br></br><br></br>
                    <textarea id="desc" placeholder="Take a note..." value={note} onChange={(e)=>{setNote(e.target.value)}} ></textarea>
                    <button id="addNotes" onClick={addNotes}>Add</button>
                </div>
            </div>
            {/* {console.log(title,note)} */}
            {/* {console.log(notesArray)} */}
            <Display notesArray={notesArray} setNotesArray={setNotesArray} />
            <Footer/>
        </div>
    )
}

export default CreateArea;