const listOfNotes = document.querySelector(".notes")

const notes = []

class Note {
    constructor(note_name,note_body){
        this.note_name = note_name
        this.note_body = note_body
        this.date_create = new Date()
        this.isEdited = false
    }
}


function addNote() {
    let note_name = prompt("Введіть ім'я нотатки");
    let note_body = prompt("Введіть текст нотатки");
    if (note_name && note_body) {
        let note = new Note(note_name, note_body);
        notes.push(note);
        displayNotes(); 
    } else {
        alert("Ім'я нотатки та її текст не можуть бути порожніми!");
    }
}


function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Місяці від 0 до 11
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    return `${day}.${month} | ${hours}:${minutes}`;
}

function displayNotes() {
    listOfNotes.innerHTML = ''; // Очищаємо попередній вміст перед відображенням нових нотаток

    for (let i = 0; i < notes.length; i++) {

        function deleteNote() {
            notes.splice(i, 1); 
            displayNotes(); // Перемальовуємо список нотаток
        }
        
        function editNote(){
            let new_note_name = prompt('Введіть нове імя нотатки')
            let new_note_body = prompt('Введіть новий опис нотатки')

            if (new_note_name && new_note_body) {
            notes[i].note_name = new_note_name
            notes[i].note_body = new_note_body
            notes[i].isEdited = true;
            displayNotes()
            } else {
                alert("Ім'я нотатки та її текст не можуть бути порожніми!");
            }
        }

        let noteContainer = document.createElement('div');
        noteContainer.classList.add('note');

        let container = document.createElement('div')
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let date = document.createElement('p');
        let deleteBtn = document.createElement('button');
        let editBtn = document.createElement('button')

        container.classList.add('notes-container');
        date.classList.add('note-date');
        deleteBtn.classList.add('btn-delete-note');
        deleteBtn.addEventListener('click', deleteNote);
        editBtn.addEventListener('click',editNote);

        h2.textContent = notes[i].note_name;
        p.textContent = notes[i].note_body;
        deleteBtn.textContent = 'Видалити нотатку';
        (notes[i].isEdited) ? date.textContent = `Відредаговано * Дата створення: ${formatDate(notes[i].date_create)}` : date.textContent = `Дата створення: ${formatDate(notes[i].date_create)}`
        editBtn.textContent = 'Редагувати нотатку';

        noteContainer.append(h2);
        noteContainer.append(p);
        noteContainer.append(date);
        noteContainer.append(deleteBtn);
        noteContainer.append(editBtn)

        listOfNotes.append(noteContainer);
    }
}










