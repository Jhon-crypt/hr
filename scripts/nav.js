document.addEventListener('DOMContentLoaded', function() {
    // Select all nav links
    const navLinks = document.querySelectorAll('.hr-nav .nav-link');

    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active', 'text-light');
                link.classList.add('text-dark');
            });

            // Add active class to the clicked nav link
            this.classList.add('active');
            this.classList.remove('text-dark');
            this.classList.add('text-light');

            // Hide all sections
            document.querySelectorAll('.mt-5.hr-nav > div').forEach(section => {
                section.style.display = 'none';
            });

            // Show the corresponding section
            const target = this.getAttribute('data-target');
            document.querySelector('.' + target).style.display = 'block';
        });
    });
});