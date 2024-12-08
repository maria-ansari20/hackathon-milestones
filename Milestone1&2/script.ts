
const toggleButton = document.getElementById('toggle-certifications') as HTMLButtonElement
const certifications = document.getElementById('certification') as HTMLElement

// Ensure the button and certification elements exist before adding the Event listener
toggleButton.addEventListener('click', () => {
    if (certifications.style.display == 'none'){
        certifications.style.display = 'block';
    } else {
        certifications.style.display = 'none';
    }
});