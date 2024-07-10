// script.js
let name1, name2;

function startGame() {
    name1 = document.getElementById('name1').value;
    name2 = document.getElementById('name2').value;

    if (name1 && name2) {
        document.getElementById('dice').innerText = 'Ready to roll!';
    } else {
        alert('First 2 Name hako Ley!');
    }
}

function rollDice() {
    if (name1 && name2) {
        const result = Math.random() < 0.5 ? name1 : name2;
        document.getElementById('dice').innerText = result;
    } else {
        alert('Please start the game first!');
    }
}


// Function to add a new task to the specified list
function addTask(inputId, listId) {
    const input = document.getElementById(inputId);
    const task = input.value.trim();
    
    if (task !== "") {
        const list = document.getElementById(listId);
        
        // Create list item
        const li = document.createElement("li");

        // Create task text
        const taskText = document.createElement("span");
        taskText.textContent = task;
        taskText.contentEditable = "true";
        taskText.className = "editable";

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = () => li.remove();

        // Append task text and delete button to list item
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        // Append list item to list
        list.appendChild(li);

        // Clear the input field
        input.value = "";
    }
}

// Event listeners for the add buttons
document.getElementById("add-button").addEventListener("click", () => addTask("todo-input", "todo-list"));
document.getElementById("add-button2").addEventListener("click", () => addTask("todo-input2", "todo-list2"));

// Function to handle editing of task
document.addEventListener("input", (event) => {
    if (event.target.classList.contains("editable")) {
        const taskText = event.target;
        taskText.textContent = taskText.textContent.trim();
    }
});






