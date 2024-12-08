var toggleButton = document.getElementById('toggle-certifications');
var certifications = document.getElementById('certification');
// Ensure the button and certification elements exist before adding the Event listener
toggleButton.addEventListener('click', function () {
    if (certifications.style.display == 'none') {
        certifications.style.display = 'block';
    }
    else {
        certifications.style.display = 'none';
    }
});
