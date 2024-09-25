document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Select necessary elements
    const fleetCards = document.querySelectorAll('.fleet-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const fleetCarousel = document.querySelector('.fleet-carousel');
    const navLeftButton = document.querySelector('.nav-btn.left');
    const navRightButton = document.querySelector('.nav-btn.right');

    let currentScrollPosition = 0; // Track the current scroll position

    // Filter logic
    filterButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach((button) => button.classList.remove('active'));

        // Add active class to the clicked button
        this.classList.add('active');

        const filterValue = this.textContent.toLowerCase();

        // Show all cards if 'ALL' is clicked
        if (filterValue === 'all') {
            fleetCards.forEach((card) => (card.style.display = 'block'));
        } else {
            fleetCards.forEach((card) => {
                // Filter cards based on data-category
                const category = card.getAttribute('data-category').toLowerCase();
                if (category === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
});

    // Scroll navigation logic
    const scrollAmount = 600; // Adjust this value based on how much you want the cards to scroll

    navLeftButton.addEventListener('click', () => {
    // Scroll left by the scrollAmount
    currentScrollPosition -= scrollAmount;
    if (currentScrollPosition < 0) {
    currentScrollPosition = 0; // Prevent scrolling past the start
}
    fleetCarousel.scrollTo({
    left: currentScrollPosition,
    behavior: 'smooth',
});
});

    navRightButton.addEventListener('click', () => {
    // Scroll right by the scrollAmount
    currentScrollPosition += scrollAmount;
    if (currentScrollPosition > fleetCarousel.scrollWidth - fleetCarousel.clientWidth) {
    currentScrollPosition = fleetCarousel.scrollWidth - fleetCarousel.clientWidth; // Prevent scrolling past the end
}
    fleetCarousel.scrollTo({
    left: currentScrollPosition,
    behavior: 'smooth',
});
});
