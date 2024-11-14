document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor click behavior

            // Get the target element by ID
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Calculate the position of the target element
            const targetPosition = targetElement.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 300; // Duration of the animation in ms
            let start = null;

            // Smooth scroll animation function
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const ease = Math.min(progress / duration, 1);
                window.scrollTo(0, startPosition + distance * ease);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            // Start the animation
            window.requestAnimationFrame(step);
        });
    });
});
