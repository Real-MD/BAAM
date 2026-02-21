/* ================================================
   BAAM Materials Ltd — main.js
   ================================================ */

(function () {
  'use strict';

  /* ---------- Scroll Header ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ---------- Hamburger Menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('mainNav');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Intersection Observer — Fade In ---------- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Stagger children ---------- */
  const staggerGroups = [
    '.three-col .col-item',
    '.product-grid .product-card',
    '.supply-grid .supply-item',
    '.who-grid .who-item',
    '.footer-grid .footer-col'
  ];
  staggerGroups.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  /* ---------- Smooth Scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- Contact Form ---------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // If using Formspree, remove the preventDefault below
      // and set action="https://formspree.io/f/YOUR_ID" on the form
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.btn-submit');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate submission (replace with real Formspree fetch if needed)
      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        if (formSuccess) {
          formSuccess.style.display = 'block';
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 1200);
    });
  }

})();
