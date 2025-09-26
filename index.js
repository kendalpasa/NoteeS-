const textArea = document.getElementById("Playground");
const deleteallButton = document.getElementById("deleteallButton");
const saveButton = document.getElementById("saveButton");


deleteallButton.addEventListener("click", deleteAll);
saveButton.addEventListener("click", saveNote);


function deleteAll(){
    document.getElementById("Playground").value = "";
}

function saveNote(){
    const text = document.getElementById("Playground").value;
    const blob = new Blob([text], {type: "text/plain"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "note.txt";
    link.click();
}