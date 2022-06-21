import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [clicked, setClicked] = useState(false);

  function handleChange(event) {
    
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event){
    setClicked(true);
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setClicked(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">

        {clicked && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          
        /> }

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick={handleClick}
          rows={clicked?"3":"1"}
        />
        <Zoom in={clicked}>
          <Fab onClick={submitNote}>
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
