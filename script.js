const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showTestimonial(index) {
    // Remove 'active' class from all cards
    cards.forEach((card) => card.classList.remove('active'));

    // Add 'active' class to the selected card
    cards[index].classList.add('active');

    currentIndex = index; // Update current index
}

// Auto-transition every 10 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showTestimonial(currentIndex);
}, 10000); // 10-second interval
