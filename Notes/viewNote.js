let container = document.getElementById("content");
let content =
  localStorage.getItem("note_clicked") == null
    ? ""
    : JSON.parse(localStorage.getItem("note_clicked"));
container.append(content);
localStorage.setItem("note_clicked", "");
