document.addEventListener('DOMContentLoaded', () => {
    // Film Poster Data (Updated from Naver Search Results)
    const filmPosters = {
        "One Battle After Another": "https://img.danawa.com/prod_img/500000/034/001/img/20001034_1.jpg?_v=20240131105021", // Representing the latest project with a cinematic placeholder since it's very new
        "Licorice Pizza": "https://movie-phinf.pstatic.net/20220207_193/1644211110034K2Ie7_JPEG/movie_image.jpg",
        "Phantom Thread": "https://movie-phinf.pstatic.net/20180221_144/1519175399587Gv8Wn_JPEG/movie_image.jpg",
        "The Master": "https://movie-phinf.pstatic.net/20130626_289/137221199321590Q8G_JPEG/movie_image.jpg",
        "There Will Be Blood": "https://movie-phinf.pstatic.net/20111222_150/13245415303423L8Uo_JPEG/movie_image.jpg",
        "Magnolia": "https://movie-phinf.pstatic.net/20111223_35/1324580227931R33H7_JPEG/movie_image.jpg",
        "Boogie Nights": "https://movie-phinf.pstatic.net/20111223_17/1324606709841WvOqT_JPEG/movie_image.jpg"
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
