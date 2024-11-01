// Select the link by ID
const bookingLink = document.getElementById('bookingLink');

bookingLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents default link behavior
    window.location.href = this.href; // Sets the URL to bookings.html
});

