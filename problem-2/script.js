document.addEventListener("DOMContentLoaded", function() {
    // constants
    const noteInput = document.getElementById("note-input");
    const noteColorSelect = document.getElementById("note-color");
    const addNoteBtn = document.getElementById("add-note");
    const noteContainer = document.getElementById("note-container");

    // add note
    addNoteBtn.addEventListener("click", function() {
        const noteText = noteInput.value.trim();
        const selectedColor = noteColorSelect.value;

        if (noteText !== "") {
            addNoteToContainer(noteText, selectedColor);
            noteInput.value = "";
        }
    });

    function addNoteToContainer(noteText, color) {
        const noteCard = document.createElement("div");
        noteCard.className = `card text-white bg-${color} mb-3`;
        
        const noteCardBody = document.createElement("div");
        noteCardBody.className = "card-body";

        const noteTextElement = document.createElement("p");
        noteTextElement.className = "card-text";
        noteTextElement.textContent = noteText;

        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-light btn-sm mr-2";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function() {
            const updatedNoteText = prompt("Edit your note:", noteText);
            if (updatedNoteText !== null) {
                noteTextElement.textContent = updatedNoteText;
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-light btn-sm";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            noteContainer.removeChild(noteCard);
        });

        noteCardBody.appendChild(noteTextElement);
        noteCardBody.appendChild(editBtn);
        noteCardBody.appendChild(deleteBtn);

        noteCard.appendChild(noteCardBody);
        noteContainer.appendChild(noteCard);
    }
});
