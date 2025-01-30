// Selecting the DOM elements
const passwordDisplay = document.getElementById('password-display');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const errorMessage = document.getElementById('error-message');

// Event Listeners
generateBtn.addEventListener('click', () => {
    const password = generatePassword();

    // Generate password on button click
    if (password) {
        passwordDisplay.textContent = password;
        errorMessage.textContent = '';
    }
});

// Copy Password to clipboard on button click
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordDisplay.textContent)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(() => {
            alert('Failed to copy Password!');
        });
});

// Update Length value on slider change
document.getElementById('length').addEventListener('input', () => {
    document.getElementById('length-value').textContent = document.getElementById('length').value;
});

// Generate Password function
function generatePassword() {
    const length = parseInt(document.getElementById('length').value, 10);

    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked; // Fixed ID reference

    let charPool = '';

    if (includeUppercase) {
        charPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowercase) {
        charPool += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
        charPool += '0123456789';
    }
    if (includeSymbols) {
        charPool += '!@#$%^&*()_+-=[]{};:\'"<>,.?/';
    }

    if (!charPool) {
        errorMessage.textContent = 'Please select at least one character type.';
        return '';
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        password += charPool[Math.floor(Math.random() * charPool.length)];
    }

    return password;
}
