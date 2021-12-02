let divisor1 = document.getElementById("divisor1");
let divisor2 = document.getElementById("divisor2");
let divisor3 = document.getElementById("divisor3");
let count1 = 1
let count3 = 1
let count2 = 1

let notes =
    localStorage.getItem("notes") == null ? [] :
    JSON.parse(localStorage.getItem("notes"));

notes.forEach(note => {
    const node = document.createElement("li");
    if (Object.keys(note)[0] == "divisor1") {
        node.append(`note ${count1}`);
        divisor1.appendChild(node);
        node.onclick = () => {
            localStorage.setItem("note_clicked", JSON.stringify(note["divisor1"]));
            window.location.href = "./viewNote.html";

        }
        count1++
    } else if (Object.keys(note)[0] == "divisor2") {
        node.append(`note ${count2}`);
        divisor2.appendChild(node);
        node.onclick = () => {
            localStorage.setItem("note_clicked", JSON.stringify(note["divisor2"]));
            window.location.href = "./viewNote.html";
        }
        count2++
    } else {
        node.append(`note ${count3}`);
        divisor3.appendChild(node);
        node.onclick = () => {
            localStorage.setItem("note_clicked", JSON.stringify(note["divisor3"]));
            window.location.href = "./viewNote.html";
        }
        count3++
    }


})



function SaveNote() {
    let data =
        localStorage.getItem("notes") == null ? [] :
        JSON.parse(localStorage.getItem("notes"));
    let type = document.getElementById("divisors").value;

    if (type == "divisor1") {
        data.push({ divisor1: document.getElementById("notes_input").value });
    } else if (type == "divisor2") {
        data.push({ divisor2: document.getElementById("notes_input").value });
    } else {
        data.push({ divisor3: document.getElementById("notes_input").value });
    }
    localStorage.setItem("notes", JSON.stringify(data));
    window.location.href = "./NoteDashboard.html";
}