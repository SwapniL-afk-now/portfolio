document.addEventListener('DOMContentLoaded', function() {

    // --- Navbar Shrink Effect (Optional) ---
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled'); // You'll need to define .navbar-scrolled in CSS if you want a visual change
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // --- Smooth Scrolling for Internal Links ---
    const scrollLinks = document.querySelectorAll('a.nav-link[href^="#"], a.scroll-link[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the navbar height to calculate offset
                const navbarHeight = document.getElementById('mainNavbar')?.offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Optional: Close mobile navbar menu after clicking a link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
                     if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                             toggle: false // Prevent toggling again if already collapsing
                        });
                        bsCollapse.hide();
                     }
                }
            }
        });
    });

    // --- Active Link Highlighting on Scroll (using Bootstrap Scrollspy) ---
    // Bootstrap's Scrollspy handles this automatically via the data attributes in the <body> tag.
    // Make sure your body tag has: data-bs-spy="scroll" data-bs-target="#mainNavbar" data-bs-offset="[navbar_height]"

    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Add any other custom JS interactions here ---
    // Example: Simple fade-in animation on scroll (requires CSS setup)
    // const fadeElements = document.querySelectorAll('.fade-in');
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('visible');
    //             observer.unobserve(entry.target); // Optional: stop observing once visible
    //         }
    //     });
    // }, { threshold: 0.1 }); // Trigger when 10% visible

    // fadeElements.forEach(el => observer.observe(el));

});

// Add this CSS for the optional scroll fade-in:
/*
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
*/

// Add this CSS for the optional navbar shrink effect:
/*
.navbar-scrolled {
     background-color: rgba(33, 37, 41, 1); // Make it fully opaque on scroll
     box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
*/