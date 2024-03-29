import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Paper from "@mui/material/Paper";

function Home() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const deletedNote = prevNotes[id]; // Get the note to be deleted
      const updatedNotes = prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      // Now you can use the 'deletedNote' variable to access the data of the deleted note
      console.log("Deleted Note:", deletedNote);
      return updatedNotes; // Return the updated array of notes
    });
  }

  return (
    <div>
      <Header />

      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Paper />
      <Footer />
    </div>
  );
}

export default Home;
