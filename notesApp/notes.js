const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'notes.txt');
console.log(filePath);

// Create a new file and add some text
function createNote() {
    fs.writeFile(filePath, 'My first note.', (err) => {
        if (err){
            
            console.log('Error creating note:', err);
        }else {

            console.log('Note created successfully.');
        }
    });
}
// Read and display file content
function readNote() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
           console.log('Error reading note:', err);
        }else {
            console.log(`Reading note: ${data}`);
        }
    });
}
// Update (append) text to the file
function updateNote() {
    fs.appendFile(filePath, '\nThis is an updated note.', (err) => {
        if (err) {
          console.log('Error updating note:', err);
        }
        else{

            console.log('Note updated successfully.');
        }
    });
}

// function for Deleting the file
function deleteNote() {
    fs.unlink(filePath, (err) => {
        if (err){
           console.log('Error deleting note:', err);
        } else{
         console.log('Note deleted successfully.');
        }
    });
}

// Call the functions in order
createNote();
readNote();
updateNote();
deleteNote();