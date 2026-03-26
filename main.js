document.addEventListener('DOMContentLoaded', () => {
    // Film Poster Data (Placeholders)
    const filmPosters = {
        "One Battle After Another": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1025",
        "Licorice Pizza": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1170",
        "Phantom Thread": "https://images.unsplash.com/photo-1594908900066-3f47337549d8?auto=format&fit=crop&q=80&w=1170",
        "The Master": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1170",
        "There Will Be Blood": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=1000",
        "Magnolia": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1037",
        "Boogie Nights": "https://images.unsplash.com/photo-1598899139739-217ffad9343c?auto=format&fit=crop&q=80&w=1170"
    };

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for film cards reveal
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.film-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);

        // Click event for modal
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            openModal(title);
        });
    });

    // Modal Logic
    const modal = document.getElementById('poster-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const closeModal = document.querySelector('.close-modal');

    function openModal(title) {
        modalImg.src = filmPosters[title] || "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059";
        modalTitle.textContent = title;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function close() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeModal.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
    });

    // Header background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
});
