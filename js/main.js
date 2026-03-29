/* ============================================
   JOLLOF LIFE — Core JavaScript
   Navigation, Scroll Effects, Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Scroll Progress Bar ---
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  // --- Navbar Scroll Transition ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const updateNavbar = () => {
      if (window.scrollY > 80) {
        navbar.classList.remove('navbar--transparent');
        navbar.classList.add('navbar--solid');
      } else {
        navbar.classList.remove('navbar--solid');
        navbar.classList.add('navbar--transparent');
      }
    };
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
  }

  // --- Mobile Menu ---
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('navbar__toggle--active');
      mobileMenu.classList.toggle('mobile-menu--open');
      document.body.style.overflow = mobileMenu.classList.contains('mobile-menu--open') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('navbar__toggle--active');
        mobileMenu.classList.remove('mobile-menu--open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal');
  const staggerElements = document.querySelectorAll('.reveal-stagger');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-stagger--active');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));
  staggerElements.forEach(el => staggerObserver.observe(el));

  // --- Counter Animation ---
  const counters = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    el.classList.add('counter--animating');

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // --- Hero Parallax ---
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    }, { passive: true });
  }

  // --- Testimonial Slider ---
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    const track = slider.querySelector('.testimonial-track');
    const dots = slider.querySelectorAll('.testimonial-dot');
    const slides = slider.querySelectorAll('.testimonial');
    let currentSlide = 0;
    let autoPlayInterval;

    function goToSlide(index) {
      currentSlide = index;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('testimonial-dot--active', i === currentSlide);
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoPlay();
      });
    });

    function autoPlay() {
      autoPlayInterval = setInterval(() => {
        goToSlide((currentSlide + 1) % slides.length);
      }, 5000);
    }

    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      autoPlay();
    }

    if (slides.length > 1) {
      autoPlay();
    }
  }

  // --- Current Day Highlight (Contact Page) ---
  const hoursRows = document.querySelectorAll('.hours-row');
  if (hoursRows.length > 0) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = days[new Date().getDay()];
    hoursRows.forEach(row => {
      if (row.dataset.day === today) {
        row.classList.add('hours-row--today');
      }
    });
  }

  // --- Open/Closed Status Badge ---
  const statusBadge = document.querySelector('.status-badge');
  if (statusBadge) {
    updateStatus();

    function updateStatus() {
      const now = new Date();
      const day = now.getDay(); // 0=Sun, 1=Mon, ...
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour + minute / 60;

      let isOpen = false;

      // Monday (1) = closed
      // Tue-Fri (2-5): 11:00 - 20:00
      // Sat (6): 12:00 - 21:00
      // Sun (0): 12:00 - 18:00
      if (day >= 2 && day <= 5 && time >= 11 && time < 20) isOpen = true;
      if (day === 6 && time >= 12 && time < 21) isOpen = true;
      if (day === 0 && time >= 12 && time < 18) isOpen = true;

      if (isOpen) {
        statusBadge.className = 'status-badge status-badge--open';
        statusBadge.innerHTML = '<span class="status-badge__dot"></span> Open Now';
      } else {
        statusBadge.className = 'status-badge status-badge--closed';
        statusBadge.innerHTML = '<span class="status-badge__dot"></span> Currently Closed';
      }
    }
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
