function volume_sphere(event) {
    event.preventDefault();  // Prevent form submission

    // Get the radius input by the user
    const radiusInput = document.getElementById('radius').value;

    // Convert input to a number
    const radius = parseFloat(radiusInput);

    // Get the volume input field
    const volumeField = document.getElementById('volume');

    // Validate the radius (it should be a non-negative number)
    if (isNaN(radius) || radius < 0) {
        // If input is invalid, set the volume to NaN
        volumeField.value = 'NaN';
    } else {
        // Calculate the volume using the formula: (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Set the volume field to the calculated value, rounded to 4 decimal places
        volumeField.value = volume.toFixed(4);
    }
}

// Attach the volume_sphere function to the form's onsubmit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
