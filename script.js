// Get elements
const saveBtn = document.getElementById("saveBtn");
const diaryInput = document.getElementById("diaryInput");
const entriesList = document.getElementById("entriesList");

// Load diary entries from localStorage
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    entriesList.innerHTML = ""; // Clear current entries
    entries.forEach(entry => {
        const li = document.createElement("li");
        li.classList.add("entry");
        
        const entryText = document.createElement("p");
        entryText.textContent = entry.text;

        const entryDate = document.createElement("div");
        entryDate.classList.add("date");
        entryDate.textContent = entry.date;

        li.appendChild(entryText);
        li.appendChild(entryDate);
        entriesList.appendChild(li);
    });
}

// Save new entry
function saveEntry() {
    const text = diaryInput.value.trim();
    if (text === "") return; // Don't save empty entries

    const date = new Date().toLocaleString(); // Get current date and time
    const newEntry = { text, date };

    // Retrieve existing entries from localStorage
    const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    entries.push(newEntry);

    // Save updated entries to localStorage
    localStorage.setItem("diaryEntries", JSON.stringify(entries));

    // Clear the input field and reload entries
    diaryInput.value = "";
    loadEntries();
}

// Event listener for Save button
saveBtn.addEventListener("click", saveEntry);

// Load existing entries when the page loads
window.onload = loadEntries;
