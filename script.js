document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    collapsibleHeaders.forEach(header => {
        // Check if the content should be active on load (based on HTML)
        const content = header.nextElementSibling;
        if (content && content.classList.contains('active')) {
            header.classList.add('active'); // Add active class to header if content is active
        }

        header.addEventListener('click', function() {
            this.classList.toggle('active'); // Toggle 'active' class on the header
            const content = this.nextElementSibling; // Get the content div immediately after the header

            if (content) { // Ensure content exists
                content.classList.toggle('active'); // Toggle 'active' class on the content to show/hide
            }
        });
    });
});