// Reference needed elements
const result = document.getElementById('');
const nameInput = document.getElementById('');

// Action to take on user event
// eslint-disable-next-line no-unused-vars
function updateResult() {
    result.textContent = nameInput.value;
}