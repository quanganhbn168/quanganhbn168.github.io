<script>
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                
                if (mobileMenu.classList.contains('hidden')) {
                    mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
                } else {
                    mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
                }
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                            mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
                        }
                    }
                });
            });
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            // Active navigation link based on scroll position
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            function setActiveLink() {
                let currentSection = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    
                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        currentSection = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSection}`) {
                        link.classList.add('active');
                    }
                });
            }
            
            window.addEventListener('scroll', setActiveLink);
            setActiveLink(); // Set initial active link
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            // Contact form handling
            const contactForm = document.getElementById('contact-form');
            const buttonText = document.getElementById('button-text');
            const buttonLoader = document.getElementById('button-loader');
            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                buttonText.classList.add('hidden');
                buttonLoader.classList.remove('hidden');
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Hide loading state
                    buttonText.classList.remove('hidden');
                    buttonLoader.classList.add('hidden');
                    
                    // Show success message (90% of the time) or error message (10% of the time)
                    if (Math.random() < 0.9) {
                        successMessage.classList.remove('hidden');
                        errorMessage.classList.add('hidden');
                        contactForm.reset();
                    } else {
                        successMessage.classList.add('hidden');
                        errorMessage.classList.remove('hidden');
                    }
                    
                    // Hide messages after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.add('hidden');
                        errorMessage.classList.add('hidden');
                    }, 5000);
                }, 1500);
            });
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            // Fetch projects from API (simulated)
            function fetchProjects() {
                // In a real application, this would be an actual API call
                // For now, we'll just simulate the data already being loaded
                console.log('Projects would be fetched from /api/projects in a real application');
            }
            
            fetchProjects();
        });
    </script>