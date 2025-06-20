 document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.destination-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });
});